
namespace PortfolioApi.Models
{
    public class ProfileInfo
    {
        public int Id { get; set; }
        public string NomeCompleto { get; set; }
        public string TituloProfissional { get; set; }
        public string Resumo { get; set; }
        public string? Email { get; set; }
        public string? Telefone { get; set; }
        public string? UrlLinkedin { get; set; }
        public string? UrlGithub { get; set; }
    }
}