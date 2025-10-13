const API_BASE_URL = 'https://localhost:7147/api/Portfolio';

const GITHUB_USERNAME = 'jaqfreitas5-coder';

document.addEventListener('DOMContentLoaded', () => {
    fetchProfileInfo();
    fetchExperiences();
    fetchSkills();
    fetchFormations();
    fetchCertifications();
    fetchProjects();
    fetchGithubRepos();
});

async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Erro na rede: ${response.status} - ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Falha ao buscar dados de '${endpoint}':`, error);
    }
}

async function fetchProfileInfo() {
    const profile = await fetchData('profile');
    if (!profile) return;
    const header = document.getElementById('profile-header');
    header.innerHTML = `
        <h1>${profile.nomeCompleto}</h1>
        <p>${profile.tituloProfissional}</p>
        <p>${profile.resumo}</p>
        <div class="contact-links">
            <a href="${profile.urlLinkedin}" target="_blank">LinkedIn</a>
            <a href="${profile.urlGithub}" target="_blank">GitHub</a>
            <a href="mailto:${profile.email}">Email</a>
            ${profile.telefone ? `<a href="tel:${profile.telefone.replace(/[^0-9]/g, '')}">Telefone</a>` : ''}
        </div>
    `;
}

async function fetchExperiences() {
    const experiences = await fetchData('experiences');
    if (!experiences) return;
    const list = document.getElementById('experience-list');
    list.innerHTML = '';
    experiences.forEach(item => {
        const startDate = new Date(item.startDate).toLocaleDateString('pt-BR', { year: 'numeric', month: 'short' });
        const endDate = item.endDate ? new Date(item.endDate).toLocaleDateString('pt-BR', { year: 'numeric', month: 'short' }) : 'Atual';
        const el = document.createElement('div');
        el.className = 'list-item';
        el.innerHTML = `
            <h3>${item.role}</h3>
            <p class="item-meta">${item.nomeEmpresa} | ${startDate} - ${endDate}</p>
            <p>${item.description}</p>
        `;
        list.appendChild(el);
    });
}

async function fetchSkills() {
    const skills = await fetchData('skills');
    if (!skills) return;
    const list = document.getElementById('skills-list');
    list.innerHTML = '';
    skills.forEach(item => {
        const el = document.createElement('div');
        el.className = 'card';
        el.innerHTML = `<h3>${item.name}</h3><p>${item.category}</p>`;
        list.appendChild(el);
    });
}

async function fetchFormations() {
    const formations = await fetchData('formations');
    if (!formations) return;
    const list = document.getElementById('formation-list');
    list.innerHTML = '';
    formations.forEach(item => {
        const el = document.createElement('div');
        el.className = 'list-item';
        el.innerHTML = `
            <h3>${item.nomeCurso}</h3>
            <p class="item-meta">${item.instituicao} | ${item.status}</p>
        `;
        list.appendChild(el);
    });
}

async function fetchCertifications() {
    const certifications = await fetchData('certifications');
    if (!certifications) return;
    const list = document.getElementById('certification-list');
    list.innerHTML = '';
    certifications.forEach(item => {
        const el = document.createElement('div');
        el.className = 'card';
        el.innerHTML = `
            <h3>${item.nomeCurso}</h3>
            <p>${item.instituicao} (${item.anoConclusao})</p>
        `;
        list.appendChild(el);
    });
}

async function fetchProjects() {
    const projects = await fetchData('projects');
    if (!projects) return;
    const list = document.getElementById('projects-list');
    list.innerHTML = '';
    projects.forEach(item => {
        const el = document.createElement('div');
        el.className = 'card';
        el.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p><strong>Tecnologias:</strong> ${item.technologiesUsed}</p>
            <a href="${item.projectUrl}" target="_blank">Ver no GitHub</a>
        `;
        list.appendChild(el);
    });
}

async function fetchGithubRepos() {
    const repos = await fetchData(`github-repos/${GITHUB_USERNAME}`);
    if (!repos) return;
    const list = document.getElementById('github-repos-list');
    list.innerHTML = '';
    repos.slice(0, 6).forEach(item => {
        // Ignora o repositório especial que tem o mesmo nome do usuário
        if (item.name.toLowerCase() === GITHUB_USERNAME.toLowerCase()) return;
        const el = document.createElement('div');
        el.className = 'card';
        el.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description || 'Sem descrição.'}</p>
            <p><strong>Linguagem:</strong> ${item.language || 'N/A'}</p>
            <a href="${item.html_url}" target="_blank">Ver no GitHub</a>
        `;
        list.appendChild(el);
    });
}