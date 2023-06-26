public class maximumNumber {
    public static void main(String[] args) {
        int[] numbers = { 1, 3, 5, 4, 2 };

        int maximum = findMaximum(numbers);

        System.out.println(maximum);
    }

    public static int findMaximum(int[] numbers) {
        int maximum = numbers[0];

        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > maximum) {
                maximum = numbers[i];
            }

        }

        return maximum;

    }

}