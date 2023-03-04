using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Distribuidora
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Insira uma palavra:");
            string entrada = Console.ReadLine();
            char[] saida = entrada.ToCharArray();
            int j = 0;

            for(int i = entrada.Length - 1; i >= 0; i--) {
                saida[j] = entrada[i];
                j++;
            }

            Console.WriteLine("\nO inverso da palavra é:");
            Console.WriteLine(saida);

            Console.WriteLine("\nExecução finalizada, pressione qualquer tecla para sair...");

            Console.ReadLine();
        }
    }
}
