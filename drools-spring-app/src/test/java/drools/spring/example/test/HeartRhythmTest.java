package drools.spring.example.test;

import static org.junit.Assert.assertEquals;

import java.util.Collection;

import org.drools.core.ClockType;
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

import drools.spring.example.event.HeartBeatEvent;
import drools.spring.example.event.HeartRhythmEvent;

public class HeartRhythmTest {

	@Test
	public void testHeartRhythmPositive() {
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
		ksconf2.setOption(ClockTypeOption.get(ClockType.REALTIME_CLOCK.getId()));
		KieSession ksession2 = kbase.newKieSession(ksconf2, null);

		runRealtimeClockExamplePositive(ksession1);
		runRealtimeClockExampleNegative(ksession2);

	}

	private void runRealtimeClockExamplePositive(KieSession ksession) {
		Thread t = new Thread() {
			@Override
			public void run() {
				for (int index = 0; index < 30; index++) {
					HeartBeatEvent event = new HeartBeatEvent(1);
					System.out.println(event.getExecutionTime());
					ksession.insert(event);
					try {
						Thread.sleep(100);
					} catch (InterruptedException e) {
						// do nothing
					}
				}
			}
		};
		t.setDaemon(true);
		t.start();
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// do nothing
		}
		ksession.getAgenda().getAgendaGroup("monitor").setFocus();
		ksession.fireUntilHalt();
		// ksession.fireAllRules();
		Collection<?> newEvents = ksession.getObjects(new ClassObjectFilter(HeartRhythmEvent.class));
		assertEquals(newEvents.size(), 1L);
	}

	private void runRealtimeClockExampleNegative(KieSession ksession) {
		Thread t = new Thread() {
			@Override
			public void run() {
				for (int index = 0; index < 25; index++) {
					HeartBeatEvent event = new HeartBeatEvent(1);
					//System.out.println(event.getExecutionTime());
					ksession.insert(event);
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
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			// do nothing
		}
		ksession.getAgenda().getAgendaGroup("monitor").setFocus();
		// ksession.fireUntilHalt();
		ksession.fireAllRules();
		Collection<?> newEvents = ksession.getObjects(new ClassObjectFilter(HeartRhythmEvent.class));
		assertEquals(newEvents.size(), 0L);
	}

}
