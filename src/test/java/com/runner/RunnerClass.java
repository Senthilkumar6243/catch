package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\senth\\eclipse-workspace1\\CucumberProject\\src\\test\\java\\com\\feature\\Google.feature",
glue="com.stepdefinition",
plugin={"html:Reports/murugan2.html",
"com.cucumber.listener.ExtentCucumberFormatter:Reports/murugan.html"})
public class RunnerClass {
	
	

}
