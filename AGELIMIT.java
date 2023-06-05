import java.util.Scanner;

public class AGELIMIT {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int T = scanner.nextInt();
        TestCase[] testCases = new TestCase[T];

        for (int i = 0; i < T; i++) {
            System.out.println("hola");
            int X = scanner.nextInt();
            int Y = scanner.nextInt();
            int A = scanner.nextInt();

            testCases[i] = new TestCase(X, Y, A);

        }
        scanner.close();

    }

}

class TestCase {
    private int X;
    private int Y;
    private int A;

    public TestCase(int X, int Y, int A) {
        this.X = X;
        this.Y = Y;
        this.A = A;
    }

    public int getX() {
        return X;
    }

    public int getY() {
        return Y;
    }

    public int getA() {
        return A;
    }
}