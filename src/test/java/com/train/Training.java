package com.train;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Training {
	public static void main(String[] args) throws Throwable {
		
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		
		driver.get("https://www.filemail.com/share/upload-file");
		
		WebElement add = driver.findElement(By.xpath("//label[@id=\"addBtn\"]"));
		add.click();

		Robot r = new Robot();
		
		StringSelection ss = new StringSelection("C:\\Users\\senth\\Pictures\\Screenshots\\Screenshot.png");
		Toolkit.getDefaultToolkit().getSystemClipboard().setContents(ss, null);
		r.delay(2000);
		r.keyPress(KeyEvent.VK_CONTROL);
		r.keyPress(KeyEvent.VK_V);
		r.keyRelease(KeyEvent.VK_CONTROL);
		r.keyRelease(KeyEvent.VK_V);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
		
	}

}
