// Write a function that takes an array of numbers and returns the sum
// of the numbers. The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.

public class SumArray {
    public static void main(String[] args) {
        double[] numbers = {1.1, 2.2, 3.3};
        double result = sum(numbers);

        System.out.println(result);
    }

    public static double sum(double[] numbers){
        double total = 0;

        if(numbers.length == 0){
            return total;
        }

        for(int i = 0; i < numbers.length;i++){
            total = numbers[i] + total;
        }

        return total;
    }
}
