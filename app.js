const data = {
  "places": [
    {
      "id": 1,
      "nome": "Praga",
      "imagem": "images/Praga.jpg",
      "pais": "República Tcheca",
      "descricao": "Cidade europeia com arquitetura medieval, castelos e pontes históricas sobre o rio Vltava.",
      "descricaoCurta": "A cidade das cem torres.",
      "curiosidades": "Praga é famosa por seu relógio astronômico medieval, que ainda funciona e mostra o movimento do sol, da lua e dos signos do zodíaco.",
      "populacao": "população: aprox. 1,3 milhões",
      "localTuristico": {
        "nome": "Castelo de Praga",
        "descricao": "O maior complexo de castelos do mundo, sede histórica de reis e presidentes, com vistas panorâmicas da cidade.",
        "imagem": ""
      }
    },
    {
      "id": 2,
      "nome": "Chefchaouen",
      "imagem": "images/Chefchaouen.jpg",
      "pais": "Marrocos",
      "descricao": "Chefchaouen é famosa por suas casas pintadas em tons de azul, ruas estreitas e atmosfera tranquila.",
      "descricaoCurta": "A encantadora cidade azul nas montanhas Rif.",
      "curiosidades": "O azul das casas foi introduzido por judeus no século XV, simbolizando o céu e a espiritualidade.",
      "populacao": "população: aprox. 42 mil",
      "localTuristico": {
        "nome": "Medina Azul",
        "descricao": "O coração de Chefchaouen, um labirinto de vielas azuis cheias de lojas artesanais e cafés tradicionais.",
        "imagem": ""
      }
    },
    {
      "id": 3,
      "nome": "Ouro Preto",
      "imagem": "images/Ouro Preto.jpg",
      "pais": "Brasil",
      "descricao": "Cidade histórica de Minas Gerais, famosa por suas ruas de pedra, igrejas barrocas e arquitetura colonial preservada.",
      "descricaoCurta": "O tesouro colonial do Brasil.",
      "curiosidades": "Ouro Preto já foi a capital de Minas Gerais e é símbolo da Inconfidência Mineira.",
      "populacao": "população: aprox. 70 mil",
      "localTuristico": {
        "nome": "Igreja de São Francisco de Assis",
        "descricao": "Obra-prima de Aleijadinho e símbolo do barroco brasileiro, com esculturas e talhas douradas impressionantes.",
        "imagem": ""
      }
    },
    {
      "id": 4,
      "nome": "Puebla",
      "imagem": "images/Puebla.jpeg",
      "pais": "México",
      "descricao": "Cidade colonial com igrejas barrocas, azulejos coloridos e culinária famosa.",
      "descricaoCurta": "Cidade colonial e colorida do México.",
      "curiosidades": "Puebla é famosa pelos azulejos Talavera e pelo 'mole poblano'.",
      "populacao": "população: aprox. 1,5 milhão",
      "localTuristico": {
        "nome": "Catedral de Puebla",
        "descricao": "Construída no século XVI, é uma das mais altas e belas catedrais do México, símbolo da cidade.",
        "imagem": ""
      }
    },
    {
      "id": 5,
      "nome": "Seul",
      "imagem": "images/Seul.jpeg",
      "pais": "Coreia do Sul",
      "descricao": "Seul é a vibrante capital da Coreia do Sul, conhecida por sua mistura de tradição e modernidade.",
      "descricaoCurta": "A conectada e vibrante metrópole.",
      "curiosidades": "Possui o maior sistema de metrô do mundo em extensão e lindas flores de cerejeira na primavera.",
      "populacao": "população: aprox. 9,5 milhões",
      "localTuristico": {
        "nome": "Palácio Gyeongbokgung",
        "descricao": "O maior e mais importante palácio real da Coreia, exemplo da arquitetura Joseon e símbolo nacional.",
        "imagem": ""
      }
    },
    {
      "id": 6,
      "nome": "Samarcanda",
      "imagem": "images/Samarcanda.jpeg",
      "pais": "Uzbequistão",
      "descricao": "Samarcanda é famosa por sua arquitetura islâmica impressionante e como um ponto da antiga Rota da Seda.",
      "descricaoCurta": "A joia histórica da Rota da Seda.",
      "curiosidades": "Abriga o mausoléu de Tamerlão, o conquistador turco-mongol.",
      "populacao": "população: aprox. 500 mil",
      "localTuristico": {
        "nome": "Praça Registão",
        "descricao": "Conjunto monumental de madraças com azulejos azuis deslumbrantes, símbolo máximo da cidade.",
        "imagem": ""
      }
    },
    {
      "id": 7,
      "nome": "Helsinque",
      "imagem": "images/Helsinque.jpg",
      "pais": "Finlândia",
      "descricao": "Helsinque é a capital finlandesa, conhecida por seu design inovador e harmonia entre cidade e natureza.",
      "descricaoCurta": "O coração criativo do norte da Europa.",
      "curiosidades": "Helsinque se estende por mais de 300 ilhas e foi eleita várias vezes a cidade mais habitável do mundo.",
      "populacao": "população: aprox. 665 mil",
      "localTuristico": {
        "nome": "Catedral de Helsinque",
        "descricao": "Símbolo icônico da cidade, em estilo neoclássico, localizada na Praça do Senado.",
        "imagem": ""
      }
    },
    {
      "id": 8,
      "nome": "Rio de Janeiro",
      "imagem": "images/Rio de Janeiro.jpg",
      "pais": "Brasil",
      "descricao": "Cidade litorânea famosa por suas praias, montanhas e vida vibrante.",
      "descricaoCurta": "A cidade maravilhosa.",
      "curiosidades": "O Cristo Redentor é uma das sete maravilhas do mundo moderno.",
      "populacao": "população: aprox. 6,7 milhões",
      "localTuristico": {
        "nome": "Cristo Redentor",
        "descricao": "Estátua monumental localizada no topo do Corcovado, com vista panorâmica da cidade e da Baía de Guanabara.",
        "imagem": ""
      }
    },
    {
      "id": 9,
      "nome": "Granada",
      "imagem": "images/Granada.jpg",
      "pais": "Nicarágua",
      "descricao": "Cidade colonial colorida situada às margens do Lago Nicarágua, sob o Vulcão Mombacho.",
      "descricaoCurta": "Cidade colonial charmosa e viva.",
      "curiosidades": "Foi atacada por piratas e ainda preserva charretes coloniais e ruas de paralelepípedo.",
      "populacao": "população: 130.000",
      "localTuristico": {
        "nome": "Catedral de Granada",
        "descricao": "Construída no século XVI, sua fachada amarela é um dos principais cartões-postais da cidade.",
        "imagem": ""
      }
    },
    {
      "id": 10,
      "nome": "Wellington",
      "imagem": "images/Wellington.jpg",
      "pais": "Nova Zelândia",
      "descricao": "Capital compacta e criativa, com forte presença cultural e cinematográfica.",
      "descricaoCurta": "Cidade portuária cercada por colinas verdes.",
      "curiosidades": "Conhecida como 'Windy City', abriga o museu Te Papa Tongarewa.",
      "populacao": "população: aprox. 215 mil",
      "localTuristico": {
        "nome": "Museu Te Papa Tongarewa",
        "descricao": "Museu nacional da Nova Zelândia, com exposições sobre cultura maori e história natural.",
        "imagem": ""
      }
    },
    {
      "id": 11,
      "nome": "Chiang Mai",
      "imagem": "images/Chiang Mai.jpg",
      "pais": "Tailândia",
      "descricao": "Cidade cultural e espiritual do norte tailandês, repleta de templos e natureza exuberante.",
      "descricaoCurta": "O coração espiritual da Tailândia.",
      "curiosidades": "Sede do Festival das Lanternas Yi Peng e de mais de 300 templos.",
      "populacao": "população: aprox. 130 mil",
      "localTuristico": {
        "nome": "Wat Phra That Doi Suthep",
        "descricao": "Templo dourado situado no alto de uma montanha, oferecendo vistas incríveis de Chiang Mai.",
        "imagem": ""
      }
    },
    {
      "id": 12,
      "nome": "Maun",
      "imagem": "images/Maun.jpg",
      "pais": "Botsuana",
      "descricao": "Porta de entrada para o Delta do Okavango, famosa por safáris e natureza exuberante.",
      "descricaoCurta": "Centro de safaris no Delta do Okavango.",
      "curiosidades": "Conhecida como a capital dos safáris de Botsuana.",
      "populacao": "população: 55.000",
      "localTuristico": {
        "nome": "Delta do Okavango",
        "descricao": "Um dos maiores deltas interiores do mundo, com fauna rica e paisagens de tirar o fôlego.",
        "imagem": ""
      }
    }
  ]
}

function carregarCidades() {
    const containerCidade = document.querySelector('.cidades');

    let cities = "";

    data.places.forEach(lugar => {

        cities += `
    <section class="d-inline-block" id="${lugar.id}">
                <div class="card" style="width: 18rem;">
                    <img src="${lugar.imagem}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${lugar.nome} - ${lugar.pais}</h5>
                        <p class="card-text">${lugar.descricaoCurta}</p>
                        <a href="detalhe.html?id=${lugar.id}" class="btn btn-primary">Saiba Mais</a>
                    </div>
                </div>
            </section>
        `;
    });
    containerCidade.innerHTML = cities;
}
document.addEventListener('DOMContentLoaded', carregarCidades);
