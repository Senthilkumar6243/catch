package com.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import io.github.bonigarcia.wdm.WebDriverManager;

	@RunWith(Cucumber.class)
	@CucumberOptions(features =  "C:\\Users\\senth\\eclipse-workspace1\\CucumberProject\\src\\test\\java\\com\\feature\\Adactin.feature",
	glue = "com.stepdefinition",
			monochrome = true,
//			tags = ("@SmokeTesting"),
			dryRun = false,
			plugin = {"html:Reports/Html_Report1",
					"pretty",
					"json:Reports/Json_Report1.json",
					"com.cucumber.listener.ExtentCucumberFormatter:Reports/ExtentReport1.html"
	}	
	)
	public class runner {
		
		public static WebDriver driver ;
		
		
		@BeforeClass
		public static void setUp() {
			
			WebDriverManager.chromedriver().setup();
			
			  driver = new ChromeDriver();
			
			driver.manage().window().maximize();

		}
		
		@AfterClass
		public static void tearDown() {
			
			driver.close();

		}

	}

