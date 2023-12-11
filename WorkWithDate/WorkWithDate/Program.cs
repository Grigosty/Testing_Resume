using System.Globalization;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;

namespace WorkWithDate
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите 3 числа через Enter: день, месяц, год");
            Console.WriteLine("День:");
            int days = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Месяц:");
            int mounthes = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Год:");
            int years = Convert.ToInt32(Console.ReadLine());
            Date dates = new Date(days,mounthes,years);
            Console.WriteLine("Ваша дата в корректном виде:");
            dates.Print();
            Console.WriteLine("Следующая:");
            Console.WriteLine($"The {dates.Next().day} of {dates.Next().month} {dates.Next().year}");
            Console.WriteLine("Предыдущая:");
            Console.WriteLine($"The {dates.Previous().day} of {dates.Previous().month} {dates.Previous().year}");
            Console.WriteLine("Следующие пять дней:");
            dates.PrintForward(5);
            Console.WriteLine("Предыдущие пять дней:");
            dates.PrintBackward(5);


        }
    }

    class Date
    {
        
        public int year;
        public int month;
        public int day;
        public DateTime date;
        



        public Date(int day, int month, int year)//здесь мы ТОЛЬКО приводим к нужному формату, не больше, не определяем переменную Date пока что
        {
                Year = year;
                Month = month;
                Day = day;
        }

      

        public void Print()
        {
            Console.WriteLine("The "+date.Day+" of "+date.ToString("MMMM yyyy"));            
        }

        public Date Next()
        {
            DateTime nextDateTime = date;
            Date nextDate = new Date(nextDateTime.AddDays(1).Day,nextDateTime.Month,nextDateTime.Year);
            return nextDate;
        }

        public Date Previous()
        {
            DateTime prevDateTime = date;
            Date prevDate = new Date(prevDateTime.AddDays(-1).Day, prevDateTime.AddDays(-1).Month, prevDateTime.AddDays(-1).Year);
            return prevDate;
        }

        private DateTime RecurForw(int n,int i,DateTime date)
        {
            
            if (i<n)
            {
                i++;
                
                Console.WriteLine("The " + date.AddDays(i).Day + " of " + date.AddDays(i).ToString("MMMM yyyy"));
               return RecurForw(n, i, date);
            }
            else
            {
                return date;
            }
        }

        private DateTime RecurBackw(int n, int i, DateTime date)
        {
            if (i < n)
            {
                i++;
                Console.WriteLine("The " + date.AddDays(-i).Day + " of " + date.AddDays(-i).ToString("MMMM yyyy"));
                return RecurBackw(n, i, date);
            }
            else
            {
                return date;
            }
        }

        public void PrintForward(int n)
        {
            DateTime dateForFor = date;
            RecurForw(n, 0,dateForFor);
        }

        public void PrintBackward(int n)
        {
            DateTime dateForBack = date;
            RecurBackw(n, 0, dateForBack);
        }
        public int Day
        {
            get { return day;}
            set 
            {
                if (value <= 0)
                {
                    day = 1;
                }
                else if(value >= 1 && value <= DateTime.DaysInMonth(year, month))
                {
                    day = value;
                }
                else
                {
                    while(value >= DateTime.DaysInMonth(year, month))
                    {
                        value -= DateTime.DaysInMonth(year, month);
                        month++;
                        if (month > 12)
                        {
                            Month=month;
                        }
                    }
                    day = value;
                }
                date = new DateTime(this.year, this.month, this.day);
            }
        }
        public int Month
        {
            get { return month; }
            set {
                if (value <= 0)
                {
                    month = 1;
                }
                else if(value>=1&&value<=12)
                {
                    month = value;
                }
                else if (value > 12)
                {
                    int newYears = value / 12;
                    month = value-newYears*12;
                    year = year + newYears;
                }
            }
        }

        public int Year
        {
            get { return year; }
            set
            {
                if (value <= 0)
                {
                    year = 1;
                }
                else
                {
                    year = value;
                }
            }
        }

    }
}