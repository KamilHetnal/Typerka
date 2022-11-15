using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context
        //,UserManager<AppUser> userManager
            )
        {
            /*if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "Bob",
                        UserName = "bob",
                        Email = "bob@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Jane",
                        UserName = "jane",
                        Email = "jane@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Tom",
                        UserName = "tom",
                        Email = "tom@test.com"
                    },
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }*/

            if (context.Matches.Any()) return;

            var championships = new List<Championship>
            {
                new Championship
            {
                Title = "Mistrzostwa Świata 2022",
                Country = "Katar"
            }
            };

            var teams = new List<Team>
                {
                    new Team
                    {
                        Name = "Polska",
                        Players = new List<Player>()
                        {
                            new Player{Name= "Wojciech Szczęsny",Position= "Bramkarz"},
                            new Player{Name= "Kamil Grabara",Position= "Bramkarz"},
                            new Player{Name= "Lukasz Skorupski",Position= "Bramkarz"},
                            new Player{Name= "Jan Bednarek",Position= "Obronca"},
                            new Player{Name= "Kamil Glik",Position= "Obronca"},
                            new Player{Name= "Robert Gumny",Position= "Obronca"},
                            new Player{Name= "Artur Jedrzejczyk",Position= "Obronca"},
                            new Player{Name= "Jakub Kiwior",Position= "Obronca"},
                            new Player{Name= "Mateusz Wieteska",Position= "Obronca"},
                            new Player{Name= "Bartosz Bereszynski",Position= "Obronca"},
                            new Player{Name= "Mati Kasz",Position= "Obronca"},
                            new Player{Name= "Nicola Zalewski",Position= "Obronca"},
                            new Player{Name= "Krystian Bielik",Position= "Pomocnik"},
                            new Player{Name= "Przemyslaw Frankowski",Position= "Pomocnik"},
                            new Player{Name= "Kamil Grosicki",Position= "Pomocnik"},
                            new Player{Name= "Grzegorz Krychowiak",Position= "Pomocnik"},
                            new Player{Name= "Jakub Kamiński",Position= "Pomocnik"},
                            new Player{Name= "Michal Skóraś",Position= "Pomocnik"},
                            new Player{Name= "Damian Szymański",Position= "Pomocnik"},
                            new Player{Name= "Sebastian Szymańsi",Position= "Pomocnik"},
                            new Player{Name= "Piotr Zielinsk",Position= "Pomocnik"},
                            new Player{Name= "Szymon Żurkowski",Position= "Pomocnik"},
                            new Player{Name= "Robert Lewandowski",Position= "Napastnik"},
                            new Player{Name= "Arkadiusz Milik",Position= "Napastnik"},
                            new Player{Name= "Krzysztof Piątek",Position= "Napastnik"},
                            new Player{Name= "Karol Świderski",Position= "Napastnik"},
                        },
                        Group = "C",
                        Info = "Po zapewnieniu sobie miejsca na mundialu w 2022 roku w barażach, Polska wystąpi w Mistrzostwach Śwata po raz ósmy. Najlepsze wyniki biało-czerwoni osiągneli podczas tak wanej złotej ery, zajmując trzecie miejsce w MŚ w 1974 i 1982 roku. Z najlepszyn na świecie piłkarzem Robertem Lewandowskim w pierwszej linii ataku, Polska ma nadzieję wrócić w Katarze do minionej chwały.",
                        BestResult ="3. miejsce",
                        BestResultDates = " 1974 , 1984 "
                    },
                    new Team
                    {
                        Name = "Holandia",
                        Players = new List<Player>()
                        {
                                new Player{Name= "Justin Bijlow",Position= "Bramkarz"},
                                new Player{Name= "Andries Noppert",Position= "Bramkarz"},
                                new Player{Name= "Remko Pasveer",Position= "Bramkarz"},
                                new Player{Name= "Virgil van Dijk",Position= "Obronca"},
                                new Player{Name= "Nathan Ake",Position= "Obronca"},
                                new Player{Name= "Daley Blind",Position= "Obronca"},
                                new Player{Name= "Denze",Position= "Obronca"},
                                new Player{Name= "Jurrien Timber",Position= "Obronca"},
                                new Player{Name= "Dumfries",Position= "Obronca"},
                                new Player{Name= "Stefan de Vrij",Position= "Obronca"},
                                new Player{Name= "Matthijs de Ligt",Position= "Obronca"},
                                new Player{Name= "Tyrell Malacia",Position= "Obronca"},
                                new Player{Name= "Jeremie Frimpong",Position= "Obronca"},
                                new Player{Name= "Frenkie de Jong",Position= "Pomocnik"},
                                new Player{Name= "Steven Berghuis",Position= "Pomocnik"},
                                new Player{Name= "Davy Klaassen",Position= "Pomocnik"},
                                new Player{Name= "Teun Koopmeiners",Position= "Pomocnik"},
                                new Player{Name= "Marten de Roon",Position= "Pomocnik"},
                                new Player{Name= "Cody Gakpo",Position= "Pomocnik"},
                                new Player{Name= "enneth Taylor",Position= "Pomocnik"},
                                new Player{Name= "Xavi Simons",Position= "Pomocnik"},
                                new Player{Name= "Memphis Depay",Position= "Napastnik"},
                                new Player{Name= "Steven Bergwijn",Position= "Napastnik"},
                                new Player{Name= "Vincent Janssen",Position= "Napastnik"},
                                new Player{Name= "Luuk de Jong",Position= "Napastnik"},
                                new Player{Name= "Noa Lang",Position= "Napastnik"},
                                new Player{Name= "Wout Weghorst",Position= "Napastnik"},
                        },
                        Group = "A",
                        Info = "w 2022 roku Holandia wystąpi na mundialu po raz jedenasty. W latach siedemdziesiątych pomarańczowi trafili na okładki pism sportowych dzięki wyjątkowemu stylowi gry, zwanego futbolem totalnym. Trzykrotnie przegrywali finał MŚ. Ich ostatni sukces miał miejsce w 2014 roku, kiedy po zwycięstwie nad Brazylią 3-0 zapewnili sobie 3 miejsce na turnieju.",
                        BestResult = "2. miejsce",
                        BestResultDates = "1974, 1978, 2010"

                    },
                    new Team
                    {
                        Name = "Ekwador",
                        Players = new List<Player>()
{
        new Player{Name= "Moises Ramirez",Position= "Bramkarz"},
        new Player{Name= "Alexander Dominguez",Position= "Bramkarz"},
        new Player{Name= "Hernan Galindez",Position= "Bramkarz"},
        new Player{Name= "Piero Hincapie",Position= "Obronca"},
        new Player{Name= "Robert Arboleda",Position= "Obronca"},
        new Player{Name= "Pervis Estupinan",Position= "Obronca"},
        new Player{Name= "Angelo Preciado",Position= "Obronca"},
        new Player{Name= "Jackson Porozo",Position= "Obronca"},
        new Player{Name= "Xavier Arreaga",Position= "Obronca"},
        new Player{Name= "Felix Torres",Position= "Obronca"},
        new Player{Name= "Diego Palacios",Position= "Obronca"},
        new Player{Name= "William Pacho",Position= "Obronca"},
        new Player{Name= "Carlos Gruezo",Position= "Pomocnik"},
        new Player{Name= "Jose Cifuentes",Position= "Pomocnik"},
        new Player{Name= "Alan Franco",Position= "Pomocnik"},
        new Player{Name= "Moises Caicedo",Position= "Pomocnik"},
        new Player{Name= "Angel Mena",Position= "Pomocnik"},
        new Player{Name= "Jeremy Sarmiento",Position= "Pomocnik"},
        new Player{Name= "Ayrton Preciado",Position= "Pomocnik"},
        new Player{Name= "Sebastian Mendez",Position= "Pomocnik"},
        new Player{Name= "Gonzalo Plata",Position= "Pomocnik"},
        new Player{Name= "Romario Ibarra",Position= "Pomocnik"},
        new Player{Name= "Djorkaeff Reasco",Position= "Napastnik"},
        new Player{Name= "Kevin Rodriguez",Position= "Napastnik"},
        new Player{Name= "Michael Estrada",Position= "Napastnik"},
        new Player{Name= "Enner Valencia",Position= "Napastnik"},
},
                        Group = "A",
                        Info="Ekwador po raz pierwszy występił na mundialu w 2002 roku. W kolejnych zakwalifikował się do turnieju jeszcze trzy razy. Zespól ‘La Tricolor’ zawsze wracał z turnieju z przynajmniej jednym zwycięstwem. W tym roku ich celem jest dotarcie do fazy pucharowej, tak jak w 2006 roku, kiedy to przegrali z Anglią 1-0 w jednej ósmej finału.",
                        BestResult="1/8 finału",
                        BestResultDates = "2006"

                    },
                    new Team
                    {
                        Name = "Senegal",
                        Players = new List<Player>()
                        {
                            new Player{Name= "Edouard Mendy",Position= "Bramkarz"},
                            new Player{Name= "Alfred Gomis",Position= "Bramkarz"},
                            new Player{Name= "Seny Dieng",Position= "Bramkarz"},
                            new Player{Name= "Kalidou Koulibaly",Position= "Obronca"},
                            new Player{Name= "Abdou Diallo",Position= "Obronca"},
                            new Player{Name= "Youssouf Sabaly",Position= "Obronca"},
                            new Player{Name= "Fode Ballo-Toure",Position= "Obronca"},
                            new Player{Name= "Pape Abdou Cisse",Position= "Obronca"},
                            new Player{Name= "Ismail Jakobs",Position= "Obronca"},
                            new Player{Name= "Formose Mendy",Position= "Obronca"},
                            new Player{Name= "Idrissa Gueye",Position= "Pomocnik"},
                            new Player{Name= "Cheikhou Kouyate",Position= "Pomocnik"},
                            new Player{Name= "Nampalys Mendy",Position= "Pomocnik"},
                            new Player{Name= "Krepin Diatta",Position= "Pomocnik"},
                            new Player{Name= "Pape Gueye",Position= "Pomocnik"},
                            new Player{Name= "Pape Matar Sarr",Position= "Pomocnik"},
                            new Player{Name= "Pathe Ciss",Position= "Pomocnik"},
                            new Player{Name= "Moustapha Name",Position= "Pomocnik"},
                            new Player{Name= "Loum Ndiaye",Position= "Pomocnik"},
                            new Player{Name= "Sadio Mane",Position= "Napastnik"},
                            new Player{Name= "Ismaila Sarr",Position= "Napastnik"},
                            new Player{Name= "Boulaye Dia",Position= "Napastnik"},
                            new Player{Name= "Bamba Dieng",Position= "Napastnik"},
                            new Player{Name= "Famara Diedhiou",Position= "Napastnik"},
                            new Player{Name= "Nicolas Jackson",Position= "Napastnik"},
                            new Player{Name= "Iliman Ndiaye",Position= "Napastnik"},
                        },
                        Group = "A",
                        Info="Turniej w Katarze będzie trzecim występem Senegalu na MŚ. Ich pierwszy występ w 2002 roku przyczynił się do jednej z największych niespodzianek w historii turnieju, bo Senegal pokonał wtedy broniących tytułu Francuzów 1-0. Zwycięskiego gola strzelił Papa Bouba Diop. W tym turnieju Senegalczycy dotarli do ćwierćfinału, pokonując Szwecję 2-1.",
                        BestResult="Ćwierćfinał",
                        BestResultDates = "2002"

                    },
                    new Team
                    {
                        Name = "Katar",
                        Players = new List<Player>()
                        {
                                new Player{Name= "Saad Al-Shee",Position= "Bramkarz"},
                                new Player{Name= "Meshaal Barsha",Position= "Bramkarz"},
                                new Player{Name= "Yousef Hassan",Position= "Bramkarz"},

                                new Player{Name= "Pedro Migue",Position= "Obronca"},
                                new Player{Name= "Musaab Khidi",Position= "Obronca"},
                                new Player{Name= "Tarek Salma",Position= "Obronca"},
                                new Player{Name= "Bassam Al-Raw",Position= "Obronca"},
                                new Player{Name= "Boualem Khoukh",Position= "Obronca"},
                                new Player{Name= "Abdelkarim Hassa",Position= "Obronca"},
                                new Player{Name= "Homam Ahme",Position= "Obronca"},
                                new Player{Name= "Jassem Gaber",Position= "Obronca"},

                                new Player{Name= "Ali Asa",Position= "Pomocnik"},
                                new Player{Name= "Assim Madab",Position= "Pomocnik"},
                                new Player{Name= "Mohammed Waa",Position= "Pomocnik"},
                                new Player{Name= "Salem Al-Hajr",Position= "Pomocnik"},
                                new Player{Name= "Moustafa Tare",Position= "Pomocnik"},
                                new Player{Name= "Karim Boudia",Position= "Pomocnik"},
                                new Player{Name= "Abdelaziz Hati",Position= "Pomocnik"},
                                new Player{Name= "Ismail Mohamad",Position= "Pomocnik"},

                                new Player{Name= "Naif Al-Hadhram",Position= "Napastnik"},
                                new Player{Name= "Ahmed Alaaeldi",Position= "Napastnik"},
                                new Player{Name= "Hassan Al-Haydo",Position= "Napastnik"},
                                new Player{Name= "Khalid Munee",Position= "Napastnik"},
                                new Player{Name= "Akram Afif",Position= "Napastnik"},
                                new Player{Name= "Almoez Ali",Position= "Napastnik"},
                                new Player{Name= "Mohamed Munt",Position= "Napastnik"},
                        },
                        Group = "A",
                        Info="Gospodarze tegorocznego mundialu wystąpią na MŚ pierwszy raz. W ramach przygotowań reprezentacja kataru wystąpiła gościnie w Copa America federacji CONMEBOL, w 2019, Złotym Pucharze CONCACAF w 2021, jak również zaliczyli udany występ w Pucharze Azji AFC w 2019 roku, gdzie udało im się wygrać główne trofeum.",
                        BestResult="Debiutant",
                        BestResultDates = "2022"
                    },
                    new Team
                    {
                        Name = "Anglia",
                        Players = new List<Player>()
                        {
                                new Player{Name= "Jordan Pickford",Position= "Bramkarz"},
                                new Player{Name= "Aaron Ramsdale",Position= "Bramkarz"},
                                new Player{Name= "Nick Pope",Position= "Bramkarz"},
                                new Player{Name= "Kieran Trippier",Position= "Obronca"},
                                new Player{Name= "Trent Alexander-Arnold",Position= "Obronca"},
                                new Player{Name= "Kyle Walker",Position= "Obronca"},
                                new Player{Name= "Ben White",Position= "Obronca"},
                                new Player{Name= "Harry Maguire",Position= "Obronca"},
                                new Player{Name= "John Stones",Position= "Obronca"},
                                new Player{Name= "Eric Dier",Position= "Obronca"},
                                new Player{Name= "Conor Coady",Position= "Obronca"},
                                new Player{Name= "Luke Shaw",Position= "Obronca"},
                                new Player{Name= "Declan Rice",Position= "Pomocnik"},
                                new Player{Name= "Jude Bellingham",Position= "Pomocnik"},
                                new Player{Name= "Kalvin Phillips",Position= "Pomocnik"},
                                new Player{Name= "Jordan Henderson",Position= "Pomocnik"},
                                new Player{Name= "Conor Gallagher",Position= "Pomocnik"},
                                new Player{Name= "Mason Mount",Position= "Pomocnik"},
                                new Player{Name= "Harry Kane",Position= "Napastnik"},
                                new Player{Name= "Callum Wilson",Position= "Napastnik"},
                                new Player{Name= "Marcus Rashford",Position= "Napastnik"},
                                new Player{Name= "Raheem Sterling",Position= "Napastnik"},
                                new Player{Name= "Bukayo Saka",Position= "Napastnik"},
                                new Player{Name= "Phil Foden",Position= "Napastnik"},
                                new Player{Name= "Jack Grealish",Position= "Napastnik"},
                                new Player{Name= "James Maddison",Position= "Napastnik"},
                        },
                        Group = "B",
                        Info="Anglia ma jedną z najstarszych reprezentacyjnych historii w futbolu – pierwszy mecz Anglicy rozegrali przeciwko Szkocji w 1872 roku przeciwko Szkocji. Puchar MŚ unieśli nad głową tylko raz, w 1966 roku, kiedy to wygrali tytuł na swoim terenie. Do Kataru przyjeżdżają jako wicemistrz Europy i jako czwarta drużyna poprzedniego mundialu w 2018roku. ",
                        BestResult="Zwycięzca",
                        BestResultDates = "1966"



                    },
                    new Team
                    {
                        Name = "USA",
                        Players = new List<Player>()
                    {
                        new Player{Name= "Matt Turner",Position= "Bramkarz"},
                        new Player{Name= "Sean Johnson",Position= "Bramkarz"},
                        new Player{Name= "Ethan Horvath",Position= "Bramkarz"},
                        new Player{Name= "Cameron Carter-Vickers",Position= "Obronca"},
                        new Player{Name= "Sergino Dest",Position= "Obronca"},
                        new Player{Name= "Aaron Long",Position= "Obronca"},
                        new Player{Name= "Shaq Moore",Position= "Obronca"},
                        new Player{Name= "Tim Ream",Position= "Obronca"},
                        new Player{Name= "Antonee Robinson",Position= "Obronca"},
                        new Player{Name= "Joe Scally",Position= "Obronca"},
                        new Player{Name= "DeAndre Yedlin",Position= "Obronca"},
                        new Player{Name= "Walker Zimmerman",Position= "Obronca"},
                        new Player{Name= "Brenden Aaronson",Position= "Pomocnik"},
                        new Player{Name= "Kellyn Acosta",Position= "Pomocnik"},
                        new Player{Name= "Tyler Adams",Position= "Pomocnik"},
                        new Player{Name= "Luca de la Torre",Position= "Pomocnik"},
                        new Player{Name= "Weston McKennie",Position= "Pomocnik"},
                        new Player{Name= "Yunus Musah",Position= "Pomocnik"},
                        new Player{Name= "Cristian Roldan",Position= "Pomocnik"},
                        new Player{Name= "Jesus Ferreira",Position= "Napastnik"},
                        new Player{Name= "Jordan Morris",Position= "Napastnik"},
                        new Player{Name= "Christian Pulisic",Position= "Napastnik"},
                        new Player{Name= "Gio Reyna",Position= "Napastnik"},
                        new Player{Name= "Joshua Sargent",Position= "Napastnik"},
                        new Player{Name= "Timothy Weah",Position= "Napastnik"},
                        new Player{Name= "Haji Wright",Position= "Napastnik"},
                    },
                        Group = "B",
                        Info="Stany Zjednoczone wystąpiły w pierwszych dwóch turniejach MŚ i przyczyniły się do jednej z największych niespodzianek w historii rozgrywek, pokonując Anglię 1-0 w 1950 roku. W 1930 roku USA zajęło w turnieju 3 miejsce dzięki lepszemu bilansowi bramek niż Jugosławia – w tym czasie nie rozgrywano meczu o 3 miejsce.",
                        BestResult="3. miejsce",
                        BestResultDates = "1930"


                    },
                    new Team
                    {
                        Name = "Iran",
                        Players = new List<Player>()
                        {
                            new Player{Name= "Alireza Beiranvand",Position= "Bramkarz"},
                            new Player{Name= "Amir Abedzadeh",Position= "Bramkarz"},
                            new Player{Name= "Hossein Hosseini",Position= "Bramkarz"},
                            new Player{Name= "Payam Niazmand",Position= "Bramkarz"},
                            new Player{Name= "Ehsan Hajsafi",Position= "Obronca"},
                            new Player{Name= "Morteza Pouraliganji",Position= "Obronca"},
                            new Player{Name= "Ramin Rezaeian",Position= "Obronca"},
                            new Player{Name= "Milad Mohammadi",Position= "Obronca"},
                            new Player{Name= "Hossein Kanani",Position= "Obronca"},
                            new Player{Name= "Shojae Khalilzadeh",Position= "Obronca"},
                            new Player{Name= "Sadegh Moharrami",Position= "Obronca"},
                            new Player{Name= "Rouzbeh Cheshmi",Position= "Obronca"},
                            new Player{Name= "Majid Hosseini",Position= "Obronca"},
                            new Player{Name= "Abolfazl Jalali",Position= "Obronca"},
                            new Player{Name= "Ahmad Noorollahi",Position= "Pomocnik"},
                            new Player{Name= "Saman Ghoddos",Position= "Pomocnik"},
                            new Player{Name= "Vahid Amiri",Position= "Pomocnik"},
                            new Player{Name= "Saeid Ezatolahi",Position= "Pomocnik"},
                            new Player{Name= "Alireza Jahanbakhsh",Position= "Pomocnik"},
                            new Player{Name= "Mehdi Torabi",Position= "Pomocnik"},
                            new Player{Name= "Ali Gholizadeh",Position= "Pomocnik"},
                            new Player{Name= "Ali Karimi",Position= "Pomocnik"},
                            new Player{Name= "Karim Ansarifard",Position= "Napastnik"},
                            new Player{Name= "Sardar Azmoun",Position= "Napastnik"},
                            new Player{Name= "Mehdi Taremi",Position= "Napastnik"},
                        },
                        Group = "B",
                        Info="Islamska Republika Iranu po raz pierwszy zakwalifikowała się na mundial w 1978 roku., od tego czasu wystąpiła w turnieju jeszcze pięciokrotnie. Iran ma na swoim koncie dwa zwycięstwa w fazie grupowej mistrzostw, w tym głośne 2-1 nad Stanami Zjednoczonymi w 1998 w Lyonie. Do MŚ w Katarze IR Iranu zakwalifikowała się po zwycięstwie w grupie A w trzeciej rundzie kwalifikacji AFC.",
                        BestResult="Faza grupowa",
                        BestResultDates = "1978,1998,2006,2014,2018"


                    },
                    new Team
                    {
                        Name = "Walia",
                        Players = new List<Player>()
                        {
                            new Player{Name= "Wayne Hennessey",Position= "Bramkarz"},
                            new Player{Name= "Danny Ward",Position= "Bramkarz"},
                            new Player{Name= "Adam Davies",Position= "Bramkarz"},
                            new Player{Name= "Ben Davies",Position= "Obronca"},
                            new Player{Name= "Ben Cabango",Position= "Obronca"},
                            new Player{Name= "Tom Lockyer",Position= "Obronca"},
                            new Player{Name= "Joe Rodon",Position= "Obronca"},
                            new Player{Name= "Chris Mepham",Position= "Obronca"},
                            new Player{Name= "Ethan Ampadu",Position= "Obronca"},
                            new Player{Name= "Chris Gunter",Position= "Obronca"},
                            new Player{Name= "Neco Williams",Position= "Obronca"},
                            new Player{Name= "Connor Roberts",Position= "Obronca"},
                            new Player{Name= "Sorba Thomas",Position= "Pomocnik"},
                            new Player{Name= "Joe Allen",Position= "Pomocnik"},
                            new Player{Name= "Matthew Smith",Position= "Pomocnik"},
                            new Player{Name= "Dylan Levitt",Position= "Pomocnik"},
                            new Player{Name= "Harry Wilson",Position= "Pomocnik"},
                            new Player{Name= "Joe Morrell",Position= "Pomocnik"},
                            new Player{Name= "Jonny Williams",Position= "Pomocnik"},
                            new Player{Name= "Aaron Ramsey",Position= "Pomocnik"},
                            new Player{Name= "Rubin Colwill",Position= "Pomocnik"},
                            new Player{Name= "Gareth Bale",Position= "Napastnik"},
                            new Player{Name= "Kieffer Moore",Position= "Napastnik"},
                            new Player{Name= "Mark Harris",Position= "Napastnik"},
                            new Player{Name= "Brennan Johnson",Position= "Napastnik"},
                            new Player{Name= "Daniel James",Position= "Napastnik"},
                        },
                        Group = "B",
                        Info="Walia na mundialu zadebiutowała w Szwecji w 1958 roku, gdzie udało jej się dotrzeć do ćwierćfinału. Przegrali z późniejszym zwycięzcą turnieju – Brazylią, a zwycięskiego gola strzelił im sam Pele. Smoki czekały na kolejny występ na MŚ aż 64 lata. Z pewnością zechcą powtórzyć swoje występy z fazy pucharowej mistrzostw Europy 2016 i 2020. ",
                        BestResult="Ćwierćfinał",
                        BestResultDates = "1958"

                    },
                    new Team
                    {
                        Name = "Argentyna",
                        Players = new List<Player>()
                        {
                            new Player{Name= "Emiliano Martinez",Position= "Bramkarz"},
                            new Player{Name= "Geronimo Rulli",Position= "Bramkarz"},
                            new Player{Name= "Franco Armani",Position= "Bramkarz"},
                            new Player{Name= "Nahuel Molina",Position= "Obronca"},
                            new Player{Name= "Gonzalo Montiel",Position= "Obronca"},
                            new Player{Name= "Cristian Romero",Position= "Obronca"},
                            new Player{Name= "German Pezzella",Position= "Obronca"},
                            new Player{Name= "Nicolas Otamendi",Position= "Obronca"},
                            new Player{Name= "Lisandro Martinez",Position= "Obronca"},
                            new Player{Name= "Marcos Acuna",Position= "Obronca"},
                            new Player{Name= "Nicolas Tagliafico",Position= "Obronca"},
                            new Player{Name= "Juan Foyth",Position= "Obronca"},
                            new Player{Name= "Rodrigo De Paul",Position= "Pomocnik"},
                            new Player{Name= "Leandro Paredes",Position= "Pomocnik"},
                            new Player{Name= "Alexis Mac Allister",Position= "Pomocnik"},
                            new Player{Name= "Guido Rodriguez",Position= "Pomocnik"},
                            new Player{Name= "Papu Gomez",Position= "Pomocnik"},
                            new Player{Name= "Enzo Fernandez",Position= "Pomocnik"},
                            new Player{Name= "Exequiel Palacios",Position= "Pomocnik"},
                            new Player{Name= "Lionel Messi",Position= "Napastnik"},
                            new Player{Name= "Angel Di Maria",Position= "Napastnik"},
                            new Player{Name= "Lautaro Martinez",Position= "Napastnik"},
                            new Player{Name= "Julian Alvarez",Position= "Napastnik"},
                            new Player{Name= "Paulo Dybala",Position= "Napastnik"},
                            new Player{Name= "Nicolas Gonzalez",Position= "Napastnik"},
                            new Player{Name= "Joaquin Correa",Position= "Napastnik"},
                        },
                        Group = "C",
                        Info="Mistrzowie z 1978 i 1986 roku, z pewnością chcą dodać do swojej kolekcji trzecie trofeum MŚ. ‘La Albiceleste; mają ostatnio dobrą passę. W Copa America 2021 Argentyńczycy pokonali w finale swoich odwiecznych rywali Brazylię, a w 2022 pokonali pod przywództwem Lionela Messiego mistrzów Europy, Włochów, w Finalissima. Do Kataru przyjeżdżają jako jedni z faworytów turnieju",
                        BestResult="Zwycięzca",
                        BestResultDates = "1978,1986"

                    },
                    new Team
                    {
                        Name = "Meksyk",
                        Players = new List<Player>()
                        {
                            new Player{Name= "Guillermo Ochoa",Position= "Bramkarz"},
                            new Player{Name= "Alfredo Talavera",Position= "Bramkarz"},
                            new Player{Name= "Rodolfo Cota",Position= "Bramkarz"},
                            new Player{Name= "Kevin Alvarez",Position= "Obronca"},
                            new Player{Name= "Nestor Araujo",Position= "Obronca"},
                            new Player{Name= "Gerardo Arteaga",Position= "Obronca"},
                            new Player{Name= "Jesus Gallardo",Position= "Obronca"},
                            new Player{Name= "Hector Moreno",Position= "Obronca"},
                            new Player{Name= "Cesar Montes",Position= "Obronca"},
                            new Player{Name= "Jorge Sanchez",Position= "Obronca"},
                            new Player{Name= "Johan Vasquez",Position= "Obronca"},
                            new Player{Name= "Edson Alvarez",Position= "Pomocnik"},
                            new Player{Name= "Roberto Alvarado",Position= "Pomocnik"},
                            new Player{Name= "Uriel Antuna",Position= "Pomocnik"},
                            new Player{Name= "Luis Chavez",Position= "Pomocnik"},
                            new Player{Name= "Andres Guardado",Position= "Pomocnik"},
                            new Player{Name= "Erick Gutierrez",Position= "Pomocnik"},
                            new Player{Name= "Hector Herrera",Position= "Pomocnik"},
                            new Player{Name= "Orbelin Pineda",Position= "Pomocnik"},
                            new Player{Name= "Carlos Rodriguez",Position= "Pomocnik"},
                            new Player{Name= "Luis Romo",Position= "Pomocnik"},
                            new Player{Name= "Rogelio Funes Mori",Position= "Napastnik"},
                            new Player{Name= "Raul Jimenez",Position= "Napastnik"},
                            new Player{Name= "Hirving Lozano ",Position= "Napastnik"},
                            new Player{Name= "Henry Martin",Position= "Napastnik"},
                            new Player{Name= "Alexis Vega",Position= "Napastnik"},
                        },
                        Group = "C",
                        Info="Meksyk wystapił w szesnastu rozgrywkach na mundialu, tylko trzy razy nie udało im się zakwalifikować. Reprezentacja Meksyku dwa razy dotarła do ćwierćfinałów, w tym w 1986 roku, gdy MŚ organizowane były w ich kraju. Meksyk to doświadczona ekipa, bo aż pięciu meksykańskich zawodników ma na swoim koncie ponad 90 występów w kwalifikacjach do rozgrywek międzynarodowych.",
                        BestResult="Ćwierćfinał",
                        BestResultDates = "1970,1986"

                    },
                    new Team
                    {
                        Name = "Arabia Saudyjska",
                        Players = new List<Player>()
                        {
                                new Player{Name= "Mohamed Al-Owais",Position= "Bramkarz"},
                                new Player{Name= "Nawaf Al-Aqidi",Position= "Bramkarz"},
                                new Player{Name= "Mohamed Al-Yami",Position= "Bramkarz"},
                                new Player{Name= "Yasser Al-Shahrani",Position= "Obronca"},
                                new Player{Name= "Ali Al-Bulaihi",Position= "Obronca"},
                                new Player{Name= "Abdulelah Al-Amri",Position= "Obronca"},
                                new Player{Name= "Abdullah Madu",Position= "Obronca"},
                                new Player{Name= "Hassan Tambakti",Position= "Obronca"},
                                new Player{Name= "Sultan Al-Ghanam",Position= "Obronca"},
                                new Player{Name= "Mohammed Al-Breik",Position= "Obronca"},
                                new Player{Name= "Saud Abdulhamid",Position= "Obronca"},
                                new Player{Name= "Salman Al-Faraj",Position= "Pomocnik"},
                                new Player{Name= "Riyadh Sharahili",Position= "Pomocnik"},
                                new Player{Name= "Ali Al-Hassan",Position= "Pomocnik"},
                                new Player{Name= "Mohamed Kanno",Position= "Pomocnik"},
                                new Player{Name= "Abdulelah Al-Malki",Position= "Pomocnik"},
                                new Player{Name= "Sami Al-Najei",Position= "Pomocnik"},
                                new Player{Name= "Abdullah Otayf",Position= "Pomocnik"},
                                new Player{Name= "Nasser Al-Dawsari",Position= "Pomocnik"},
                                new Player{Name= "Abdulrahman Al-Aboud",Position= "Pomocnik"},
                                new Player{Name= "Salem Al-Dawsari",Position= "Pomocnik"},
                                new Player{Name= "Hattan Bahebri",Position= "Pomocnik"},
                                new Player{Name= "Haitham Asiri",Position= "Napastnik"},
                                new Player{Name= "Saleh Al-Shehri",Position= "Napastnik"},
                                new Player{Name= "Firas Al-Buraikan",Position= "Napastnik"},
                        },
                        Group = "C",
                        Info="Arabia Saudyjska po raz pierwszy dostała się na mundial w 1994 roku, kiedy turniej był organizowany w USA. W ostatnim meczu grupowym przeciwko Belgii, Saeed Al. Owairan przejął piłkę krótko po pierwszym gwizdku i pokonał pół drużyny rywali, zdobywając bramkę i zapewniając swojej drużynie awans do kolejnej rundy.",
                        BestResult="1/8 finału",
                        BestResultDates = "1994"

                    },
                    new Team
                    {
                        Name = "Francja",
                        Players = new List<Player>()
                        {
                                new Player{Name= "Alphonse Areola",Position= "Bramkarz"},
                                new Player{Name= "Hugo Lloris",Position= "Bramkarz"},
                                new Player{Name= "Steve Mandanda",Position= "Bramkarz"},
                                new Player{Name= "Axel Disasi",Position= "Obronca"},
                                new Player{Name= "Lucas Hernandez",Position= "Obronca"},
                                new Player{Name= "Theo Hernandez",Position= "Obronca"},
                                new Player{Name= "Ibrahima Konate",Position= "Obronca"},
                                new Player{Name= "Jules Kounde",Position= "Obronca"},
                                new Player{Name= "Benjamin Pavard",Position= "Obronca"},
                                new Player{Name= "William Saliba",Position= "Obronca"},
                                new Player{Name= "Dayot Upamecano",Position= "Obronca"},
                                new Player{Name= "Raphael Varane",Position= "Obronca"},
                                new Player{Name= "Eduardo Camavinga",Position= "Pomocnik"},
                                new Player{Name= "Youssouf Fofana",Position= "Pomocnik"},
                                new Player{Name= "Matteo Guendouzi",Position= "Pomocnik"},
                                new Player{Name= "Adrien Rabiot",Position= "Pomocnik"},
                                new Player{Name= "Aurelien Tchouameni",Position= "Pomocnik"},
                                new Player{Name= "Jordan Veretout",Position= "Pomocnik"},
                                new Player{Name= "Karim Benzema",Position= "Napastnik"},
                                new Player{Name= "Kingsley Coman",Position= "Napastnik"},
                                new Player{Name= "Ousmane Dembele",Position= "Napastnik"},
                                new Player{Name= "Olivier Giroud",Position= "Napastnik"},
                                new Player{Name= "Antoine Griezmann",Position= "Napastnik"},
                                new Player{Name= "Kylian Mbappe",Position= "Napastnik"},
                                new Player{Name= "Christopher Nkunku",Position= "Napastnik"},
                                new Player{Name= "Marcus Thuram",Position= "Napastnik"},
                        },
                        Group = "D",
                        Info="W tym roku Francja wystąpi na mundialu po raz szesnasty. Les Bleus zdobyli pierwszy puchar MŚ w 1998 roku, kiedy pokonali Brazylię 3-0, a drugi w 2018, iedy wygrali 4-2 z Chrowacją. Francuski napastnik Just Fontaine wciąż może pochwaliś się największą zdobyczą bramkową w jednym turniej, było to w 1958 roku, zaliczył 13 trafień.",
                        BestResult="Zwycięsca",
                        BestResultDates = "1998, 2018"

                    },
                    new Team
                    {
                        Name = "Dania",
                        Players = new List<Player>()
                        {
                                new Player{Name= "Kasper Schmeichel",Position= "Bramkarz"},
                                new Player{Name= "Oliver Christensen",Position= "Bramkarz"},
                                new Player{Name= "Frederik Ronnow",Position= "Bramkarz"},
                                new Player{Name= "Alexander Bah",Position= "Obronca"},
                                new Player{Name= "Simon Kjaer",Position= "Obronca"},
                                new Player{Name= "Joachim Andersen",Position= "Obronca"},
                                new Player{Name= "Joakim Maehle",Position= "Obronca"},
                                new Player{Name= "Andreas Christensen",Position= "Obronca"},
                                new Player{Name= "Rasmus Kristensen",Position= "Obronca"},
                                new Player{Name= "Jens Stryger Larsen",Position= "Obronca"},
                                new Player{Name= "Victor Nelsson",Position= "Obronca"},
                                new Player{Name= "Daniel Wass",Position= "Obronca"},
                                new Player{Name= "Thomas Delaney",Position= "Pomocnik"},
                                new Player{Name= "Mathias Jensen",Position= "Pomocnik"},
                                new Player{Name= "Christian Eriksen",Position= "Pomocnik"},
                                new Player{Name= "Pierre-Emile Hojbjerg",Position= "Pomocnik"},
                                new Player{Name= "Christian Norgaard",Position= "Pomocnik"},
                                new Player{Name= "Robert Skov",Position= "Pomocnik"},
                                new Player{Name= "Andreas Cornelius",Position= "Napastnik"},
                                new Player{Name= "Martin Braithwaite",Position= "Napastnik"},
                                new Player{Name= "Kasper Dolberg",Position= "Napastnik"},
                                new Player{Name= "Mikkel Damsgaard",Position= "Napastnik"},
                                new Player{Name= "Jesper Lindstrom",Position= "Napastnik"},
                                new Player{Name= "Yussuf Poulsen",Position= "Napastnik"},
                                new Player{Name= "Andreas Skov Olsen",Position= "Napastnik"},
                                new Player{Name= "Jonas Wind",Position= "Napastnik"},
                        },
                        Group = "D",
                        Info="Dania zadebiutowała na mundialu w 1986 roku, w Meksyku, gdzie osiągnęła swoje największe do tej pory zwycięstwo w meczu z Urugwajem, który skończył się wynikiem 6-1. Najlepszym duńskim strzelcem turniejów MŚ jest Jon Dahl Tomasson, który w turniejach z lat 2002 i 2010 strzelił łącznie 5 goli.",
                        BestResult="Ćwierćfinał",
                        BestResultDates = "1998"

                    },
                    new Team
                    {
                        Name = "Tunezja",
                        Players = new List<Player>()
                    {
                        new Player{Name= "Aymen Dahmen",Position= "Bramkarz"},
                        new Player{Name= "Bechir Ben Said",Position= "Bramkarz"},
                        new Player{Name= "Mouez Hassen",Position= "Bramkarz"},
                        new Player{Name= "Aymen Mathlouthi",Position= "Bramkarz"},
                        new Player{Name= "Ali Abdi",Position= "Obronca"},
                        new Player{Name= "Dylan Bronn",Position= "Obronca"},
                        new Player{Name= "Mohamed Drager",Position= "Obronca"},
                        new Player{Name= "Nader Ghandri",Position= "Obronca"},
                        new Player{Name= "Bilel Ifa",Position= "Obronca"},
                        new Player{Name= "Wajdi Kechrida",Position= "Obronca"},
                        new Player{Name= "Ali Maaloul",Position= "Obronca"},
                        new Player{Name= "Yassine Meriah",Position= "Obronca"},
                        new Player{Name= "Montassar Talbi",Position= "Obronca"},
                        new Player{Name= "Mohamed Ali Ben Romdhane",Position= "Pomocnik"},
                        new Player{Name= "Ghaylane Chaalali",Position= "Pomocnik"},
                        new Player{Name= "Aissa Laidouni",Position= "Pomocnik"},
                        new Player{Name= "Hannibal Mejbri",Position= "Pomocnik"},
                        new Player{Name= "Ferjani Sassi",Position= "Pomocnik"},
                        new Player{Name= "Elyas Skhiri",Position= "Pomocnik"},
                        new Player{Name= "Anis Ben Slimane",Position= "Napastnik"},
                        new Player{Name= "Seifeddine Jaziri",Position= "Napastnik"},
                        new Player{Name= "Issam Jebali",Position= "Napastnik"},
                        new Player{Name= "Wahbi Khazri",Position= "Napastnik"},
                        new Player{Name= "Taha Yassine Khenissi",Position= "Napastnik"},
                        new Player{Name= "Youssef Msakni",Position= "Napastnik"},
                        new Player{Name= "Naim Sliti",Position= "Napastnik"},
                    },
                        Group = "D",
                        Info="Tunezja zakwalifikowała się na mundial po raz pierwszy w 1978 roku i przeszła do historii jako pierwsza afrykańska reprezentacja, która wygrała w tunieju mecz kończąc spotkanie z Meksykiem wynikiem 3-1. Orły z Kartaginy wystąpią w tym roku na MŚ w Katarze po raz szósty.",
                        BestResult="Faza grupowa",
                        BestResultDates = "1978,1998,2002,2006,2018"
                    },
                    new Team
                    {
                        Name = "Australia",
                        Players = new List<Player>()
                        {
                                new Player{Name= "Mat Ryan",Position= "Bramkarz"},
                                new Player{Name= "Andrew Redmayne",Position= "Bramkarz"},
                                new Player{Name= "Danny Vukovic",Position= "Bramkarz"},
                                new Player{Name= "Milos Degenek",Position= "Obronca"},
                                new Player{Name= "Aziz Behich",Position= "Obronca"},
                                new Player{Name= "Joel King",Position= "Obronca"},
                                new Player{Name= "Nathaniel Atkinson",Position= "Obronca"},
                                new Player{Name= "Fran Karacic",Position= "Obronca"},
                                new Player{Name= "Harry Souttar",Position= "Obronca"},
                                new Player{Name= "Kye Rowles",Position= "Obronca"},
                                new Player{Name= "Bailey Wright",Position= "Obronca"},
                                new Player{Name= "Thomas Deng",Position= "Obronca"},
                                new Player{Name= "Aaron Mooy",Position= "Pomocnik"},
                                new Player{Name= "Jackson Irvine",Position= "Pomocnik"},
                                new Player{Name= "Ajdin Hrustic",Position= "Pomocnik"},
                                new Player{Name= "Keanu Baccus",Position= "Pomocnik"},
                                new Player{Name= "Cameron Devlin",Position= "Pomocnik"},
                                new Player{Name= "Riley McGree",Position= "Pomocnik"},
                                new Player{Name= "Awer Mabil",Position= "Napastnik"},
                                new Player{Name= "Mathew Leckie",Position= "Napastnik"},
                                new Player{Name= "Martin Boyle",Position= "Napastnik"},
                                new Player{Name= "Jamie Maclaren",Position= "Napastnik"},
                                new Player{Name= "Jason Cummings",Position= "Napastnik"},
                                new Player{Name= "Mitchell Duke",Position= "Napastnik"},
                                new Player{Name= "Garang Kuol",Position= "Napastnik"},
                                new Player{Name= "Craig Goodwin",Position= "Napastnik"},
                        },
                        Group = "D",
                        Info="Australia zapewniła sobie występ w turnieju 2022 po emocjonujących, międzykontynentalnych barażach. Występ w Katarze będzie dla Socceroos szóstym turniejem MŚ i piątym turniejem z rzędu. Ich najlepszym rezultatem było dotarcie do 1/8 finału w 2006 roku.",
                        BestResult="1/8 finału",
                        BestResultDates = "2008"

                    },
                    new Team
                    {
                        Name = "Niemcy",
                        Players = new List<Player>()
                    {
                            new Player{Name= "Manuel Neuer",Position= "Bramkarz"},
                            new Player{Name= "Marc-Andre ter Stegen",Position= "Bramkarz"},
                            new Player{Name= "Kevin Trapp",Position= "Bramkarz"},
                            new Player{Name= "Matthias Ginter",Position= "Obronca"},
                            new Player{Name= "Antonio Rudiger",Position= "Obronca"},
                            new Player{Name= "Niklas Sule",Position= "Obronca"},
                            new Player{Name= "Nico Schlotterbeck",Position= "Obronca"},
                            new Player{Name= "Thilo Kehrer",Position= "Obronca"},
                            new Player{Name= "David Raum",Position= "Obronca"},
                            new Player{Name= "Lukas Klostermann",Position= "Obronca"},
                            new Player{Name= "Armel Bella-Kotchap",Position= "Obronca"},
                            new Player{Name= "Christian Gunter",Position= "Obronca"},
                            new Player{Name= "Ilkay Gundogan",Position= "Pomocnik"},
                            new Player{Name= "Jonas Hofmann",Position= "Pomocnik"},
                            new Player{Name= "Leon Goretzka",Position= "Pomocnik"},
                            new Player{Name= "Serge Gnabry",Position= "Pomocnik"},
                            new Player{Name= "Leroy Sane",Position= "Pomocnik"},
                            new Player{Name= "Jamal Musiala",Position= "Pomocnik"},
                            new Player{Name= "Joshua Kimmich",Position= "Pomocnik"},
                            new Player{Name= "Thomas Muller",Position= "Pomocnik"},
                            new Player{Name= "Julian Brandt",Position= "Pomocnik"},
                            new Player{Name= "Mario Gotze",Position= "Pomocnik"},
                            new Player{Name= "Kai Havertz",Position= "Napastnik"},
                            new Player{Name= "Youssoufa Moukoko",Position= "Napastnik"},
                            new Player{Name= "Niclas Fullkrug",Position= "Napastnik"},
                            new Player{Name= "Karim Adeyemi",Position= "Napastnik"},
                    },
                        Group = "E",
                        Info="Rekordowe osiem występów w finałach MŚ i cztery tytuły mistrzowskie czynią z reprezentacji Niemiec jedną z najbardziej doświadczonych ekip na tym turnieju. Po drodze do ostatniego osiągniętego tytułu w 2014 roku w Brazylii, w szokujący sposób pokonali gospodarzy tamtego turnieju aż 7-1 w półfinale. ",
                        BestResult= "Zwycięstwo",
                        BestResultDates = "1954,1974,1990,2014"
                    },
                    new Team
                    {
                        Name = "Hiszpania",
                        Players = new List<Player>()
                        {
                                new Player{Name= "Unai Simon",Position= "Bramkarz"},
                                new Player{Name= "Robert Sanchez",Position= "Bramkarz"},
                                new Player{Name= "David Raya",Position= "Bramkarz"},
                                new Player{Name= "Dani Carvajal",Position= "Obronca"},
                                new Player{Name= "Cesar Azpilicueta",Position= "Obronca"},
                                new Player{Name= "Eric Garcia",Position= "Obronca"},
                                new Player{Name= "Hugo Guillamon",Position= "Obronca"},
                                new Player{Name= "Pau Torres",Position= "Obronca"},
                                new Player{Name= "Aymeric Laporte",Position= "Obronca"},
                                new Player{Name= "Jordi Alba",Position= "Obronca"},
                                new Player{Name= "Jose Gaya",Position= "Obronca"},
                                new Player{Name= "Sergio Busquets",Position= "Pomocnik"},
                                new Player{Name= "Rodri",Position= "Pomocnik"},
                                new Player{Name= "Gavi",Position= "Pomocnik"},
                                new Player{Name= "Carlos Soler",Position= "Pomocnik"},
                                new Player{Name= "Marcos Llorente",Position= "Pomocnik"},
                                new Player{Name= "Pedri",Position= "Pomocnik"},
                                new Player{Name= "Koke",Position= "Pomocnik"},
                                new Player{Name= "Ferran Torres",Position= "Napastnik"},
                                new Player{Name= "Nico Williams",Position= "Napastnik"},
                                new Player{Name= "Yeremi Pino",Position= "Napastnik"},
                                new Player{Name= "Alvaro Morata",Position= "Napastnik"},
                                new Player{Name= "Marco Asensio",Position= "Napastnik"},
                                new Player{Name= "Pablo Sarabia",Position= "Napastnik"},
                                new Player{Name= "Dani Olmo",Position= "Napastnik"},
                                new Player{Name= "Ansu Fati",Position= "Napastnik"},
                        },
                        Group = "E",
                        Info="Tegoroczna edycja MŚ będzie dla Hiszpanów szesnastym występem na mundialowym turnieju. W 2010 La Roja została pierwszą europejską drużyną, która wygrała turniej poza swym rodzimym kontynentem. Niewiarygodna bramka zdobyta w dogrywce meczu przeciwko Holandii przez Andresa Iniestę zakończyła finały MŚ w RPA zwycięstwem 1-0, zapewniając Hiszpanom tytuł mistrza świata.",
                        BestResult= "Zwycięzca",
                        BestResultDates = "2010"
                    },
                    new Team
                    {
                        Name = "Kostaryka",
                        Players = new List<Player>()
                        {
                            new Player{Name= "Keylor Navas",Position= "Bramkarz"},
                            new Player{Name= "Esteban Alvarado",Position= "Bramkarz"},
                            new Player{Name= "Patrick Sequeira",Position= "Bramkarz"},
                            new Player{Name= "Francisco Calvo",Position= "Obrońca"},
                            new Player{Name= "Juan Pablo Vargas",Position= "Obrońca"},
                            new Player{Name= "Kendall Waston",Position= "Obrońca"},
                            new Player{Name= "Oscar Duarte",Position= "Obrońca"},
                            new Player{Name= "Daniel Chacon",Position= "Obrońca"},
                            new Player{Name= "Keysher Fuller",Position= "Obrońca"},
                            new Player{Name= "Carlos Martínez",Position= "Obrońca"},
                            new Player{Name= "Bryan Oviedo",Position= "Obrońca"},
                            new Player{Name= "Ronald Matarrita",Position= "Obrońca"},
                            new Player{Name= "Yeltsin Tejeda",Position= "Pomocnik"},
                            new Player{Name= "Celso Borges",Position= "Pomocnik"},
                            new Player{Name= "Youstin Salas",Position= "Pomocnik"},
                            new Player{Name= "Roan Wilson",Position= "Pomocnik"},
                            new Player{Name= "Gerson Torres",Position= "Pomocnik"},
                            new Player{Name= "Douglas Lopez",Position= "Pomocnik"},
                            new Player{Name= "Jewison Bennette",Position= "Pomocnik"},
                            new Player{Name= "Alvaro Zamora",Position= "Pomocnik"},
                            new Player{Name= "Anthony Hernández",Position= "Pomocnik"},
                            new Player{Name= "Brandon Aguilera",Position= "Pomocnik"},
                            new Player{Name= "Bryan Ruiz",Position= "Pomocnik"},
                            new Player{Name= "Joel Campbell",Position= "Napastnik"},
                            new Player{Name= "Anthony Contreras",Position= "Napastnik"},
                            new Player{Name= "Johan Venegas",Position= "Napastnik"},
                        },
                        Group = "E",
                        Info="Kostaryka zadebiutowała na mundialu w 1990 roku, a w Katarze wystąpi na MŚ po raz szósty. Największy sukces reprezentacja Kostaryki odniosła w 2014 roku, kiedy to wygrała grupę śmierci, w której była też Anglia, Włochy i Urugwaj, a następnie dotarła do ćwierćfinału, gdzie ustąpiła Holandii dopiero w konkursie rzutów karnych.",
                        BestResult=" Ćwierćfinał",
                        BestResultDates = "2014"

                    },
                    new Team
                    {
                        Name = "Japonia",
                        Players = new List<Player>()
                        {
                            new Player{Name= "Shuichi Gonda",Position= "Bramkarz"},
                            new Player{Name= "Daniel Schmidt",Position= "Bramkarz"},
                            new Player{Name= "Eiji Kawashima",Position= "Bramkarz"},
                            new Player{Name= "Miki Yamane",Position= "Obrońca"},
                            new Player{Name= "Hiroki Sakai",Position= "Obrońca"},
                            new Player{Name= "Maya Yoshida",Position= "Obrońca"},
                            new Player{Name= "Takehiro Tomiyasu",Position= "Obrońca"},
                            new Player{Name= "Shogo Taniguchi",Position= "Obrońca"},
                            new Player{Name= "Ko Itakura",Position= "Obrońca"},
                            new Player{Name= "Hiroki Ito",Position= "Obrońca"},
                            new Player{Name= "Yuto Nagatomo",Position= "Obrońca"},
                            new Player{Name= "Yuta Nakayama",Position= "Obrońca"},
                            new Player{Name= "Wataru Endo",Position= "Pomocnik"},
                            new Player{Name= "Hidemasa Morita",Position= "Pomocnik"},
                            new Player{Name= "Ao Tanaka",Position= "Pomocnik"},
                            new Player{Name= "Gaku Shibasaki",Position= "Pomocnik"},
                            new Player{Name= "Kaoru Mitoma",Position= "Pomocnik"},
                            new Player{Name= "Daichi Kamada",Position= "Pomocnik"},
                            new Player{Name= "Ritsu Doan",Position= "Pomocnik"},
                            new Player{Name= "Junya Ito",Position= "Pomocnik"},
                            new Player{Name= "Takumi Minamino",Position= "Pomocnik"},
                            new Player{Name= "Takefusa Kubo",Position= "Pomocnik"},
                            new Player{Name= "Yuki Soma",Position= "Pomocnik"},
                            new Player{Name= "Daizen Maeda",Position= "Napastnik"},
                            new Player{Name= "Takuma Asano",Position= "Napastnik"},
                            new Player{Name= "Ayase Ueda",Position= "Napastnik"},
                        },
                        Group = "E",
                        Info="Po debiucie na MŚ we Francji w 1998 roku, Japonia jest stałym bywalcem na tym turnieju. W 2002 roku Japonia była wraz Koreą Płd gospodarzem MŚ i po raz pierwszy w historii wygrała w swojej grupie, docierając tym samym do fazy pucharowej. Mistrzostwa w Katarze będą siódmym występem na mundialu reprezentacji Niebieskich Samurajów. ",
                                                BestResult="1/8 finału",
                                                BestResultDates = "2002,2010, 2018"

                    },
                    new Team
                    {
                        Name = "Chorwacja",
                        Players = new List<Player>()
{
        new Player{Name= "Dominik Livakovic",Position= "Bramkarz"},
        new Player{Name= "Ivica Ivusic",Position= "Bramkarz"},
        new Player{Name= "Ivo Grbic",Position= "Bramkarz"},
        new Player{Name= " Domagoj Vida",Position= "Obronca"},
        new Player{Name= "Dejan Lovren",Position= "Obronca"},
        new Player{Name= "Borna Barisic",Position= "Obronca"},
        new Player{Name= "Josip Juranovic",Position= "Obronca"},
        new Player{Name= "Josko Gvardiol",Position= "Obronca"},
        new Player{Name= "Borna Sosa",Position= "Obronca"},
        new Player{Name= "Josip Stanisic",Position= "Obronca"},
        new Player{Name= "Martin Erlic",Position= "Obronca"},
        new Player{Name= "Josip Sutalo",Position= "Obronca"},
        new Player{Name= "Luka Modric",Position= "Pomocnik"},
        new Player{Name= "Mateo Kovacic",Position= "Pomocnik"},
        new Player{Name= "Marcelo Brozovic",Position= "Pomocnik"},
        new Player{Name= "Mario Pasalic",Position= "Pomocnik"},
        new Player{Name= "Nikola Vlasic",Position= "Pomocnik"},
        new Player{Name= "Lovro Majer",Position= "Pomocnik"},
        new Player{Name= "Kristijan Jakic",Position= "Pomocnik"},
        new Player{Name= "Luka Sucic",Position= "Pomocnik"},
        new Player{Name= "Ivan Perisic",Position= "Napastnik"},
        new Player{Name= "Andrej Kramaric",Position= "Napastnik"},
        new Player{Name= "Bruno Petkovic",Position= "Napastnik"},
        new Player{Name= "Mislav Orsic",Position= "Napastnik"},
        new Player{Name= "Ante Budimir",Position= "Napastnik"},
        new Player{Name= "Marko Livaja",Position= "Napastnik"},
},
                        Group = "F",
                        Info="Od momentu swojego debiutu na mundialu w 1998 roku, kiedy to legendarny Davor Suker poprowadził Chorwatów do trzeciego miejsca w turnieju, Chorwacja dostawała się do każdego turnieju MŚ poza jednym. Z nowszych osiągnięć i największym sukcesem reprezentacji Chorwacji było zajęcie drugiego miejsca na ostatnich mistrzostwach, gdzie lider ich drużyny Luka Modrić został wybrany najlepszym zawodnikiem turnieju, a po mundialu zwyciężył też w plebiscycie Złotej Piłki.",
                                                BestResult="2. miejsce",
                                                BestResultDates = "2018"

                    },
                    new Team
                    {
                        Name = "Belgia",
                        Players = new List<Player>()
{
        new Player{Name= "Thibaut Courtois",Position= "Bramkarz"},
        new Player{Name= "Simon Mignolet",Position= "Bramkarz"},
        new Player{Name= "Koen Casteels",Position= "Bramkarz"},
        new Player{Name= " Jan Vertonghen",Position= "Obronca"},
        new Player{Name= "Toby Alderweireld",Position= "Obronca"},
        new Player{Name= "Leander Dendoncker",Position= "Obronca"},
        new Player{Name= "Zeno Debast",Position= "Obronca"},
        new Player{Name= "Arthur Theate",Position= "Obronca"},
        new Player{Name= "Wout Faes",Position= "Obronca"},
        new Player{Name= " Hans Vanaken",Position= "Pomocnik"},
        new Player{Name= "Axel Witsel",Position= "Pomocnik"},
        new Player{Name= "Youri Tielemans",Position= "Pomocnik"},
        new Player{Name= "Amadou Onana",Position= "Pomocnik"},
        new Player{Name= "Kevin De Bruyne",Position= "Pomocnik"},
        new Player{Name= "Yannick Carrasco",Position= "Pomocnik"},
        new Player{Name= "Thorgan Hazard",Position= "Pomocnik"},
        new Player{Name= "Timothy Castagne",Position= "Pomocnik"},
        new Player{Name= "Thomas Meunier",Position= "Pomocnik"},
        new Player{Name= "Romelu Lukaku",Position= "Napastnik"},
        new Player{Name= "Michy Batshuayi",Position= "Napastnik"},
        new Player{Name= "Lois Openda",Position= "Napastnik"},
        new Player{Name= "Charles De Ketelaere",Position= "Napastnik"},
        new Player{Name= "Eden Hazard",Position= "Napastnik"},
        new Player{Name= "Jeremy Doku",Position= "Napastnik"},
        new Player{Name= "Dries Mertens",Position= "Napastnik"},
        new Player{Name= "Leandro Trossard",Position= "Napastnik"},
},
                        Group = "F",
                        Info="Reprezentacja Belgii, zwana również Czerwonymi diabłami była jedną z trzynastu drużyn biorących udział w pierwszym turnieju MŚ, który odbył się w 1930 roku w Urugwaju. Po czwartym miejscu na MŚ w 1986 roku, największym sukcesem Belgów było trzecie miejsce w 2018, osiągnięte po zwycięstwie 2-0 nad Anglią.",
                                                BestResult= "3. miejsce",
                                                BestResultDates = "2018"

                    },
                    new Team
                    {
                        Name = "Kanada",
                        Players = new List<Player>()
{
        new Player{Name= "James Pantemis",Position= "Bramkarz"},
        new Player{Name= "Milan Borjan",Position= "Bramkarz"},
        new Player{Name= "Dayne St. Clair",Position= "Bramkarz"},
                new Player{Name= " Samuel Adekugbe",Position= "Obronca"},
        new Player{Name= "Joel Waterman",Position= "Obronca"},
        new Player{Name= "Alistair Johnston",Position= "Obronca"},
        new Player{Name= "Richie Laryea",Position= "Obronca"},
        new Player{Name= "Kamal Miller",Position= "Obronca"},
        new Player{Name= "Steven Vitoria",Position= "Obronca"},
        new Player{Name= "Derek Cornelius",Position= "Obronca"},
        new Player{Name= " Liam Fraser",Position= "Pomocnik"},
        new Player{Name= "Ismael Kone",Position= "Pomocnik"},
        new Player{Name= "Mark-Anthony Kaye",Position= "Pomocnik"},
        new Player{Name= "David Wotherspoon",Position= "Pomocnik"},
        new Player{Name= "Jonathan Osorio",Position= "Pomocnik"},
        new Player{Name= "Atiba Hutchinson",Position= "Pomocnik"},
        new Player{Name= "Stephen Eustaquio",Position= "Pomocnik"},
        new Player{Name= "Samuel Piette",Position= "Pomocnik"},
        new Player{Name= "Tajon Buchanan",Position= "Napastnik"},
        new Player{Name= "Liam Millar",Position= "Napastnik"},
        new Player{Name= "Lucas Cavallini",Position= "Napastnik"},
        new Player{Name= "Ike Ugbo",Position= "Napastnik"},
        new Player{Name= "Junior Hoilett",Position= "Napastnik"},
        new Player{Name= "Jonathan David",Position= "Napastnik"},
        new Player{Name= "Cyle Larin",Position= "Napastnik"},
        new Player{Name= "Alphonso Davies",Position= "Napastnik"},
},
                        Group = "F",
                        Info="Kanada dostałą się do turnieju MŚ wcześniej tylko raz, w 1986 roku. Po otrzymaniu od FIFA wyróżnienia ‘reprezentacja, która poczyniła największe postępy’ w 2021, wystąpią w tegorocznych mistrzostwach jako swego rodzaju czarny koń. Podczas kwalifikacji zaskoczyli wielu ekspertów, wygrywając trzecią rundę grupową CONCACAF z bilansem ośmiu zwycięstw w czternastu meczach, w tym przeciw Meksykowi i USA.",
                                                BestResult= "Faza grupowa",
                                                BestResultDates = "1986"

                    },
                    new Team
                    {
                        Name = "Maroko",
                        Players = new List<Player>()
{
        new Player{Name= "Bono",Position= "Bramkarz"},
        new Player{Name= "Munir El Kajoui",Position= "Bramkarz"},
        new Player{Name= "Ahmed Tagnaouti",Position= "Bramkarz"},
        new Player{Name= " Nayef Aguerd",Position= "Obronca"},
        new Player{Name= "Yahia Attiyat Allah",Position= "Obronca"},
        new Player{Name= "Badr Benoun",Position= "Obronca"},
        new Player{Name= "Achraf Dari",Position= "Obronca"},
        new Player{Name= "Jawad El Yamiq",Position= "Obronca"},
        new Player{Name= "Achraf Hakimi",Position= "Obronca"},
        new Player{Name= "Noussair Mazraoui",Position= "Obronca"},
        new Player{Name= "Romain Saiss",Position= "Obronca"},
        new Player{Name= " Sofyan Amrabat",Position= "Pomocnik"},
        new Player{Name= "Selim Amallah",Position= "Pomocnik"},
        new Player{Name= "Bilal El Khannous",Position= "Pomocnik"},
        new Player{Name= "Yahya Jabrane",Position= "Pomocnik"},
        new Player{Name= "Azzedine Ounahi",Position= "Pomocnik"},
        new Player{Name= "Abdelhamid Sabiri",Position= "Pomocnik"},
        new Player{Name= "Zakaria Aboukhlal",Position= "Napastnik"},
        new Player{Name= "Sofiane Boufal",Position= "Napastnik"},
        new Player{Name= "Ilias Chair",Position= "Napastnik"},
        new Player{Name= "Walid Cheddira",Position= "Napastnik"},
        new Player{Name= "Youssef En-Nesyri",Position= "Napastnik"},
        new Player{Name= "Abde Ezzalzouli",Position= "Napastnik"},
        new Player{Name= "Abderrazak Hamdallah",Position= "Napastnik"},
        new Player{Name= "Amine Harit",Position= "Napastnik"},
        new Player{Name= "Hakim Ziyech",Position= "Napastnik"},
},
                        Group = "F",
                        Info="Maroko dostało się do turnieju MŚ po raz szósty, pokonując w dwumeczu Demokratyczną Republikę Konga 5-2 w trzeciej rundzie kwalifikacji. W 1986 roku, po powrocie do turnieju po 16 latach, Maroko zostało pierwszym w historii afrykańskim krajem, który wygrał swoją grupę na mundialu, osiągając bezbramkowe remisy z Anglią i Polską, a następnie wygrywając z Portugalią 3-1.",
                                                BestResult="1/8 finału",
                                                BestResultDates = "1986"

                    },
                    new Team
                    {
                        Name = "Szwajcaria",
                        Players = new List<Player>()
{
        new Player{Name= "Gregor Kobel",Position= "Bramkarz"},
        new Player{Name= "Yann Sommer",Position= "Bramkarz"},
        new Player{Name= "Jonas Omlin",Position= "Bramkarz"},
        new Player{Name= "Philipp Kohn",Position= "Bramkarz"},
                new Player{Name= "Manuel Akanji",Position= "Obronca"},
        new Player{Name= "Eray Comert",Position= "Obronca"},
        new Player{Name= "Nico Elvedi",Position= "Obronca"},
        new Player{Name= "Fabian Schar",Position= "Obronca"},
        new Player{Name= "Silvan Widmer",Position= "Obronca"},
        new Player{Name= "Ricardo Rodriguez",Position= "Obronca"},
        new Player{Name= "Edimilson Fernandes",Position= "Obronca"},
        new Player{Name= "Michel Aebischer",Position= "Pomocnik"},
        new Player{Name= "Xherdan Shaqiri",Position= "Pomocnik"},
        new Player{Name= "Renato Steffen",Position= "Pomocnik"},
        new Player{Name= "Granit Xhaka",Position= "Pomocnik"},
        new Player{Name= "Denis Zakaria",Position= "Pomocnik"},
        new Player{Name= "Fabian Frei",Position= "Pomocnik"},
        new Player{Name= "Remo Freuler",Position= "Pomocnik"},
        new Player{Name= "Noah Okafor",Position= "Pomocnik"},
        new Player{Name= "Fabian Rieder",Position= "Pomocnik"},
        new Player{Name= "Ardon Jashari",Position= "Pomocnik"},
        new Player{Name= "Breel Embolo",Position= "Napastnik"},
        new Player{Name= "Ruben Vargas",Position= "Napastnik"},
        new Player{Name= "Djibril Sow",Position= "Napastnik"},
        new Player{Name= "Haris Seferovic",Position= "Napastnik"},
        new Player{Name= "Christian Fassnacht",Position= "Napastnik"},
},
                        Group = "G",
                        Info="Szwajcaria zmierza na mundial bez ani jednej porażki w kwalifikacjach i z pewnością zechce powtórzyć swój najlepszy sukces, czyli dotrzeć przynajmmniej do ćwierćfinałów. Szwajcarzy dzierżą rekord, jeśli chodzi o najdłuższy okres bez utraty bramki w czasie gry na mundialu. Po stracie bramki w 1994 roku następną stracili dopiero w 2010roku.",
                        BestResult="Ćwierćfinał",
                        BestResultDates = "1934,1938,1954"
                    },
                    new Team
                    {
                        Name = "Serbia",
                        Players = new List<Player>()
{
        new Player{Name= "Marko Dmitrovic",Position= "Bramkarz"},
        new Player{Name= "Predrag Rajkovic",Position= "Bramkarz"},
        new Player{Name= "Vanja Milinkovic-Savic",Position= "Bramkarz"},
                new Player{Name= "Stefan Mitrovic",Position= "Obronca"},
        new Player{Name= "Nikola Milenkovic",Position= "Obronca"},
        new Player{Name= "Strahinja Pavlovic",Position= "Obronca"},
        new Player{Name= "Milos Veljkovic",Position= "Obronca"},
        new Player{Name= "Filip Mladenovic",Position= "Obronca"},
        new Player{Name= "Strahinja Erakovic",Position= "Obronca"},
        new Player{Name= "Srdjan Babic",Position= "Obronca"},
        new Player{Name= "Nemanja Gudelj",Position= "Pomocnik"},
        new Player{Name= "Sergej Milinkovic-Savic",Position= "Pomocnik"},
        new Player{Name= "Sasa Lukic",Position= "Pomocnik"},
        new Player{Name= "Marko Grujic",Position= "Pomocnik"},
        new Player{Name= "Filip Kostic",Position= "Pomocnik"},
        new Player{Name= "Uros Racic",Position= "Pomocnik"},
        new Player{Name= "Nemanja Maksimovic",Position= "Pomocnik"},
        new Player{Name= "Ivan Ilic",Position= "Pomocnik"},
        new Player{Name= "Andrija Zivkovic",Position= "Pomocnik"},
        new Player{Name= "Darko Lazovic",Position= "Pomocnik"},
        new Player{Name= "Dusan Tadic",Position= "Napastnik"},
        new Player{Name= "Aleksandar Mitrovic",Position= "Napastnik"},
        new Player{Name= "Dusan Vlahovic",Position= "Napastnik"},
        new Player{Name= "Filip Djuricic",Position= "Napastnik"},
        new Player{Name= "Luka Jovic",Position= "Napastnik"},
        new Player{Name= "Nemanja Radonjic",Position= "Napastnik"},
},
                        Group = "G",
                        Info="Serbia może się poszczycić bogatą historią występów na mundialu, przy czym największe sukcesy odnosiła, gd turnieje odbywały się w Ameryce Południowej. Podczas  MŚ w Urugwaju w 1930 i w Chile w 1962 roku, Serbia zajęła czwarte miejsce. Do Katqaru zakwalifikowali się po spektakularnych zwycięstwie nad Portugalią w Lizbonie, zdobywając zwycięskiego gola w doliczonym czasie ostatniego meczu kwalifikacyjnego fazy grupowej UEFA.",
                        BestResult="4 miejsce",
                        BestResultDates = "1930,1962"


                    },
                    new Team
                    {
                        Name = "Brazylia",
                        Players = new List<Player>()
                        {
                            new Player{Name= "Alison",Position= "Bramkarz"},
                            new Player{Name= "Ederson",Position= "Bramkarz"},
                            new Player{Name= "Weverton",Position= "Bramkarz"},
                            new Player{Name= "Dani Alves",Position= "Obrońca"},
                            new Player{Name= "Danilo",Position= "Obrońca"},
                            new Player{Name= "Alex Sandro",Position= "Obrońca"},
                            new Player{Name= "Alex Telles",Position= "Obrońca"},
                            new Player{Name= "Bremer",Position= "Obrońca"},
                            new Player{Name= "Eder Militao",Position= "Obrońca"},
                            new Player{Name= "Marquinhos",Position= "Obrońca"},
                            new Player{Name= "Thiago Silva",Position= "Obrońca"},
                            new Player{Name= "Bruno Guimaraes",Position= "Pomocnik"},
                            new Player{Name= "Casemiro",Position= "Pomocnik"},
                            new Player{Name= "Everton Ribeiro",Position= "Pomocnik"},
                            new Player{Name= "Fabinho",Position= "Pomocnik"},
                            new Player{Name= "Fred",Position= "Pomocnik"},
                            new Player{Name= "Lucas Paqueta",Position= "Pomocnik"},
                            new Player{Name= "Antony",Position= "Napastnik"},
                            new Player{Name= "Gabriel Jesus",Position= "Napastnik"},
                            new Player{Name= "Gabriel Martinelli",Position= "Napastnik"},
                            new Player{Name= "Neymar",Position= "Napastnik"},
                            new Player{Name= "Pedro",Position= "Napastnik"},
                            new Player{Name= "Raphinha",Position= "Napastnik"},
                            new Player{Name= "Richarlison",Position= "Napastnik"},
                            new Player{Name= "Rodrygo",Position= "Napastnik"},
                            new Player{Name= "Vinicius Jr",Position= "Napastnik"},
                        },
                        Group = "G",
                        Info="Tegoroczny mundial będzie dwudziestym drugim występem Brazylii na MŚ z rzędu. Brazylijczycy mają najwięcej tytułów mistrza świata, a w tym roku pragną zdobyć swój kolejny – szósty złoty medal mistrzostw. Reprezentacja Brazylii jako jedyna uniosła w górę tytuł mistrzów świata na czterech różnych kontynentach.",
                        BestResult= "Zwycięzca",
                        BestResultDates = "1954,1962,1970,1994,2002"

                    },
                    new Team
                    {
                        Name = "Kamerun",
                        Players = new List<Player>()
{
        new Player{Name= "Andre Onana",Position= "Bramkarz"},
        new Player{Name= "Devis Epassy",Position= "Bramkarz"},
        new Player{Name= "Simon Ngapandouetnbu",Position= "Bramkarz"},
                new Player{Name= "Jean-Charles Castelletto",Position= "Obronca"},
        new Player{Name= "Enzo Ebosse",Position= "Obronca"},
        new Player{Name= "Collins Fai",Position= "Obronca"},
        new Player{Name= "Olivier Mbaizo",Position= "Obronca"},
        new Player{Name= "Nouhou Tolo",Position= "Obronca"},
        new Player{Name= "Nicolas Nkoulou",Position= "Obronca"},
        new Player{Name= "Christopher Wooh",Position= "Obronca"},
        new Player{Name= "Olivier Ntcham",Position= "Pomocnik"},
        new Player{Name= "Gael Ondoua",Position= "Pomocnik"},
        new Player{Name= "Martin Hongla",Position= "Pomocnik"},
        new Player{Name= "Pierre Kunde",Position= "Pomocnik"},
        new Player{Name= "Samuel Oum Gouet",Position= "Pomocnik"},
        new Player{Name= "Andre-Frank Zambo Anguissa",Position= "Pomocnik"},
        new Player{Name= "Jerome Ngom",Position= "Pomocnik"},
        new Player{Name= "Nicolas Ngamaleu",Position= "Napastnik"},
        new Player{Name= "Christian Bassogog",Position= "Napastnik"},
        new Player{Name= "Bryan Mbeumo",Position= "Napastnik"},
        new Player{Name= "Georges-Kevin Nkoudou",Position= "Napastnik"},
        new Player{Name= "Jean-Pierre Nsame",Position= "Napastnik"},
        new Player{Name= "Vincent Aboubakar",Position= "Napastnik"},
        new Player{Name= "Karl Toko-Ekambi",Position= "Napastnik"},
        new Player{Name= "Eric Maxim Choupo-Moting",Position= "Napastnik"},
        new Player{Name= "Souaibou Marou",Position= "Napastnik"},
},
                        Group = "G",
                        Info="Kamerun wystąpił na mundialu więcej razy niż jakikolwiek inny afrykański kraj, bo aż ośmiokrotnie. W 990 roku ‘Nieposkromione Lwy’ pokonały broniących tytułu Argentyńczyków w meczu otwarcia turnieju, a później zostały pierwszą afrykańską drużyną, która dotarła do ćwierćfinałów.",
                        BestResult="Ćwierćfinał",
                        BestResultDates = "1990"
                    },
                    new Team
                    {
                        Name = "Portugalia",
                        Players = new List<Player>()
{
        new Player{Name= "Diogo Costa",Position= "Bramkarz"},
        new Player{Name= "Jose Sa",Position= "Bramkarz"},
        new Player{Name= "Rui Patricio",Position= "Bramkarz"},
                new Player{Name= "Diogo Dalot",Position= "Obronca"},
        new Player{Name= "Joao Cancelo",Position= "Obronca"},
        new Player{Name= "Danilo Pereira",Position= "Obronca"},
        new Player{Name= "Pepe",Position= "Obronca"},
        new Player{Name= "Ruben Dias",Position= "Obronca"},
        new Player{Name= "Antonio Silva",Position= "Obronca"},
        new Player{Name= "Nuno Mendes",Position= "Obronca"},
        new Player{Name= "Raphael Guerreiro",Position= "Obronca"},
        new Player{Name= "Joao Palhinha",Position= "Pomocnik"},
        new Player{Name= "Ruben Neves",Position= "Pomocnik"},
        new Player{Name= "Bernardo Silva",Position= "Pomocnik"},
        new Player{Name= "Bruno Fernandes",Position= "Pomocnik"},
        new Player{Name= "Joao Mario",Position= "Pomocnik"},
        new Player{Name= "Matheus Nunes",Position= "Pomocnik"},
        new Player{Name= "Vitinha",Position= "Pomocnik"},
        new Player{Name= "William Carvalho",Position= "Pomocnik"},
        new Player{Name= "Otavio",Position= "Pomocnik"},
        new Player{Name= "Cristiano Ronaldo",Position= "Napastnik"},
        new Player{Name= "Joao Felix",Position= "Napastnik"},
        new Player{Name= "Rafael Leao",Position= "Napastnik"},
        new Player{Name= "Ricardo Horta",Position= "Napastnik"},
        new Player{Name= "Goncalo Ramos",Position= "Napastnik"},
        new Player{Name= "Andre Silva",Position= "Napastnik"},
},
                        Group = "H",
                        Info="W 2022 roku Portugalia wystąpi na mundialu po raz ósmy, w tym po raz szósty raz z rządu. Podczas swojego pierwszego występu w 1966 legendarny napastnik Eusebio poprowadził ich do najlepszego dotychczas sukcesu na MŚ, gdzie zaliczając 9 trafień pomógł osiągnąć swojej reprezentacji 3 miejsce.",
                        BestResult="3. miejsce",
                        BestResultDates = "1966"

                    },
                    new Team
                    {
                        Name = "Urugwaj",
                        Players = new List<Player>()
{
        new Player{Name= "Fernando Muslera",Position= "Bramkarz"},
        new Player{Name= "Sergio Rochet",Position= "Bramkarz"},
        new Player{Name= "Sebastian Sosa",Position= "Bramkarz"},
                new Player{Name= "Ronald Araujo",Position= "Obronca"},
        new Player{Name= "Sebastian Coates",Position= "Obronca"},
        new Player{Name= "Martin Caceres",Position= "Obronca"},
        new Player{Name= "Guillermo Varela",Position= "Obronca"},
        new Player{Name= "Matias Vina",Position= "Obronca"},
        new Player{Name= "Mathias Olivera",Position= "Obronca"},
        new Player{Name= "Jose Maria Gimenez",Position= "Obronca"},
        new Player{Name= "Diego Godin",Position= "Obronca"},
        new Player{Name= "Jose Luis Rodríguez",Position= "Obronca"},
        new Player{Name= "Lucas Torreira",Position= "Pomocnik"},
        new Player{Name= "Matias Vecino",Position= "Pomocnik"},
        new Player{Name= "Rodrigo Bentancur",Position= "Pomocnik"},
        new Player{Name= "Manuel Ugarte",Position= "Pomocnik"},
        new Player{Name= "Giorgian de Arrascaeta",Position= "Pomocnik"},
        new Player{Name= "Nicolas de la Cruz",Position= "Pomocnik"},
        new Player{Name= "Federico Valverde",Position= "Pomocnik"},
        new Player{Name= "Facundo Pellistri",Position= "Pomocnik"},
        new Player{Name= "Agustin Canobbio",Position= "Pomocnik"},
        new Player{Name= "Facundo Torres",Position= "Pomocnik"},
        new Player{Name= "Luis Suarez",Position= "Napastnik"},
        new Player{Name= "Darwin Nunez",Position= "Napastnik"},
        new Player{Name= "Maximiliano Gomez",Position= "Napastnik"},
        new Player{Name= "Edinson Cavani",Position= "Napastnik"},
},
                        Group = "H",
                        Info="Urugwaj był gospodarzem i zwycięzcą pierwszego turnieju MŚ w 1930 roku. Dwadzieścia lat później Urugwajczycy przyczynili się do jednej z największych niespodzianek w historii MŚ, pokonując Brazylię2-1 w finale, który odbył się na ich własnym terenie przed widownią liczącą 200 000 widzów na legendarnym stadionie Maracana. ‘La Celeste’ z pewnością zechcą znowu zabłysnąć w Katarze.",
                        BestResult="Zwycięzca",
                        BestResultDates = "1930,1950"

                    },
                    new Team
                    {
                        Name = "Ghana",
                        Players = new List<Player>()
{
        new Player{Name= "Lawrence Ati",Position= "Bramkarz"},
        new Player{Name= "Danlad Ibrahim",Position= "Bramkarz"},
        new Player{Name= "Manaf Nurudeen",Position= "Bramkarz"},
                new Player{Name= "Joseph Aidoo",Position= "Obronca"},
        new Player{Name= "Daniel Amartey",Position= "Obronca"},
        new Player{Name= "Baba Rahman",Position= "Obronca"},
        new Player{Name= "Alexander Djiku",Position= "Obronca"},
        new Player{Name= "Tariq Lamptey",Position= "Obronca"},
        new Player{Name= "Gideon Mensah",Position= "Obronca"},
        new Player{Name= "Denis Odoi",Position= "Obronca"},
        new Player{Name= "Mohammed Salisu",Position= "Obronca"},
        new Player{Name= "Alidu Seidu",Position= "Obronca"},
        new Player{Name= "Andre Ayew",Position= "Pomocnik"},
        new Player{Name= "Mohammed Kudus",Position= "Pomocnik"},
        new Player{Name= "Daniel-Kofi Kyereh",Position= "Pomocnik"},
        new Player{Name= "Elisha Owusu",Position= "Pomocnik"},
        new Player{Name= "Thomas Partey",Position= "Pomocnik"},
        new Player{Name= "Salis Abdul Samed",Position= "Pomocnik"},
        new Player{Name= "Daniel Afriyie",Position= "Napastnik"},
        new Player{Name= "Jordan Ayew",Position= "Napastnik"},
        new Player{Name= "Osman Bukari",Position= "Napastnik"},
        new Player{Name= "Issahaku Abdul Fatawu",Position= "Napastnik"},
        new Player{Name= "Antoine Semenyo",Position= "Napastnik"},
        new Player{Name= "Kamal Sowah",Position= "Napastnik"},
        new Player{Name= "Kamaldeen Sulemana",Position= "Napastnik"},
        new Player{Name= "Inaki Williams",Position= "Napastnik"},
},
                        Group = "H",
                        Info="Ghana zadebiutowała na mundialu w 2006 roku i od tego czasu przegapiła tylko turniej w 2018 roku. W swoich trzech występach tylko raz udało się im się wyjść z grupy, miało to miejsce w 2010 roku na MŚ w RPA. Na tym turnieju pokonali również w 1/8 finału po emocjonującej dogrywce Stany Zjednoczone, wchodząc tym samym do ćwierćfinału.",
                        BestResult="Ćwierćfinał",
                        BestResultDates = "2010"

                    },
                    new Team
                    {
                        Name = "Korea Południowa",
                        Players = new List<Player>()
{
        new Player{Name= "Kim Seung-Gyu",Position= "Bramkarz"},
        new Player{Name= "Jo Hyeon-Woo",Position= "Bramkarz"},
        new Player{Name= "Song Bum-Keun",Position= "Bramkarz"},
                new Player{Name= "Kim Min-Jae",Position= "Obronca"},
        new Player{Name= "Kim Young-Gwon",Position= "Obronca"},
        new Player{Name= "Kwon Kyung-Won",Position= "Obronca"},
        new Player{Name= "Cho Yu-Min",Position= "Obronca"},
        new Player{Name= "Kim Moon-Hwan",Position= "Obronca"},
        new Player{Name= "Yoon Jong-Gyu",Position= "Obronca"},
        new Player{Name= "Kim Tae-Hwan",Position= "Obronca"},
        new Player{Name= "Kim Jin-Su",Position= "Obronca"},
        new Player{Name= "Hong Chul",Position= "Obronca"},
        new Player{Name= "Jung Woo-Young",Position= "Pomocnik"},
        new Player{Name= "Son Jun-Ho",Position= "Pomocnik"},
        new Player{Name= "Paik Seung-Ho",Position= "Pomocnik"},
        new Player{Name= "Hwang In-Beom",Position= "Pomocnik"},
        new Player{Name= "Lee Jae-Sung",Position= "Pomocnik"},
        new Player{Name= "Kwon Chang-Hoon",Position= "Pomocnik"},
        new Player{Name= "Jeong Woo-Yeong",Position= "Pomocnik"},
        new Player{Name= "Lee Kang-In",Position= "Pomocnik"},
        new Player{Name= "Son Heung-Min",Position= "Pomocnik"},
        new Player{Name= "Hwang Hee-Chan",Position= "Pomocnik"},
        new Player{Name= "Na Sang-Ho",Position= "Pomocnik"},
        new Player{Name= "Song Min-Kyu",Position= "Pomocnik"},
        new Player{Name= "Hwang Ui-Jo",Position= "Napastnik"},
        new Player{Name= "Cho Gue-Sung",Position= "Napastnik"},
},
                        Group = "H",
                        Info="Żaden azjatycki kraj nie występował na mundialu więcej razy niż Republika Korei, tegoroczny turniej w Katarze będzie dla nich aż jedenastym występem. Jako gospodarze MŚ w 2002 roku dotarli do półfinałów, wygrywając w turnieju cztery mecze. Zasłynęli też wyrzuceniem z mistrzostw broniących tytułu Niemców w 2018 roku.",
                        BestResult="4. miejsce",
                        BestResultDates = "2002"

                    }
                };

            var matches = new List<Match>
                {    
                    // pierwsza kolejka

                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Katar"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Ekwador"),
                        MatchDate = new DateTime(2022,11,20,17,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Anglia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Iran"),
                        MatchDate = new DateTime(2022,11,21,14,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Senegal"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Holandia"),
                        MatchDate = new DateTime(2022,11,21,17,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "USA"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Walia"),
                        MatchDate = new DateTime(2022,11,21,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Argentyna"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Arabia Saudyjska"),
                        MatchDate = new DateTime(2022,11,22,11,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Dania"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Tunezja"),
                        MatchDate = new DateTime(2022,11,22,14,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Meksyk"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Polska"),
                        MatchDate = new DateTime(2022,11,22,17,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Francja"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Australia"),
                        MatchDate = new DateTime(2022,11,22,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Maroko"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Chorwacja"),
                        MatchDate = new DateTime(2022,11,23,11,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Niemcy"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Japonia"),
                        MatchDate = new DateTime(2022,11,23,14,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Hiszpania"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Kostaryka"),
                        MatchDate = new DateTime(2022,11,23,17,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Belgia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Kanada"),
                        MatchDate = new DateTime(2022,11,23,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Szwajcaria"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Kamerun"),
                        MatchDate = new DateTime(2022,11,24,11,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Urugwaj"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Korea Południowa"),
                        MatchDate = new DateTime(2022,11,24,14,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Portugalia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Ghana"),
                        MatchDate = new DateTime(2022,11,24,17,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Brazylia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Serbia"),
                        MatchDate = new DateTime(2022,11,24,20,0,0),
                    },
                    
                    // druga kolejka

                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Walia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Iran"),
                        MatchDate = new DateTime(2022,11,25,11,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Katar"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Senegal"),
                        MatchDate = new DateTime(2022,11,25,14,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Holandia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Ekwador"),
                        MatchDate = new DateTime(2022,11,25,17,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Anglia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "USA"),
                        MatchDate = new DateTime(2022,11,25,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Tunezja"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Australia"),
                        MatchDate = new DateTime(2022,11,26,11,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Polska"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Arabia Saudyjska"),
                        MatchDate = new DateTime(2022,11,26,14,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Francja"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Dania"),
                        MatchDate = new DateTime(2022,11,26,17,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Argentyna"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Meksyk"),
                        MatchDate = new DateTime(2022,11,26,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Japonia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Kostaryka"),
                        MatchDate = new DateTime(2022,11,27,11,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Belgia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Maroko"),
                        MatchDate = new DateTime(2022,11,27,14,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Chorwacja"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Kanada"),
                        MatchDate = new DateTime(2022,11,27,17,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Hiszpania"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Niemcy"),
                        MatchDate = new DateTime(2022,11,27,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Kamerun"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Serbia"),
                        MatchDate = new DateTime(2022,11,28,11,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Korea Południowa"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Ghana"),
                        MatchDate = new DateTime(2022,11,28,14,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Brazylia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Szwajcaria"),
                        MatchDate = new DateTime(2022,11,28,17,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Portugalia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Urugwaj"),
                        MatchDate = new DateTime(2022,11,28,20,0,0),
                    },

                    //trzecia kolejka

                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Ekwador"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Senegal"),
                        MatchDate = new DateTime(2022,11,29,16,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Holandia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Katar"),
                        MatchDate = new DateTime(2022,11,29,16,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Iran"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "USA"),
                        MatchDate = new DateTime(2022,11,29,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Walia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Anglia"),
                        MatchDate = new DateTime(2022,11,29,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Australia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Dania"),
                        MatchDate = new DateTime(2022,11,30,16,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Tunezja"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Francja"),
                        MatchDate = new DateTime(2022,11,30,16,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Arabia Saudyjska"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Meksyk"),
                        MatchDate = new DateTime(2022,11,30,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Polska"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Argentyna"),
                        MatchDate = new DateTime(2022,11,30,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Chorwacja"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Belgia"),
                        MatchDate = new DateTime(2022,12,01,16,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Kanada"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Maroko"),
                        MatchDate = new DateTime(2022,12,01,16,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Japonia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Hiszpania"),
                        MatchDate = new DateTime(2022,12,01,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Kostaryka"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Niemcy"),
                        MatchDate = new DateTime(2022,12,01,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Ghana"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Urugwaj"),
                        MatchDate = new DateTime(2022,12,02,16,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Korea Południowa"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Portugalia"),
                        MatchDate = new DateTime(2022,12,02,16,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Kamerun"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Brazylia"),
                        MatchDate = new DateTime(2022,12,02,20,0,0),
                    },
                    new Match
                    {
                        HomeTeam = context.Teams.SingleOrDefault(x => x.Name == "Serbia"),
                        AwayTeam = context.Teams.SingleOrDefault(x => x.Name == "Szwajcaria"),
                        MatchDate = new DateTime(2022,12,02,20,0,0),
                    },

                    // ósemiki
/*
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,03,16,0,0)
                    },
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,03,20,0,0)
                    },
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,04,16,0,0)
                    },
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,04,20,0,0)
                    },
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,05,16,0,0)
                    },
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,05,20,0,0)
                    },
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,06,16,0,0)
                    },
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,06,20,0,0)
                    },

                    // ćwiartki

                    new Match
                    {
                        MatchDate = new DateTime(2022,12,09,16,0,0)
                    },
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,09,20,0,0)
                    },
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,10,16,0,0)
                    },
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,10,20,0,0)
                    },

                    // półfinały

                    new Match
                    {
                        MatchDate = new DateTime(2022,12,13,20,0,0)
                    },
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,14,20,0,0)
                    },

                    // finały

                    new Match
                    {
                        MatchDate = new DateTime(2022,12,17,16,0,0)
                    },
                    new Match
                    {
                        MatchDate = new DateTime(2022,12,18,16,0,0)
                    }, */
                };
                

            //await context.Teams.AddRangeAsync(teams);

            await context.Matches.AddRangeAsync(matches);

            //await context.Championships.AddRangeAsync(championships);

            await context.SaveChangesAsync();
        }
    }
}