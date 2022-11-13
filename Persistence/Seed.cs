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
        public static async Task SeedData(DataContext context,
            UserManager<AppUser> userManager)
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
                            // new Player
                            // {
                            //     Name= "Robert Lewandowski",
                            //     Position= "Napastnik"
                            // },
                        },
                        Group = "C"
                    },
                    new Team
                    {
                        Name = "Holandia",
                        Players = new List<Player>(),
                        Group = "A"
                    },
                    new Team
                    {
                        Name = "Ekwador",
                        Players = new List<Player>(),
                        Group = "A"
                    },
                    new Team
                    {
                        Name = "Senegal",
                        Players = new List<Player>(),
                        Group = "A"
                    },
                    new Team
                    {
                        Name = "Katar",
                        Players = new List<Player>(),
                        Group = "A"
                    },
                    new Team
                    {
                        Name = "Anglia",
                        Players = new List<Player>(),
                        Group = "B"
                    },
                    new Team
                    {
                        Name = "USA",
                        Players = new List<Player>(),
                        Group = "B"
                    },
                    new Team
                    {
                        Name = "Iran",
                        Players = new List<Player>(),
                        Group = "B"
                    },
                    new Team
                    {
                        Name = "Walia",
                        Players = new List<Player>(),
                        Group = "B"
                    },
                    new Team
                    {
                        Name = "Argentyna",
                        Players = new List<Player>(),
                        Group = "C"
                    },
                    new Team
                    {
                        Name = "Meksyk",
                        Players = new List<Player>(),
                        Group = "C"
                    },
                    new Team
                    {
                        Name = "Arabia Saudyjska",
                        Players = new List<Player>(),
                        Group = "C"
                    },
                    new Team
                    {
                        Name = "Francja",
                        Players = new List<Player>(),
                        Group = "D"
                    },
                    new Team
                    {
                        Name = "Dania",
                        Players = new List<Player>(),
                        Group = "D"
                    },
                    new Team
                    {
                        Name = "Tunezja",
                        Players = new List<Player>(),
                        Group = "D"
                    },
                    new Team
                    {
                        Name = "Australia",
                        Players = new List<Player>(),
                        Group = "D"
                    },
                    new Team
                    {
                        Name = "Niemcy",
                        Players = new List<Player>(),
                        Group = "E"
                    },
                    new Team
                    {
                        Name = "Hiszpania",
                        Players = new List<Player>(),
                        Group = "E"
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
                        Group = "E"
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
                        Group = "E"
                    },
                    new Team
                    {
                        Name = "Chorwacja",
                        Players = new List<Player>(),
                        Group = "F"
                    },
                    new Team
                    {
                        Name = "Belgia",
                        Players = new List<Player>(),
                        Group = "F"
                    },
                    new Team
                    {
                        Name = "Kanada",
                        Players = new List<Player>(),
                        Group = "F"
                    },
                    new Team
                    {
                        Name = "Maroko",
                        Players = new List<Player>(),
                        Group = "F"
                    },
                    new Team
                    {
                        Name = "Szwajcaria",
                        Players = new List<Player>(),
                        Group = "G"
                    },
                    new Team
                    {
                        Name = "Serbia",
                        Players = new List<Player>(),
                        Group = "G"
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

                    },
                    new Team
                    {
                        Name = "Kamerun",
                        Players = new List<Player>(),
                        Group = "G"
                    },
                    new Team
                    {
                        Name = "Portugalia",
                        Players = new List<Player>(),
                        Group = "H"
                    },
                    new Team
                    {
                        Name = "Urugwaj",
                        Players = new List<Player>(),
                        Group = "H"
                    },
                    new Team
                    {
                        Name = "Ghana",
                        Players = new List<Player>(),
                        Group = "H"
                    },
                    new Team
                    {
                        Name = "Korea Południowa",
                        Players = new List<Player>(),
                        Group = "H"
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
                    },
                };


        //await context.Teams.AddRangeAsync(teams);

         //await context.Matches.AddRangeAsync(matches);

        await context.Championships.AddRangeAsync(championships);
        
        await context.SaveChangesAsync();
        }
    }
}

