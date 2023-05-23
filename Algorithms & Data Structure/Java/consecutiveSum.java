package Java;

/**
 * 1-consecutiveSum
 * Create a function that returns an array, sums all the elements, and returns
 * the sum.
 */
public class consecutiveSum {
    public static void main(String[] args) {
        int[] numbers = { 1, 2, 3, 4, 5 };

        int result = sum(numbers);

        System.out.println(result);

    }

    public static int sum(int[] numbers) {
        int total = 0;
        for (int i = 0; i < numbers.length; i++) {
            total = total + numbers[i];
        }

        return total;

    }
}
