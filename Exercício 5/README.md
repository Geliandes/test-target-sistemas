<div align="center">
  <a href="https://learn.microsoft.com/pt-br/cpp/c-language/?view=msvc-170">
    <img align="center" alt="Icon C" height="50" src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/c.svg"/>
  </a>

  <a href="https://learn.microsoft.com/pt-br/dotnet/csharp/">
    <img align="center" alt="Icon C#" height="50" src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/csharp.svg"/>
  </a>
</div>
<br/>
<br/>

5- Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
- Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
- Evite usar funções prontas, como, por exemplo, reverse;

<br/>


> O exercício foi feito em C e em C#, ambos são praticamente o mesmo código porém adaptado para cada linguagem. Ambos tem formas de entradas manuais que é solicitada ao usuário e após o usuário fazer a entrada, a inversão é feita copiando inversamente cada informação da matriz na memória e armazenando em outra matriz.

## Visualização e Execução em C
Para ver o código basta abrir o arquivo **inverter-string.c**
Para executar o programa basta executar o arquivo **inverter-string.exe** (somente para Windows)

- Observação: Para executar o programa em algum compilador online será necessário apagar os seguintes trechos: **#include <windows.h>**, **system("pause");**, **SetConsoleTitle("Exercicio 5 - Inverter String");** e **gets(entrada)**. Além disso será necessário atribuir um valor para a variável **char entrada[100]** (ex: **char entrada[100] = "paulo";**)

## Visualização e Execução em C#
Para ver o código basta abrir o arquivo **Program.cs**
Para executar o programa basta executar o arquivo **Program.cs** dentro do Visual Studio

- Observação: Para executar o programa em algum compilador online será necessário apagar o seguinte trecho: **Console.ReadLine();** localizado após a declaração da variável **string entrada**. Além disso também será necessário atribuir um valor para a variável **string entrada** (ex: **string entrada = "paulo";**)
