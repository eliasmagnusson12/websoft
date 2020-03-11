using System;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic ;

namespace console
{
    class Program
    {
        static void Main(string[] args)
        {
           bool boolean = true;

            while (boolean){

                    boolean = menu();

            }

        
            
        }
        private static bool menu()
        {
            var accounts = ReadAccounts();    

            
            Console.WriteLine("------Options------");
            Console.WriteLine("1) View Accounts");
            Console.WriteLine("2) View Account By Number");
            Console.WriteLine("3) Exit");
            
            switch (Console.ReadLine())
            {
                case "1":

                Console.WriteLine("+--------+---------+-----------+-------+");
                Console.WriteLine("| Number | Balance |   Label   | Owner |");
                Console.WriteLine("+--------+---------+-----------+-------+");

                foreach (var account in accounts) {
                
                Console.Write("| "); Console.Write(account.Number); Console.Write(" |   "); Console.Write(account.Balance); Console.Write("    |   "); Console.Write(account.Label); Console.Write("  |   ");Console.Write(account.Owner);Console.WriteLine("  |");
                Console.WriteLine("+--------+---------+-----------+-------+");
            }
                return true;
                

                case "2":
                
                Console.WriteLine("Search number:");
                var search = Console.ReadLine();

                foreach (var account in accounts) {
                        
                    if ( account.Number == Int32.Parse(search) ){
                        Console.WriteLine("+--------+---------+-----------+-------+");
                        Console.WriteLine("| Number | Balance |   Label   | Owner |");
                        Console.WriteLine("+--------+---------+-----------+-------+");
                        Console.Write("| "); Console.Write(account.Number); Console.Write(" |   ");
                         Console.Write(account.Balance); Console.Write("    |   "); 
                         Console.Write(account.Label); Console.Write("  |   ");
                         Console.Write(account.Owner);Console.WriteLine("  |");
                        Console.WriteLine("+--------+---------+-----------+-------+");
                    }
            }    
                return true;
                case "3":
                return false;
                default:
                    Console.WriteLine("Please enter a proper number");

                return true;
            }




        }

        static IEnumerable<Account> ReadAccounts()
        {
            String file = "../data/account.json";

            using (StreamReader r = new StreamReader(file))
            {
                string data = r.ReadToEnd();
                // Console.WriteLine(data);

                var json = JsonSerializer.Deserialize<Account[]>(
                    data,
                    new JsonSerializerOptions {
                        PropertyNameCaseInsensitive = true
                    }
                );

                //Console.WriteLine(json[0]);
                return json;
            }
        }



        public class Account
    {
        public int Number { get; set; }
        public int Balance { get; set; }
        public string Label { get; set; }
        public int Owner { get; set; }
        
        public override string ToString() {
            return JsonSerializer.Serialize<Account>(this);
        }
    }




    }
}