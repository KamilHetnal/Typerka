using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Matches",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    HomeTeam = table.Column<string>(type: "TEXT", nullable: true),
                    AwayTeam = table.Column<string>(type: "TEXT", nullable: true),
                    MatchDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    HomeGoals = table.Column<int>(type: "INTEGER", nullable: false),
                    AwayGoals = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Matches", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Matches");
        }
    }
}
