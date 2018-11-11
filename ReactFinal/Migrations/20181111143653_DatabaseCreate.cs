using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactFinal.Migrations
{
    public partial class DatabaseCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Faq",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Question = table.Column<string>(nullable: true),
                    Answer = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Faq", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Question",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Header = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: true),
                    Rating = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Question", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Faq",
                columns: new[] { "Id", "Answer", "Question" },
                values: new object[,]
                {
                    { 1, "You can currently not change this yourself, please contact an admin.", "How can I change my account info?" },
                    { 2, "We are working with major movie studios, stay tuned!", "When will you update your inventory?" },
                    { 3, "Yes! Contact mail@cinemacity.com", "Are you hiring?" },
                    { 4, "Make sure you have enough space on your computer and that CinemaCity isn't blocked.", "My movies are not downloading!" },
                    { 5, "To mail@cinemacity.com :)", "Where can I send tips?" },
                    { 6, "Please submit a detailed bug report to mail@cinemacity.com and we'll be on it immediately!", "Cart always crashes!" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Faq");

            migrationBuilder.DropTable(
                name: "Question");
        }
    }
}
