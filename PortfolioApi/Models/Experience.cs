namespace PortfolioApi.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Experience
    {
        public int Id { get; set; }
        public string NomeEmpresa { get; set; }
        public string Role { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; } 
        public string Description { get; set; }
    }
}
