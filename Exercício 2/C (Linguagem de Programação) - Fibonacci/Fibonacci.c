#include <stdio.h>
#include <windows.h>
#include <locale.h>

void main() {
    // definindo padr�o de acentua��o brasileira
    setlocale(LC_ALL, "Portuguese");

    //definindo um nome na barra de t�tulo da janela do console
    SetConsoleTitle("Exercicio 2 - Sequencia de Fibonacci");

    //declara��o de vari�veis
    int qtd;
    int message = 0;

    printf("Escolha a quantidade de termos: ");

    //obtendo o valor inserido pelo usu�rio
    scanf("%i", &qtd);

    // o \n serve para pular uma linha
    printf("\n");

    //la�o de repeti��o chamando a fun��o Fibonacci
    for (int i = 0; i <= qtd; i++) {
        printf("%i ", Fibonacci(i));

        //caso o numero inserido pelo usu�rio exista na sequencia, a vari�vel message ficar� com o valor 1 (true)
        if(qtd == Fibonacci(i)) {
            message++;
        }
    }

    //condicionais para exibir uma mensagem de pertencimento dependendo do valor da vari�vel message sendo 0 (false) ou 1 (true)
    if(message == 1){
        printf("\n\nO n�mero %i pertence a sequ�ncia de Fibonacci.\n", qtd);
    } else{
        printf("\n\nO n�mero %i N�O pertence a sequ�ncia de Fibonacci.\n", qtd);
    }

    //pausando a tela para que ela n�o feche automaticamente ap�s a execu��o
    system("pause");
}

//fun��o recursiva de Fibonacci;
int Fibonacci(int n){
    return n < 2 ? n : Fibonacci(n - 2) + Fibonacci(n - 1);
}
