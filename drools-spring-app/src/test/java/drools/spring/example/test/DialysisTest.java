package drools.spring.example.test;

import static org.junit.Assert.assertEquals;

import java.util.Collection;
import java.util.concurrent.TimeUnit;

import org.drools.core.ClockType;
import org.drools.core.time.SessionPseudoClock;
import org.junit.Test;
import org.kie.api.KieBase;
import org.kie.api.KieBaseConfiguration;
import org.kie.api.KieServices;
import org.kie.api.conf.EventProcessingOption;
import org.kie.api.runtime.ClassObjectFilter;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieSessionConfiguration;
import org.kie.api.runtime.conf.ClockTypeOption;

import drools.spring.example.event.DialysisEvent;
import drools.spring.example.event.Event;
import drools.spring.example.event.HeartBeatEvent;
import drools.spring.example.model.Disease;
import drools.spring.example.model.Patient;
import drools.spring.example.model.PatientDisease;
import drools.spring.example.model.User;

public class DialysisTest {

	@Test
	public void test() {
		KieServices ks = KieServices.Factory.get();
		KieContainer kContainer = ks
				.newKieContainer(ks.newReleaseId("drools-spring", "drools-spring-kjar", "0.0.1-SNAPSHOT"));

		KieBaseConfiguration kbconf = ks.newKieBaseConfiguration();
		kbconf.setOption(EventProcessingOption.STREAM);
		KieBase kbase = kContainer.newKieBase(kbconf);

		KieSessionConfiguration ksconf1 = ks.newKieSessionConfiguration();
		ksconf1.setOption(ClockTypeOption.get(ClockType.REALTIME_CLOCK.getId()));
		KieSession ksession1 = kbase.newKieSession(ksconf1, null);

		KieSessionConfiguration ksconf2 = ks.newKieSessionConfiguration();
		ksconf2.setOption(ClockTypeOption.get(ClockType.PSEUDO_CLOCK.getId()));
		KieSession ksession2 = kbase.newKieSession(ksconf2, null);

		runRealtimeClockExample(ksession1);
		runPseudoClockExample(ksession2);

	}

	private void runPseudoClockExample(KieSession ksession) {
		SessionPseudoClock clock = ksession.getSessionClock();

		Patient patient = new Patient();
		patient.setId(1);

		Disease disease = new Disease();
		disease.setName("hronicna bubrezna bolest");

		User doctor = new User();

		PatientDisease patientDisease = new PatientDisease(patient, disease, doctor);
		ksession.insert(patientDisease);

		for (int index = 0; index < 11; index++) {
			HeartBeatEvent event = new HeartBeatEvent(1);
			ksession.insert(event);

			try {
				Thread.sleep(10);
			} catch (InterruptedException e) {
				// do nothing
			}
		}

		for (int index = 0; index < 50; index++) {
			Event event = new Event(1, 1);
			ksession.insert(event);
			clock.advanceTime(10, TimeUnit.MILLISECONDS);
			int ruleCount = ksession.fireAllRules();
			// As long as there is a steady heart beat, no rule will fire
			assertEquals(ruleCount, 0L);
		}

		// clock.advanceTime(1, TimeUnit.MINUTES);
		ksession.getAgenda().getAgendaGroup("monitor").setFocus();
		int ruleCount = ksession.fireAllRules();
		assertEquals(ruleCount, 1L);
		Collection<?> newEvents = ksession.getObjects(new ClassObjectFilter(DialysisEvent.class));
		assertEquals(newEvents.size(), 1L);
	}

	private void runRealtimeClockExample(KieSession ksession) {
		Thread t = new Thread() {
			@Override
			public void run() {
				Patient patient = new Patient();
				patient.setId(1);

				Disease disease = new Disease();
				disease.setName("hronicna bubrezna bolest");

				User doctor = new User();

				PatientDisease patientDisease = new PatientDisease(patient, disease, doctor);
				ksession.insert(patientDisease);
				for (int index = 0; index < 11; index++) {
					HeartBeatEvent event = new HeartBeatEvent(1);
					ksession.insert(event);

					try {
						Thread.sleep(10);
					} catch (InterruptedException e) {
						// do nothing
					}
				}

				for (int index = 0; index < 50; index++) {
					Event event = new Event(1, 1);
					ksession.insert(event);
					try {
						Thread.sleep(10);
					} catch (InterruptedException e) {
						// do nothing
					}
				}
			}
		};
		t.setDaemon(true);
		t.start();
		try {
			Thread.sleep(200);
		} catch (InterruptedException e) {
			// do nothing
		}
		ksession.getAgenda().getAgendaGroup("monitor").setFocus();
		ksession.fireUntilHalt();
		Collection<?> newEvents = ksession.getObjects(new ClassObjectFilter(DialysisEvent.class));
		assertEquals(newEvents.size(), 1L);
	}

}
