// Problem Description:
// Write a program that iterates over the numbers from 1 to 100. For each number, the program should follow the following rules:

// If the number is divisible by 3, it should print "Fizz" instead of the number.
// If the number is divisible by 5, it should print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, it should print "FizzBuzz" instead of the number.
// Otherwise, it should print the number as is.
// Requirements:
// The program should be written in a programming language of your choice.
// The program should be able to print numbers from 1 to 100, following the rules mentioned above.

public class fizzBuzz {
    public static void main(String[] args) {
        for (int i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }

        }
    }

}
