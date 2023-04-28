///////////////////////////////
// Problem 2 - isPalindrome //
/////////////////////////////
// Write a Java program that takes a word from the user and checks if it is a palindrome. 
// A palindrome is a word that is spelled the same way forwards and backwards. For example, "racecar" is a palindrome. 

import java.util.Scanner;

public class isPalindrome {
    public static void main(String[] args) {
        // Read input
        Scanner scanner = new Scanner(System.in);
        System.out.println("Write text");
        String text = scanner.nextLine();
        System.out.println(text);
        scanner.close();

        System.out.println(testIfIsPalindome(text));
    }

    public static Boolean testIfIsPalindome(String text) {
        String newText = text.replaceAll("\\s+", "").toLowerCase();
        char[] letters = newText.toCharArray();

        for (int i = 0; i < letters.length; i++) {
            if (letters[i] != letters[letters.length - 1 - i]) {
                System.out.println(letters[i] == letters[letters.length - 1 - i]);
                return false;
            }
        }

        return true;

    }
}