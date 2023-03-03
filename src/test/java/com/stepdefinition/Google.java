package com.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Google {
	
	
	public static WebDriver driver;
	
	@Given("^user Launching The Url$")
	public void user_Launching_The_Url()  {
		WebDriverManager.chromedriver().setup();
		driver= new ChromeDriver();
		driver.get("https://www.google.com");
		
	}

	@When("^user Input The Search Location In Input Field$")
	public void user_Input_The_Search_Location_In_Input_Field() {
		driver.findElement(By.name("q")).sendKeys("Chennai");
	}

	@When("^user Clicks Search Button$")
	public void user_Clicks_Search_Button() throws InterruptedException  {
		Thread.sleep(5000);
		driver.findElement(By.xpath("(//input[@name='btnK'])[1]")).click();
	}

	@Then("^it Navigates To Next Page$")
	public void it_Navigates_To_Next_Page() {
		System.out.println("Next page");
	}
}
