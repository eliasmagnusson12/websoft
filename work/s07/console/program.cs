using System;
using System.IO;
using System.Text.Json;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace accountApplication
{
    class Program
    {

        static void Main(string[] args)
        {
            var accounts = readData();
            bool appIsRunning = true;
            Console.Clear();

            while(appIsRunning){
                appIsRunning = showMenu(accounts);
            }

        }

        private static bool showMenu(IEnumerable<Account> accounts){
            
            Console.WriteLine("\n+----- Account Handler -----+");
            Console.WriteLine("| 1. View accounts          |");
            Console.WriteLine("| 2. View account by number |");
            Console.WriteLine("| 3. Exit                   |");
            Console.WriteLine("+---------------------------+");

            Console.Write("Enter choice >> ");
            switch (Console.ReadLine()){
                case "1":
                    viewAccounts(accounts);
                    return true;
                case "2":
                    viewAccountById(accounts);
                    return true;
                case "3":
                    return false;
                default:
                    return true;
            }
        }

        public static Account[] readData(){


            String file = "../data/account.json";

            using (StreamReader r = new StreamReader(file))
            {
                string data = r.ReadToEnd();

                var json = JsonSerializer.Deserialize<Account[]>(
                    data,
                    new JsonSerializerOptions {
                        PropertyNameCaseInsensitive = true
                    }
                );

                return json;
            }
        }

        public static void viewAccounts(IEnumerable<Account> accounts){

            Console.WriteLine("\n+---------- View Accounts -----------+");
            Console.WriteLine("| Number | Balance |  Label  | Owner |");
            Console.WriteLine("|------------------------------------|");
            
            foreach (Account account in accounts){
                Console.WriteLine(buildAccountString(account));
            }
            Console.WriteLine("+------------------------------------+");
            
        }

        public static void viewAccountById(IEnumerable<Account> accounts){

            if (accounts == null){
                Console.WriteLine("You have to view all accounts first.");
                return;
            }

            Console.Write("Enter the account number to view >> ");
            var accountNumber = Console.ReadLine();
            Console.WriteLine("\n+----------- View Account -----------+");
            Console.WriteLine("| Number | Balance |  Label  | Owner |");
            Console.WriteLine("|------------------------------------|");

            foreach (Account account in accounts){
                if (accountNumber == account.Number.ToString()){
                    Console.WriteLine(buildAccountString(account));
                    break;
                }
            }
            Console.WriteLine("+------------------------------------+");
              
        }
        

        public static String buildAccountString(Account account){
            String accountString = "";
            String number = "";
            String balance = "";
            String label = "";
            String owner = "";

            number = "| " + account.Number;
            if(number.Length < 9){
                String append = new String(' ', 9 - number.Length);
                number += append + "|";
            }else {
                number += "|";
            }

            balance = " " + account.Balance;
            if (balance.Length < 9){
                String append = new String(' ', 9 - balance.Length);
                balance += append + "|";
            }else {
                balance += "|";
            }

            label = " " + account.Label;
            if (label.Length < 9){
                String append = new String(' ', 9 - label.Length);
                label += append + "|";
            }else {
                label += "|";
            }

            owner = " " + account.Owner;
            if (owner.Length < 8){
                String append = new String(' ', 7 - owner.Length);
                owner += append + "|";
            }else {
                owner += "|";
            }

            accountString = number + balance + label + owner;
            return accountString;

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