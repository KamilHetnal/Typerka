using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class UpdateBetEntityWithNewPrimaryKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bets_AspNetUsers_AppUserId",
                table: "Bets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Bets",
                table: "Bets");

            migrationBuilder.AlterColumn<string>(
                name: "AppUserId",
                table: "Bets",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Bets",
                table: "Bets",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Bets_AppUserId",
                table: "Bets",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Bets_AspNetUsers_AppUserId",
                table: "Bets",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bets_AspNetUsers_AppUserId",
                table: "Bets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Bets",
                table: "Bets");

            migrationBuilder.DropIndex(
                name: "IX_Bets_AppUserId",
                table: "Bets");

            migrationBuilder.AlterColumn<string>(
                name: "AppUserId",
                table: "Bets",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Bets",
                table: "Bets",
                columns: new[] { "AppUserId", "MatchId" });

            migrationBuilder.AddForeignKey(
                name: "FK_Bets_AspNetUsers_AppUserId",
                table: "Bets",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
