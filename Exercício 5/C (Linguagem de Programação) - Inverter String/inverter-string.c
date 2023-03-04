#include <stdio.h>
#include <windows.h>
#include <locale.h>

void main() {
    // definindo padrão de acentuação brasileira
    setlocale(LC_ALL, "Portuguese");

    //definindo um nome na barra de título da janela do console
    SetConsoleTitle("Exercicio 5 - Inverter String");

    //declaração de variáveis
    char entrada[100];
    char saida[100];
    int j;

    //entrada de dados da palavra a ser invertida
    printf("Digite uma palavra: ");

    gets(entrada);

    //pulando linha
    printf("\n");

    //inserindo a palavra invertida dentro da variavel saida
    for(int i = strlen(entrada) - 1; i >= 0; i--){
        saida[j] = entrada[i];
        j++;
    }

    printf("O inverso da palavra é: %s \n\n", saida);

    system("pause");
}
