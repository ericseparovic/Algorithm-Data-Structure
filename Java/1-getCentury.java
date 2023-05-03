import java.util.Scanner;

/**
 * calcCentury1
 *
 * Write a Java program that prompts the user for a year, calculates and
 * displays the corresponding century in the console.}
 */
public class getCentury  {
    public static void main(String[] args) {
        int year = getYear();
        System.out.println(year);

        int century = calcCentury(year);
        System.out.println(century);

    }

    public static int getYear() {
        Scanner scanner = new Scanner(System.in);
        int year = 0;
        try {
            System.out.println("Write year");
            year = scanner.nextInt();
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        } finally {
            scanner.close();
        }

        return year;
    }

    public static int calcCentury(int year) {
        int century = year / 100 + 1;
        if (year / 100 == 0) {
            century--;
        }

        return century;
    }
}

// Solution 1 - calcCentury
// Sure! Here are the step-by-step instructions for how this solution works:

// 1. The program starts by defining a class named "calcCentury1".

// 2. Inside the class, there is a "main" method that is the entry point of the
// program. This method first calls the "getYear" method to prompt the user for
// a year and store the result in a variable named "year".

// 3. The main method then calls the "calcCentury" method to calculate the
// century that corresponds to the input year. The result is stored in a
// variable named "century".

// 4. Finally, the main method prints the output to the console using the
// "println" method. It displays the message "The year " followed by the value
// of "year", then " is century " and the value of "century".

// 5. The "getYear" method prompts the user to input a year, reads the input
// from the console using a Scanner object, and returns the result as an
// integer.

// 6. The "calcCentury" method calculates the century that corresponds to the
// input year by dividing the year by 100 and adding 1. If the year is divisible
// by 100, then the century is calculated by subtracting 1 from the result of
// the division.

// 7. The century value is then returned by the "calcCentury" method and stored
// in the "century" variable in the main method.

// 8. The program ends after printing the result to the console.

// Overall, this solution uses three methods to separate the input, processing,
// and output phases of the program. The "getYear" method is responsible for
// getting input from the user, the "calcCentury" method performs the
// calculations, and the "main" method coordinates the execution of the program
// and displays the output to the user.
