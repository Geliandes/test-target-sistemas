#include <stdio.h>
#include <windows.h>
#include <locale.h>

void main() {
    // definindo padr�o de acentua��o brasileira
    setlocale(LC_ALL, "Portuguese");

    //definindo um nome na barra de t�tulo da janela do console
    SetConsoleTitle("Exercicio 5 - Inverter String");

    //declara��o de vari�veis
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

    printf("O inverso da palavra �: %s \n\n", saida);

    system("pause");
}
