using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class UpdateBetEntityWithBetDateAndWinnerProperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "BetDate",
                table: "Bets",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "BetPoints",
                table: "Bets",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "WinnerId",
                table: "Bets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Bets_WinnerId",
                table: "Bets",
                column: "WinnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Bets_Teams_WinnerId",
                table: "Bets",
                column: "WinnerId",
                principalTable: "Teams",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bets_Teams_WinnerId",
                table: "Bets");

            migrationBuilder.DropIndex(
                name: "IX_Bets_WinnerId",
                table: "Bets");

            migrationBuilder.DropColumn(
                name: "BetDate",
                table: "Bets");

            migrationBuilder.DropColumn(
                name: "BetPoints",
                table: "Bets");

            migrationBuilder.DropColumn(
                name: "WinnerId",
                table: "Bets");
        }
    }
}
