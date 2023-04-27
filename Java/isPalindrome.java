import java.util.Scanner;

import javax.print.attribute.standard.RequestingUserName;

/**
 * isPalindrome
 */
public class isPalindrome {

    public static void main(String[] args) {

        String word = getString();
        System.out.print(testIfPalindrome(word));

    }

    public static String getString() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Insert word");
        String input = scanner.nextLine();
        scanner.close();
        return input;
    }

    public static Boolean testIfPalindrome(String word) {
        char[] letters = word.toCharArray();
        // If the string is odd, it is not a palindrome
        if (letters.length % 2 == 0) {
            return false;
        }

        for (int i = 0; i < letters.length; i++) {
            int right = i;
            int left = letters.length - 1 - i;

            if (letters[left] != letters[right]) {
                return false;
            }
        }

        return true;
    }
}