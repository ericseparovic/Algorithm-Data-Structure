import java.util.Scanner;
public class OppositeNumber {

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Insert Number:");
        int number = scanner.nextInt();


        int result = opposite(number);

        System.out.println(result);

        scanner.close();
    }


    public static int opposite(int number){
        return number * (-1);
    }
}
