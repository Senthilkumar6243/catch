package com.train;


public class Armstrong {
	
	public static void numbers() {
		
		int a=0;
		int b=0;
		
		for(int i=1;i<=10;i++) {
		if(i%2==0) {
			//System.out.println("Even no."+ i);
			a++;
		}
		else {
			System.out.println("Odd no ."+ i);
		b++;
		}
	}
		System.out.println(b);
	}
	
	public static void main(String[] args) {
		
		numbers();
		for (int k = 0; k < 1000; k++) {
			
		int a = k;
		int i=0,j=0;
		
		while (a>0) {
			i=a%10;
			j=j+(i*i*i);
			a=a/10;	
		}
		if (j==k) {
			System.out.println("Armstrong number:"+j);	
		}
		
		}
	
}
}
