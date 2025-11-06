// Selecionar a Seção About
const about = document.querySelector("#about");

// Função para buscar os dados no GitHub
async function getApiGithub(){
    
    // Pois a resposta pode dar certo ou não
    try{
        // PASSO 01: Fazer uma Requisição GET para a API do GitHub
        const dadosPerfil = await fetch('https://api.github.com/users/bianca-msilva');// Envia requisição do tipo GET, traz tudo o que é PÚBLICO
        
        // PASSO 02: Converter os dados recebidos do GitHub em JSON
        const perfilJson = await dadosPerfil.json(); 
        
        // PASSO 03: Criar o HTML/CSS com os dados do Perfil, a partir da API do GitHub
        let conteudo = `
            <!-- FOTO DO PERFIL -->
            <figure class="about_image">
                <img
                    src="${perfilJson.avatar_url}"
                    alt="Foto do perfil do GitHub - ${perfilJson.name}."
                >
            </figure>
 
            <!-- CONTEÚDO DO PERFIL -->
            <article class="about_content">
 
                <h2>Sobre mim</h2>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Nulla id gravida magna, ut semper sapien.</p>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Nulla id gravida magna, ut semper sapien.</p>
 
                <div class="about_stats">
                    <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver GitHub</a>
                   
                    <!-- Faltou esta div para alinhar os cards -->
                    <div class="stats-wrapper">
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.followers}</p>
                            <p class="stat-label">Seguidores</p>
                        </div>
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.public_repos}</p>
                            <p class="stat-label">Repositórios</p>
                        </div>
                    </div>
 
                </div>
            </article>
        `

        // PASSO 04: Adicionar o HTML na Seção About
        about.innerHTML += conteudo;

    }catch(error){
        console.error(error);
    }
}

// Executar essa função automaticmanete ao abrir a página, chamando a função getAPIGithub()
getApiGithub();