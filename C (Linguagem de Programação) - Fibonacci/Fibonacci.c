#include <stdio.h>
#include <windows.h>
#include <locale.h>

void main() {
    // definindo padrão de acentuação brasileira
    setlocale(LC_ALL, "Portuguese");

    //definindo um nome na barra de título da janela do console
    SetConsoleTitle("Exercicio 2 - Sequencia de Fibonacci");

    //declaração de variáveis
    int qtd;
    int message = 0;

    printf("Escolha a quantidade de termos: ");

    //obtendo o valor inserido pelo usuário
    scanf("%i", &qtd);

    // o \n serve para pular uma linha
    printf("\n");

    //laço de repetição chamando a função Fibonacci
    for (int i = 0; i <= qtd; i++) {
        printf("%i ", Fibonacci(i));

        //caso o numero inserido pelo usuário exista na sequencia, a variável message ficará com o valor 1 (true)
        if(qtd == Fibonacci(i)) {
            message++;
        }
    }

    //condicionais para exibir uma mensagem de pertencimento dependendo do valor da variável message sendo 0 (false) ou 1 (true)
    if(message == 1){
        printf("\n\nO número %i pertence a sequência de Fibonacci.\n", qtd);
    } else{
        printf("\n\nO número %i NÃO pertence a sequência de Fibonacci.\n", qtd);
    }

    //pausando a tela para que ela não feche automaticamente após a execução
    system("pause");
}

//função recursiva de Fibonacci;
int Fibonacci(int n){
    return n < 2 ? n : Fibonacci(n - 2) + Fibonacci(n - 1);
}
