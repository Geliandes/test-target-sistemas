package entities;

public class Fibonacci {
    public static long fibonacci(int n) {
        return n < 2 ? n : fibonacci(n - 2) + fibonacci(n - 1);
    }
}