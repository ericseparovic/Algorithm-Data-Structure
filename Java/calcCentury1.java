import java.util.Scanner;

/**
 * calcCentury1
 *
 * Write a Java program that prompts the user for a year, calculates and
 * displays the corresponding century in the console.}
 */
public class calcCentury1 {
    public static void main(String[] args) {
        int year = getYear();
        int century = calcCentury(year);
        System.out.println("The year " + year + " is century " + century);

    }

    public static int getYear() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Write year: ");
        int year = scanner.nextInt();
        return year;
    }

    public static int calcCentury(int year) {
        int century = year / 100 + 1;
        if (year % 100 == 0) {
            century--;
        }

        return century;
    }

}