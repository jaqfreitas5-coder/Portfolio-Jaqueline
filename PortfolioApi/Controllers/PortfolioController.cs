// Em PortfolioApi/Controllers/PortfolioController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;
using PortfolioApi.Models;
using System.Net.Http.Headers;

namespace PortfolioApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PortfolioController : ControllerBase
    {
        private readonly PortfolioContext _context;
        private readonly IHttpClientFactory _httpClientFactory;

        public PortfolioController(PortfolioContext context, IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _httpClientFactory = httpClientFactory;
        }

        // --- NOVOS ENDPOINTS ---
        [HttpGet("profile")]
        public async Task<ActionResult<ProfileInfo>> GetProfileInfo()
        {
            // Como só há um perfil, pegamos o primeiro que encontrarmos.
            var profile = await _context.ProfileInfo.FirstOrDefaultAsync();
            if (profile == null)
            {
                return NotFound();
            }
            return profile;
        }

        [HttpGet("formations")]
        public async Task<ActionResult<IEnumerable<Formation>>> GetFormations()
        {
            return await _context.Formations.ToListAsync();
        }

        [HttpGet("certifications")]
        public async Task<ActionResult<IEnumerable<Certification>>> GetCertifications()
        {
            // Ordena para mostrar os mais recentes primeiro
            return await _context.Certifications.OrderByDescending(c => c.AnoConclusao).ToListAsync();
        }


        // --- ENDPOINTS ANTIGOS (AINDA NECESSÁRIOS) ---
        [HttpGet("skills")]
        public async Task<ActionResult<IEnumerable<Skill>>> GetSkills()
        {
            return await _context.Skills.ToListAsync();
        }

        [HttpGet("projects")]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            return await _context.Projects.ToListAsync();
        }

        [HttpGet("experiences")]
        public async Task<ActionResult<IEnumerable<Experience>>> GetExperiences()
        {
            // Ordena para mostrar as experiências mais recentes primeiro
            return await _context.Experiences.OrderByDescending(e => e.StartDate).ToListAsync();
        }

        [HttpGet("github-repos/{username}")]
        public async Task<IActionResult> GetGithubRepos(string username)
        {
            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.UserAgent.Add(new ProductInfoHeaderValue("PortfolioApi", "1.0"));

            try
            {
                var response = await client.GetAsync($"https://api.github.com/users/{username}/repos?sort=updated");
                if (response.IsSuccessStatusCode)
                {
                    var jsonString = await response.Content.ReadAsStringAsync();
                    return Content(jsonString, "application/json");
                }
                else
                {
                    return StatusCode((int)response.StatusCode, "Erro ao buscar repositórios do GitHub.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }
    }
}