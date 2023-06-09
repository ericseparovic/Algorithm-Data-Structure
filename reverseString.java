// Description
// Write a function in the programming language of your choice that takes a string as input and returns the reversed string. The function should reverse both the order of the characters and the order of the words in the string. You should not use any built-in function or method that directly performs the reversal.

// Example:

// Input: "Hello world"
// Output: "dlrow olleH"

import java.util.Scanner;

// public class reverseString {
//     public static void main(String[] args) {

//         Scanner scanner = new Scanner(System.in);

//         String string = scanner.nextLine();
//         String result = "";

//         for (int i = 0; i < string.length(); i++) {
//             result += string.charAt(string.length() - i - 1);
//         }

//         System.out.println(result);

//     }
// }
public class reverseString {
    public static void main(String[] args) {
        String texto = "Hola, mundo!";
        char[] caracteres = texto.toCharArray();

        int inicio = 0;
        int fin = caracteres.length - 1;

        while (inicio < fin) {
            // Intercambiar los caracteres en las posiciones inicio y fin
            char temp = caracteres[inicio];
            caracteres[inicio] = caracteres[fin];
            caracteres[fin] = temp;

            inicio++;
            fin--;
        }

        String resultado = new String(caracteres);
        System.out.println(resultado);
    }
}
