package application;

import java.util.Scanner;

import entities.Fibonacci;

public class program {

    public static void main(String[] args) {
    	
    	Scanner sc = new Scanner(System.in);
    	
    	System.out.print("Escolha a quantidade de termos: ");
    	int qtd = sc.nextInt();
    	
    	System.out.println();
    	
    	Boolean message = false;
    	    	
        for (int i = 0; i <= qtd; i++) {
            System.out.print(Fibonacci.fibonacci(i) + " ");
            
            if(qtd == Fibonacci.fibonacci(i)) {
            	message = true;
            }
        }
        
        if(message == true) {
        	System.out.println("\n\nO número " + qtd + " pertence a sequência de Fibonacci.");
        } else {
        	System.out.println("\n\nO número " + qtd + " NÃO pertence a sequência de Fibonacci.");
        }
    }

}
