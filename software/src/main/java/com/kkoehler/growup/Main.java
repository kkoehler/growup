package com.kkoehler.growup;

import com.pi4j.io.gpio.GpioController;
import com.pi4j.io.gpio.GpioFactory;
import com.pi4j.io.gpio.GpioPinDigitalOutput;
import com.pi4j.io.gpio.PinState;
import com.pi4j.io.gpio.RCMPin;

public class Main {

	public static void main(String[] args) throws Exception {

		final GpioController gpio = GpioFactory.getInstance();

		GpioPinDigitalOutput myRelais = gpio.provisionDigitalOutputPin(
				RCMPin.GPIO_33, "Relais", PinState.LOW);

		System.out.println("high");
		myRelais.high();
		
		Thread.sleep(1000);
		
		System.out.println("low");
		myRelais.low();
		
		Thread.sleep(1000);
		
		System.out.println("GPIO konfiguriert");
		
		myRelais.setState(PinState.HIGH);

		for (int i = 0; i < 10; i++) {
			myRelais.toggle();
			System.out.println("GPIO schalten");
			Thread.sleep(1000);
		}

	}

}
