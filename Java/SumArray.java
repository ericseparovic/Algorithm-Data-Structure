// Write a function that takes an array of numbers and returns the sum
// of the numbers. The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.

public class SumArray {
    public static void main(String[] args) {
        // Declares and initializes an array of double numbers with three elements.
        double[] numbers = {1.1, 2.2, 3.3};
        // Calls the "sum" method passing the "numbers" array and assigns the returned value to the "result" variable.
        double result = sum(numbers);

        // Prints the value of "result" to the console.
        System.out.println(result);
    }

    // Calculates the sum of the numbers in the given array.
    public static double sum(double[] numbers){
        // Declares and initializes a variable "total" to store the sum of the numbers.
        double total = 0;

        // Checks if the array "numbers" is empty.
        if(numbers.length == 0){
            // If the array is empty, returns 0.
            return total;
        }

        // Iterates over each element in the "numbers" array and adds it to the "total".
        for(int i = 0; i < numbers.length; i++){
            total = numbers[i] + total;
        }

        // Returns the calculated total sum.
        return total;
    }
}
