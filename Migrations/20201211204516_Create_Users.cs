using Microsoft.EntityFrameworkCore.Migrations;
using SportsDepartment.Data;

namespace SportsDepartment.Migrations
{
    public partial class Create_Users : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppUsers",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUsers", x => x.ID);
                });

            //after creating the table already adds one user
            var pass = PasswordHandler.Hash("Pswd202!");
            migrationBuilder.InsertData(
                table: "AppUsers",
                columns: new[] { "Id", "Email", "Password", "Name" },
                values: new object[] { 1, "me@me.com", pass, "Adolfo"});
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppUsers");
        }
    }
}
