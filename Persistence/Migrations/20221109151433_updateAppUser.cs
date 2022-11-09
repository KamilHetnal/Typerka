using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class updateAppUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChampionBets_AspNetUsers_AppUserId",
                table: "ChampionBets");

            migrationBuilder.DropForeignKey(
                name: "FK_TopScorerBets_AspNetUsers_AppUserId",
                table: "TopScorerBets");

            migrationBuilder.DropIndex(
                name: "IX_TopScorerBets_AppUserId",
                table: "TopScorerBets");

            migrationBuilder.DropIndex(
                name: "IX_ChampionBets_AppUserId",
                table: "ChampionBets");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "TopScorerBets");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "ChampionBets");

            migrationBuilder.AddColumn<Guid>(
                name: "ChampionBetId",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "TopScorerBetId",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_ChampionBetId",
                table: "AspNetUsers",
                column: "ChampionBetId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_TopScorerBetId",
                table: "AspNetUsers",
                column: "TopScorerBetId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_ChampionBets_ChampionBetId",
                table: "AspNetUsers",
                column: "ChampionBetId",
                principalTable: "ChampionBets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_TopScorerBets_TopScorerBetId",
                table: "AspNetUsers",
                column: "TopScorerBetId",
                principalTable: "TopScorerBets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_ChampionBets_ChampionBetId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_TopScorerBets_TopScorerBetId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_ChampionBetId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_TopScorerBetId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ChampionBetId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TopScorerBetId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "TopScorerBets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "ChampionBets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TopScorerBets_AppUserId",
                table: "TopScorerBets",
                column: "AppUserId");

            migrationBuilder.CreateIndex(
                name: "IX_ChampionBets_AppUserId",
                table: "ChampionBets",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChampionBets_AspNetUsers_AppUserId",
                table: "ChampionBets",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TopScorerBets_AspNetUsers_AppUserId",
                table: "TopScorerBets",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
