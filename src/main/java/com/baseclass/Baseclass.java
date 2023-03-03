package com.baseclass;

import java.util.List;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Baseclass {
	public static WebDriver driver;
	
	public static WebDriver browserLaunch(String type) {
		
		if (type.equalsIgnoreCase("chrome")) {
			 driver = new ChromeDriver();
			 driver.manage().window().maximize();	
		}
		else if (type.equalsIgnoreCase("firefox")) {
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
			
		}
		return driver;
	}
	public static void getUrl(String value) {
		driver.get(value);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}
	public static void inputValueElement(WebElement element,String value) {
		element.sendKeys(value);

	}
	public static void clickOnElement(WebElement element , String value) {
		element.sendKeys(value);
		

	}
	public static void close() {

		driver.close();
	}
	public static void quitMethod() {

		driver.quit();
	}
	public static void navigateTo(String url) {

		driver.navigate().to(url);
	}
	public static void navigateForward() {

		driver.navigate().forward();
	}
	public static void navigateBack() {

		driver.navigate().back();
		
	}
	public static void refresh() {

		driver.navigate().refresh();
	}
	public static void getText(WebElement element) {

		System.out.println(element.getText());
	}
	public static void getAttribute(WebElement element,String value) {

		String attribute = element.getAttribute(value);
		System.out.println(attribute);
	}
	public static void radioButton(WebElement element) {
		element.click();

	}
	public static void getOptions(WebElement element) {

		Select s = new Select(element);
		List<WebElement> options = s.getOptions();
		for (WebElement w : options) {
			System.out.println(w.getText());
		}
	}
	public static void firstSelectedOptions(WebElement element) {

		Select s = new Select(element);
		WebElement f = s.getFirstSelectedOption();
		System.out.println(f.getText());
	}
	public static void getAllSelectedOptions(WebElement element) {

		Select s = new Select(element);
		List<WebElement> a = s.getAllSelectedOptions();
		for (WebElement d : a) {
			System.out.println(d.getText());
			
		}
	}
	public static void simpleAlert(WebElement element ) {
		element.click();
		Alert alert = driver.switchTo().alert();
		alert.accept();
		
	}
	public static void confirmAlert(WebElement element) {
		element.click();
		Alert alert = driver.switchTo().alert();
		alert.dismiss();

	}
	public static void promptAlert(WebElement element,String value) {
		element.click();
		Alert alert = driver.switchTo().alert();
		alert.sendKeys(value);

	}
	public static void moveToElement(WebElement element) {

		Actions ac = new Actions(driver);
		ac.moveToElement(element).build().perform();
			
	}
	public static void doubleClick(WebElement element) {
		Actions ac = new Actions(driver);
		ac.doubleClick(element).build().perform();
		
	}
	public static void rightClick(WebElement element) {
		Actions ac = new Actions(driver);
		ac.contextClick(element).build().perform();
	}
	public static void actionsclick(WebElement element) {
		Actions ac = new Actions(driver);
		ac.click(element);

	}
	public static void dragAndDrop(WebElement element1 , WebElement element2) {
		Actions ac = new Actions(driver);
		ac.dragAndDrop(element1, element2).build().perform();
		
	}
	public static void scrollIntoView(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("argument[0].scrollIntoView();", element);

	}
	public static void getAlertText(WebElement element , String value) {
		element.click();
		Alert alert = driver.switchTo().alert();
		alert.getText();
	}
	public static void explixitWait(WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOf(element));
		
	}
	

}
