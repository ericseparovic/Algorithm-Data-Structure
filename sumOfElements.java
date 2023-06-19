/**
 * sumOfElements
 */

// Implement a function that takes an array of integers as input and returns the
// sum of all the elements.

// Example input: [1, 2, 3, 4, 5]
// Expected output: 15

public class sumOfElements {

    public static void main(String[] args) {
        int[] numbers = { 1, 2, 3, 4, 5 };

        int sum = sumTotal(numbers);
        System.out.println(sum);

    }

    private static int sumTotal(int[] numbers) {
        int total = 0;

        for (int i = 0; i < numbers.length; i++) {
            total += numbers[i];

        }
        return total;
    }

}