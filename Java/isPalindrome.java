import java.util.Scanner;

/**
 * isPalindrome
 */
public class isPalindrome {

    public static void main(String[] args) {

        String word = getString();
        System.out.println(word);
        char[] letters = word.toCharArray();

        for (int i = 0; i < letters.length; i++) {
            System.out.println(letters[i]);
        }

    }

    public static String getString() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Insert word");
        String input = scanner.nextLine();
        scanner.close();
        return input;
    }

}