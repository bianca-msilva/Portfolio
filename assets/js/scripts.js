
// Selecionar a Seção About
const about = document.querySelector("#about");

// Selecionar o formulário
const formulario = document.querySelector("#formulario");

// Validar o e-mail - Expressão regular
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

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
                    src="./assets/img/fotoBianca.jpeg"
                    alt="Foto do perfil de ${perfilJson.name}."
                >
            </figure>
 
            <!-- CONTEÚDO DO PERFIL -->
            <article class="about_content">
 
                <h2>Sobre mim</h2>
                <p>Sou desenvolvedora full stack apaixonada por transformar ideias em soluções digitais completas. Com domínio de tecnologias front-end e back-end, crio aplicações modernas, escaláveis e centradas na experiência do usuário. Gosto de unir design intuitivo com código limpo, entregando projetos que funcionam bem e encantam visualmente.</p>
                <p>Tenho experiência em frameworks como React, Node.js e bancos de dados relacionais, além de boas práticas de versionamento, testes e deploy. Cada projeto é uma oportunidade de inovar, aprender e superar expectativas.</p>
 
                <div id = "button" class="about_stats">
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

// Função de envio e validação com o evento 'submit'
formulario.addEventListener('submit', function(event){
    
    // Impedir envio automático do formulário
    event.preventDefault();

    // Validação do campo nome
    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome"); // Para a mensagem de erro

    // Nome precisa ter no mínimo 3 caracteres
    if(campoNome.value.length < 3){

        // Exibir a mensagem de erro a partir do span, txtNome
        txtNome.innerHTML = 'O Nome deve ter no mínimo 3 caracteres';
        campoNome.focus(); // Cursor voltar la para o campo para digitar novamente outro nome
        return; // Parar o submit e pessoa digitar nova informação
    }else{
        txtNome.innerHTML = ''; // Limpar o span
    }

    // Validação do campo e-mail
     const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail");

    // Se a escrita é no mesmo padrão da expressão regular
    if(!campoEmail.value.match(emailRegex)){   // Se for diferente
        txtEmail.innerHTML = 'Digite um e-mail válido!'
        campoEmail.focus(); 
        return; 
    }else{
        txtEmail.innerHTML = ''; 
    }

    // Validação do campo assunto
    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto"); // Para a mensagem de erro

    // Nome precisa ter no mínimo 3 caracteres
    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = 'O Assunto deve ter no mínimo 5 caracteres';
        campoAssunto.focus(); 
        return; 
    }else{
        txtAssunto.innerHTML = ''; 
    }

    // Se passou todas validações, enviar o formulário
    formulario.submit();
}) 

// Executar essa função automaticmanete ao abrir a página, chamando a função getAPIGithub()
getApiGithub();
