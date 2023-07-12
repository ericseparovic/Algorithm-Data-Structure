import java.util.Scanner;
// Import the Scanner class from the java.util package to read user input.

public class OppositeNumber {

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        // Create an instance of Scanner to read user input.

        System.out.println("Insert Number:");
        int number = scanner.nextInt();

        // Prompt the user to insert a number and read the entered number.

        int result = opposite(number);

        // Call the "opposite" method passing the entered number and assign the result to the "result" variable.

        System.out.println(result);

        // Print the result to the console.

        scanner.close();

        // Close the Scanner object to release the resources used.
    }


    public static int opposite(int number){
        return number * (-1);

        // Calculate the opposite of the given number by multiplying it by -1 and return it.
    }
}
