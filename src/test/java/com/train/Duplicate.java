package com.train;

import java.util.Scanner;

public class Duplicate{
	
	public static void main(String[] args) {
		/*int first =0, second =1;
		int third =0;
		
		System.out.print(first + " "+ second + " ");
		
		while (third < 100) {
			third = first + second;
			System.out.print(third+" ");
			first = second;
			second = third;*/
			
			
			/* HBJHBJHBHJB
			 * JVHJVHJ
			 * VJVHJVJ
			 * BKJBKJB
			 * VJHVHJ
			 * BKBKJB */
			
			// JKBKJBKJBKJBJKBJB 
	
	
		Scanner in = new Scanner(System.in);
		String input, reverse="";
		
		System.out.println("Enter a line to check for palindrome : ");
		input = in.nextLine();
		
		for (int i=input.length()-1; i>=0; i--) {
			reverse += input.charAt(i);
		}
		
		if(reverse.equals(input)) {
			System.out.println("'"+input+"' is a Palindrome");
		}
		
		else {
			System.out.println("'"+input+"' is not a Palindrome");
		}
	}
}
