using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class updateAppUser2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_ChampionBets_ChampionBetId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_TopScorerBets_TopScorerBetId",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<Guid>(
                name: "TopScorerBetId",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<Guid>(
                name: "ChampionBetId",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_ChampionBets_ChampionBetId",
                table: "AspNetUsers",
                column: "ChampionBetId",
                principalTable: "ChampionBets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_TopScorerBets_TopScorerBetId",
                table: "AspNetUsers",
                column: "TopScorerBetId",
                principalTable: "TopScorerBets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_ChampionBets_ChampionBetId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_TopScorerBets_TopScorerBetId",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<Guid>(
                name: "TopScorerBetId",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "ChampionBetId",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "TEXT",
                oldNullable: true);

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
    }
}
