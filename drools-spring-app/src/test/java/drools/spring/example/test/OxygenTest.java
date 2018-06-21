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

import drools.spring.example.event.OxygenEvent;
import drools.spring.example.event.OxygenLevelEvent;

public class OxygenTest {

	@Test
	public void testOxgenLevel() {
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

		KieSessionConfiguration ksconf3 = ks.newKieSessionConfiguration();
		ksconf3.setOption(ClockTypeOption.get(ClockType.PSEUDO_CLOCK.getId()));
		KieSession ksession3 = kbase.newKieSession(ksconf3, null);

		// runRealtimeClockExamplePositive(ksession1);
		runPseudoClockExamplePositive(ksession2);
		runPseudoClockExampleNegative(ksession3);

	}

	private void runPseudoClockExamplePositive(KieSession ksession) {
		SessionPseudoClock clock = ksession.getSessionClock();
		for (int index = 0; index < 100; index++) {
			OxygenLevelEvent beep = new OxygenLevelEvent(1L, 60);
			ksession.insert(beep);
			clock.advanceTime(10, TimeUnit.MILLISECONDS);
			int ruleCount = ksession.fireAllRules();
			assertEquals(ruleCount, 0L);
		}

		clock.advanceTime(15, TimeUnit.MINUTES);
		ksession.getAgenda().getAgendaGroup("monitor").setFocus();
		int ruleCount = ksession.fireAllRules();
		assertEquals(ruleCount, 1L);
		Collection<?> newEvents = ksession.getObjects(new ClassObjectFilter(OxygenEvent.class));
		assertEquals(newEvents.size(), 1L);
	}

	private void runRealtimeClockExamplePositive(KieSession ksession) {
		Thread t = new Thread() {
			@Override
			public void run() {
				for (int index = 0; index < 10000; index++) {
					OxygenLevelEvent beep = new OxygenLevelEvent(1L, 69);
					System.out.println(beep.getExecutionTime());
					ksession.insert(beep);
					try {
						Thread.sleep(1000);
					} catch (InterruptedException e) {
						// do nothing
					}
				}
			}
		};
		t.setDaemon(true);
		t.start();
		try {
			Thread.sleep(900000);
		} catch (InterruptedException e) {
			// do nothing
		}
		ksession.getAgenda().getAgendaGroup("monitor").setFocus();
		ksession.fireUntilHalt();
		Collection<?> newEvents = ksession.getObjects(new ClassObjectFilter(OxygenEvent.class));
		assertEquals(newEvents.size(), 1L);
	}

	private void runPseudoClockExampleNegative(KieSession ksession) {
		SessionPseudoClock clock = ksession.getSessionClock();
		for (int index = 0; index < 100; index++) {
			OxygenLevelEvent event = new OxygenLevelEvent(1L, 60);
			ksession.insert(event);
			clock.advanceTime(10, TimeUnit.MILLISECONDS);
			int ruleCount = ksession.fireAllRules();
			assertEquals(ruleCount, 0L);
		}

		OxygenLevelEvent event = new OxygenLevelEvent(1L, 65);
		ksession.insert(event);

		OxygenLevelEvent event1 = new OxygenLevelEvent(1L, 69);
		ksession.insert(event1);

		OxygenLevelEvent event2 = new OxygenLevelEvent(1L, 70);
		ksession.insert(event2);

		clock.advanceTime(15, TimeUnit.MINUTES);
		ksession.getAgenda().getAgendaGroup("monitor").setFocus();
		int ruleCount = ksession.fireAllRules();
		assertEquals(ruleCount, 0L);
	}

}
