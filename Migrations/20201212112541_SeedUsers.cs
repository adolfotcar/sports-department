using Microsoft.EntityFrameworkCore.Migrations;
using SportsDepartment.Data;

namespace SportsDepartment.Migrations
{
    public partial class SeedUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //user to be used by the lecturer
            migrationBuilder.InsertData(
                table: "AppUsers",
                columns: new[] { "Email", "Password", "Name" },
                values: new object[] { "peeyush.shankhareman@ncirl.ie", PasswordHandler.Hash("Admin123"), "Peeyush" });

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
