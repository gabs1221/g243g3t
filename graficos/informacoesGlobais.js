const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function vizualizarInformacoes(){
    const res = fetch(url);
    const dados = res.json();
    console.log(dados);
}
buscarInformacoes();