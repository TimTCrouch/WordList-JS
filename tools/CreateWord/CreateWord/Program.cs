using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace CreateWord
{
    class Program
    {
        static void Main(string[] args)
        {
            //Create needed variables
            string[] holder;
            string temporary;
            string lander;

            //Get the letter for the CSV file you want to convert to a JS array
            Console.WriteLine("Welcome! Please enter the letter of the CSV file you want to process: ");
            string letter = Console.ReadLine();

            //Create an array of all values in the CSV file 
            string inputFileName = @"C:\Users\dacyp_000\programming\Word Library JS\v0.1\data\" + letter + "_words.csv";
            string[] allLines = File.ReadAllLines(inputFileName);

            //Set array length
            holder = new string[allLines.Length + 2];

            //Set up initial part to file
            string fileName = @"C:\Users\dacyp_000\programming\Word Library JS\WordList_" + letter + ".js";
            string opening = "Word_List.loadBank([";
            holder[0] = opening;           

            //Remove the comma from each line and read them into an array
            for (int x = 0; x < allLines.Length; x++) {
                lander = allLines[x];
                temporary = "\"" + lander + "\"";
                if (x + 1 != allLines.Length) {
                    temporary += ",";
                }
                holder[x + 1] = temporary;
            }

            holder[holder.Length - 1] = "]);";
            
            //Write the array to the file            
            System.IO.File.WriteAllLines(fileName, holder);
       
        }
    }
}
