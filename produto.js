
const PRODUCTS = {
  bcaa: {
    id: 'bcaa',
    name: 'BCAA 2:1:1',
    category: 'Aminoácidos',
    tag: 'Recuperação',
    price: 79.90,
    rating: '4.8',
    reviews: 14,
    image: 'assets/bcaa.png',
    emoji: '💪',
    description: 'Suplemento com aminoácidos essenciais para apoiar recuperação muscular, resistência e rotina de treinos intensos.',
    benefits: [
      'Auxilia na recuperação muscular após treinos de alta intensidade.',
      'Entrega 1.000 mg de L-Leucina e 500 mg de L-Isoleucina e L-Valina por porção.',
      'Fórmula prática em cápsulas para encaixar na rotina diária.',
      'Tabela nutricional e modo de uso organizados para consulta rápida.'
    ],
    use: 'Consumir 4 cápsulas ao dia, conforme orientação do rótulo do produto.',
    ingredients: 'L-Leucina, L-Isoleucina, L-Valina, gelatina e corantes permitidos.',
    comments: [
      ['Rafael M.', 'Compra verificada', 'Entrega rápida e produto muito bem embalado. A página explica tudo com clareza.'],
      ['Isabela C.', 'Compra verificada', 'Gostei da praticidade das cápsulas e da apresentação completa da tabela nutricional.'],
      ['Vinícius P.', 'Compra verificada', 'A navegação ficou ótima e facilitou a comparação com outros produtos da loja.']
    ]
  },
  creatina: {
    id: 'creatina',
    name: 'Creatina Monohidratada',
    category: 'Creatina',
    tag: 'Força',
    price: 69.90,
    rating: '4.9',
    reviews: 18,
    image: 'assets/creatina.png',
    emoji: '⚡',
    description: 'Creatina monohidratada para apoiar força, explosão, potência e desempenho em treinos de alta intensidade.',
    benefits: [
      '5.000 mg de creatina por porção.',
      'Auxilia no desempenho físico em exercícios repetidos de alta intensidade.',
      'Fórmula direta e fácil de combinar com a rotina de suplementação.',
      'Página organizada com informação nutricional, composição e conservação.'
    ],
    use: 'Dissolver 5 g (4 dosadores) em água ou bebida de preferência e consumir 1 porção ao dia.',
    ingredients: 'Creatina monohidratada. Não contém glúten.',
    comments: [
      ['Gustavo R.', 'Compra verificada', 'Excelente apresentação do produto. O modo de uso ficou claro e objetivo.'],
      ['Camila S.', 'Compra verificada', 'A seção sobre conservação e característica higroscópica passou bastante confiança.'],
      ['Leonardo T.', 'Compra verificada', 'Site rápido e checkout fácil. A creatina ficou muito bem destacada na página.']
    ]
  },
  multivitaminico: {
    id: 'multivitaminico',
    name: 'Multivitamínico Ultra',
    category: 'Vitaminas',
    tag: 'Saúde',
    price: 54.90,
    rating: '4.7',
    reviews: 22,
    image: 'assets/multivitaminico.png',
    emoji: '💊',
    description: 'Fórmula completa com vitaminas e minerais para complementar a alimentação e reforçar a rotina diária.',
    benefits: [
      'Combinação ampla de vitaminas e minerais essenciais.',
      'Suporte prático para o dia a dia em apenas 1 comprimido.',
      'Informações nutricionais detalhadas em uma visualização fácil de ler.',
      'Boa opção para quem busca praticidade e rotina organizada de suplementação.'
    ],
    use: 'Consumir 1 comprimido ao dia, conforme a recomendação do produto.',
    ingredients: 'Blend de vitaminas, minerais, antiumectantes e estabilizantes conforme especificação do rótulo.',
    comments: [
      ['Marina L.', 'Compra verificada', 'A tabela nutricional ficou excelente. Dá para visualizar tudo sem esforço.'],
      ['Diego F.', 'Compra verificada', 'Produto bem apresentado e com informações completas para a compra.'],
      ['Patrícia A.', 'Compra verificada', 'Gostei da organização por benefícios e da clareza do modo de uso.']
    ]
  },
  termogenico: {
    id: 'termogenico',
    name: 'Termogênico 200mg',
    category: 'Termogênico',
    tag: 'Definição',
    price: 89.90,
    rating: '4.7',
    reviews: 11,
    image: 'assets/termogenico.png',
    emoji: '🔥',
    description: 'Termogênico com cafeína para apoiar energia, foco e intensidade em fases de definição e treinos exigentes.',
    benefits: [
      '200 mg de cafeína por cápsula.',
      'Indicado para foco e energia antes do treino.',
      'Página detalha recomendação de uso e principais cuidados.',
      'Visual limpo com leitura rápida das informações essenciais.'
    ],
    use: 'Ingerir 1 comprimido ao dia, cerca de 1 hora antes do exercício.',
    ingredients: 'Amido de milho, cafeína, gelatina, dióxido de silício e corantes permitidos.',
    comments: [
      ['Henrique D.', 'Compra verificada', 'A descrição está objetiva e ajuda muito na hora de decidir.'],
      ['Larissa M.', 'Compra verificada', 'Gostei do destaque dado à cafeína e ao modo de uso.'],
      ['Pedro V.', 'Compra verificada', 'Checkout simples e navegação fluida entre os produtos.']
    ]
  },
  voidx: {
    id: 'voidx',
    name: 'VOID-X Pré-treino',
    category: 'Pré-treino',
    tag: 'Explosão',
    price: 119.90,
    rating: '4.8',
    reviews: 16,
    image: 'assets/voidx.png',
    emoji: '⚡',
    description: 'Pré-treino com proposta intensa para foco, energia e desempenho antes dos treinos mais pesados.',
    benefits: [
      'Combinação com creatina, beta-alanina, taurina, BCAA e cafeína.',
      'Perfil voltado para energia, foco e performance.',
      'Tabela nutricional completa com vitaminas, minerais e aminoácidos.',
      'Página com apresentação premium e leitura bem organizada.'
    ],
    use: 'Dissolver 10 g (2 dosadores) em 240 ml de água, preferencialmente gelada, e consumir 1 porção ao dia.',
    ingredients: 'Creatina, beta-alanina, L-arginina, L-leucina, L-valina, L-isoleucina, taurina, cafeína e demais componentes da fórmula.',
    comments: [
      ['Arthur N.', 'Compra verificada', 'Visual forte e produto muito bem apresentado. Passa sensação de marca premium.'],
      ['Bianca S.', 'Compra verificada', 'A combinação de vídeo, imagem do produto e tabela nutricional ficou excelente.'],
      ['Caio M.', 'Compra verificada', 'A página ficou muito profissional e fácil de navegar.']
    ]
  },
  whey: {
    id: 'whey',
    name: 'Whey Protein 80%',
    category: 'Whey Protein',
    tag: 'Proteína',
    price: 139.90,
    rating: '4.9',
    reviews: 24,
    image: 'assets/whey.png',
    emoji: '🥛',
    description: 'Proteína concentrada para complementar a ingestão diária, apoiar recuperação muscular e rotina pós-treino.',
    benefits: [
      '24 g de proteína por porção.',
      'Perfil completo de aminoácidos com destaque para BCAA naturalmente presentes.',
      'Boa opção para recuperação muscular e suporte ao consumo diário de proteínas.',
      'Página inspirada em e-commerce real, com avaliação, preço e checkout.'
    ],
    use: 'Dissolver 30 g (2 dosadores) em 200 ml de água, preferencialmente gelada, e consumir 1 porção ao dia.',
    ingredients: 'Proteína de soro do leite concentrada e emulsificante lecitina.',
    comments: [
      ['Renato M.', 'Compra verificada', 'A tabela nutricional ficou muito fiel. Isso fez diferença na apresentação do produto.'],
      ['Eduarda S.', 'Compra verificada', 'Gostei dos benefícios listados e da leitura fácil das informações do whey.'],
      ['Bruno K.', 'Compra verificada', 'Site rápido, bonito e com aparência profissional do começo ao fim.']
    ]
  }
};

const NUTRITION_DATA = {
  bcaa: {
    title: 'TABELA NUTRICIONAL',
    servings: 'Porções por embalagem: 30',
    portion: 'Porção: 2,46 g (4 cápsulas)',
    columns: ['2,46 g', '%VD*'],
    rows: [
      ['Valor energético (kcal)', '9', '0'],
      ['Proteínas (g)', '0', '0'],
      ['L-Isoleucina (mg)', '500', ''],
      ['L-Leucina (mg)', '1000', ''],
      ['L-Valina (mg)', '500', '']
    ],
    note: 'Não contém quantidades significativas de carboidratos, açúcares totais, açúcares adicionados, gorduras totais, gorduras saturadas, gorduras trans, fibras alimentares e sódio.',
    footnote: '*Percentual de valores diários fornecidos pela porção.',
    sideTitle: '',
    sideParagraphs: [
      '<strong>INGREDIENTES:</strong> L-Leucina, L-Isoleucina, L-Valina, estabilizante gelatina e corantes dióxido de titânio, carmoisina e amarelo tartrazina. <strong>NÃO CONTÉM GLÚTEN.</strong>',
      'Produto indicado para o grupo populacional ≥ 19 anos. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.',
      '<strong>INSTRUÇÕES DE CONSERVAÇÃO:</strong> conservar ao abrigo da luz, do calor e da umidade. Após aberto, manter em local seco e arejado. Consumir em até 60 dias. Após o consumo, manter a embalagem bem fechada.',
      'Este produto não deve ser consumido por gestantes, lactantes e crianças.',
      '<strong>RECOMENDAÇÃO DE CONSUMO:</strong> consumir 4 cápsulas ao dia.'
    ]
  },
  creatina: {
    title: 'TABELA NUTRICIONAL',
    servings: 'Porções por embalagem: 50',
    portion: 'Porção: 5 g (4 dosadores)',
    columns: ['5 g', '%VD*'],
    rows: [
      ['Creatina (mg)', '5000', '']
    ],
    note: 'Não contém quantidades significativas de valor energético, carboidratos, açúcares totais, açúcares adicionados, proteínas, gorduras totais, gorduras saturadas, gorduras trans, fibras alimentares e sódio.',
    footnote: '*Percentual de valores diários fornecidos pela porção.',
    sideTitle: '',
    sideParagraphs: [
      '<strong>Ingredientes:</strong> Creatina monohidratada. <strong>NÃO CONTÉM GLÚTEN.</strong>',
      '<strong>RECOMENDAÇÃO DE CONSUMO:</strong> Consumir 1 porção ao dia.',
      '<strong>SUGESTÃO DE PREPARO:</strong> Dissolver 5 g (4 dosadores) do pó no líquido de sua preferência.',
      'É enviado um scoop como brinde, conforme disponibilidade em estoque.',
      'Este produto não deve ser consumido por gestantes, lactantes e crianças.',
      'Produto indicado para o grupo populacional ≥ 19 anos. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.',
      '<strong>INSTRUÇÕES DE CONSERVAÇÃO:</strong> Conservar ao abrigo da luz, do calor e da umidade. Após aberto, consumir em até 150 dias. Após o consumo, manter a embalagem devidamente fechada.',
      '<strong>Atenção:</strong> A creatina possui característica higroscópica, que é a capacidade de absorver água/umidade. Dessa forma, o produto pode empedrar/empelotar sem alterar a qualidade ou o resultado do produto. O consumidor poderá observar o produto empedrado ao receber ou ao longo do tempo de uso.',
      'Em caso de dúvidas sobre este produto, consulte o médico ou nutricionista.'
    ]
  },
  multivitaminico: {
    title: 'TABELA NUTRICIONAL',
    servings: 'Porções por embalagem: 120',
    portion: 'Porção: 1,2 g (1 comprimido)',
    columns: ['1,2 g', '%VD*'],
    rows: [
      ['Valor energético (kcal)', '0', '0'],
      ['Vitamina A (µg)', '1200', '150'],
      ['Vitamina D (µg)', '50', '333'],
      ['Vitamina E (mg)', '20', '133'],
      ['Vitamina K (µg)', '130', '108'],
      ['Vitamina C (mg)', '90', '90'],
      ['Vitamina B1 (mg)', '2', '168'],
      ['Vitamina B2 (mg)', '2,7', '228'],
      ['Niacina (mg)', '20', '133'],
      ['Ácido pantotênico (mg)', '5,6', '113'],
      ['Vitamina B6 (mg)', '30', '2308'],
      ['Biotina (µg)', '45', '150'],
      ['Ácido fólico (µg)', '1281', '320'],
      ['Vitamina B12 (µg)', '9,9', '414'],
      ['Cobre (µg)', '1500', '167'],
      ['Cromo (µg)', '250', '714'],
      ['Ferro (mg)', '28', '200'],
      ['Iodo (µg)', '100', '67'],
      ['Magnésio (mg)', '260', '62'],
      ['Manganês (mg)', '1,6', '53'],
      ['Molibdênio (µg)', '90', '200'],
      ['Selênio (µg)', '150', '250'],
      ['Zinco (mg)', '20', '182']
    ],
    note: 'Não contém quantidades significativas de carboidratos, açúcares totais, açúcares adicionados, proteínas, gorduras totais, gorduras saturadas, gorduras trans, fibras alimentares e sódio.',
    footnote: '*Percentual de valores diários fornecidos pela porção.',
    sideTitle: '',
    sideParagraphs: [
      '<strong>Ingredientes:</strong> Óxido de magnésio, ácido ascórbico, fumarato ferroso, acetato de DL-alfa-tocoferol, fosfato de piridoxal, bisglicinato de magnésio, óxido de zinco, colecalciferol, nicotinamida, bisglicinato ferroso, L-selenometionina, acetato de retinol, bisglicinato de manganês, bisglicinato de zinco, bisglicinato de cobre, D-pantotenato de cálcio, piridoxina-5-fosfato de sódio, fitomenadiona, tiamina mononitrato, picolinato de cromo, L-metilfolato de cálcio, molibdato de sódio, iodeto de potássio, D-biotina, metilcobalamina, estabilizantes carbonato de cálcio e croscarmelose sódica, glaceantes hidroxipropilmetilcelulose e polietilenoglicol, antiumectantes dióxido de silício e estearato de magnésio e corantes dióxido de titânio e amarelo crepúsculo FCF. <strong>NÃO CONTÉM GLÚTEN.</strong>',
      '<strong>Recomendação de consumo:</strong> Consumir 1 comprimido ao dia.',
      'Produto indicado para o grupo populacional ≥ 19 anos. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.',
      '<strong>Instruções de conservação:</strong> Conservar ao abrigo da luz, do calor e da umidade. Após aberto, manter em local seco e arejado e consumir em até 150 dias. Após o consumo, manter a embalagem bem fechada.'
    ],
    alertTitle: 'ADVERTÊNCIA',
    alertText: 'Este produto é destinado para o público maior de 19 anos. Consulte sempre um nutricionista antes de iniciar o consumo deste produto.'
  },
  termogenico: {
    title: 'TABELA NUTRICIONAL',
    servings: 'Porções por embalagem: 60',
    portion: 'Porção: 0,735 g (1 cápsula)',
    columns: ['0,735 g', '%VD*'],
    rows: [
      ['Valor energético (kcal)', '0', '0'],
      ['Cafeína (mg)', '200', '0']
    ],
    note: 'Não contém quantidades significativas de carboidratos, açúcares totais, açúcares adicionados, proteínas, gorduras totais, gorduras saturadas, gorduras trans, fibras alimentares e sódio.',
    footnote: '*Percentual de valores diários fornecidos pela porção.',
    sideTitle: '',
    sideParagraphs: [
      '<strong>INGREDIENTES:</strong> Amido de milho, cafeína, estabilizante gelatina, antiumectante dióxido de silício e corantes azul brilhante FCF, tartrazina e vermelho alura Ac. <strong>NÃO CONTÉM GLÚTEN.</strong>',
      '<strong>RECOMENDAÇÃO DE CONSUMO:</strong> Ingerir 1 comprimido ao dia, 1 hora antes do exercício. Recomenda-se a dose diária de 400 mg exclusivamente para atletas, desde que a dose individual não ultrapasse 200 mg.',
      'Este produto não deve ser consumido por gestantes, lactantes e crianças.',
      'Produto indicado para o grupo populacional ≥ 19 anos. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.',
      '<strong>INSTRUÇÕES DE CONSERVAÇÃO:</strong> Conservar ao abrigo da luz, do calor e da umidade. Após aberto, manter em local seco e arejado e consumir em até 150 dias. Após o consumo, manter a embalagem bem fechada.'
    ]
  },
  voidx: {
    title: 'TABELA NUTRICIONAL',
    selectorLabel: 'Selecione a tabela nutricional por sabor:',
    selectorValue: 'Limão',
    servings: 'Porções por embalagem: 30',
    portion: 'Porção: 10 g (2 dosadores)',
    columns: ['10 g', '%VD*'],
    rows: [
      ['Valor energético (kcal)', '38', '2'],
      ['Carboidratos (g)', '1', '0'],
      ['Açúcares totais (g)', '0', ''],
      ['Açúcares adicionados (g)', '0', '0'],
      ['Proteínas (g)', '0', '0'],
      ['Beta-alanina (g)', '2', ''],
      ['L-Arginina (mg)', '1000', ''],
      ['L-Isoleucina (mg)', '500', ''],
      ['L-Leucina (mg)', '1000', ''],
      ['L-Valina (mg)', '500', ''],
      ['Sódio (mg)', '1', '0'],
      ['Vitamina C (mg)', '100', '100'],
      ['Ácido pantotênico (mg)', '5', '100'],
      ['Vitamina B6 (mg)', '1,3', '100'],
      ['Cromo (µg)', '35', '100'],
      ['Taurina (mg)', '500', ''],
      ['Cafeína (mg)', '200', ''],
      ['Creatina (mg)', '3000', '']
    ],
    note: 'Não contém quantidades significativas de gorduras totais, gorduras saturadas, gorduras trans e fibras alimentares.',
    footnote: '*Percentual de valores diários fornecidos pela porção.',
    sideTitle: 'LIMÃO',
    sideParagraphs: [
      '<strong>Ingredientes:</strong> creatina, beta-alanina, L-arginina, L-leucina, L-valina, L-isoleucina, taurina, cafeína, amido, maltodextrina, ácido ascórbico, D-pantotenato de cálcio, cloridrato de piridoxina, picolinato de cromo, aromatizante, acidulante ácido cítrico, edulcorante sucralose, corante sais de potássio e sódio de complexos cúpricos de clorofilinas e antiumectante dióxido de silício. <strong>NÃO CONTÉM GLÚTEN.</strong>',
      '<strong>RECOMENDAÇÃO DE CONSUMO:</strong> consumir 1 porção ao dia. Consumir 40 ml a cada 2 horas. O consumo de beta-alanina deve ocorrer na quantidade diária máxima de 2 g, em doses máximas de 300 mg, com intervalo de duas horas entre as doses.',
      '<strong>SUGESTÃO DE PREPARO:</strong> dissolver 10 g (2 dosadores) do pó em 240 ml de água, preferencialmente gelada. O tipo e a quantidade de líquido são sugestões e ficam a critério do consumidor.',
      'É enviado um scoop como brinde, conforme disponibilidade em estoque.',
      'Este produto não deve ser consumido por gestantes, lactantes e crianças.',
      'Produto indicado para o grupo populacional ≥ 19 anos. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.',
      '<strong>INSTRUÇÕES DE CONSERVAÇÃO:</strong> conservar ao abrigo da luz, calor e umidade. Manter em temperatura ambiente. Após aberto, consumir em até 40 dias. Após o consumo, manter a embalagem devidamente fechada.'
    ]
  },
  whey: {
    title: 'TABELA NUTRICIONAL',
    servings: 'Porções por embalagem: Cerca de 33',
    portion: 'Porção: 30 g (2 dosadores)',
    columns: ['30 g', '%VD*'],
    rows: [
      ['Valor energético (kcal)', '124', '6'],
      ['Carboidratos (g)', '2,3', '1'],
      ['Açúcares totais (g)', '1,7', ''],
      ['Açúcares adicionados (g)', '0', '0'],
      ['Proteínas (g)', '24', '48'],
      ['L-Alanina (mg)', '1206', ''],
      ['Arginina (mg)', '642', ''],
      ['Aspartato (mg)', '2730', ''],
      ['L-Cisteína (mg)', '759', ''],
      ['Ácido L-Glutâmico (mg)', '4380', ''],
      ['Glicina (mg)', '474', ''],
      ['L-Histidina (mg)', '468', ''],
      ['L-Isoleucina (mg)', '1542', ''],
      ['L-Leucina (mg)', '2592', ''],
      ['Lisina (mg)', '2193', ''],
      ['L-Metionina (mg)', '687', ''],
      ['L-Fenilalanina (mg)', '798', ''],
      ['L-Prolina (mg)', '1464', ''],
      ['L-Serina (mg)', '1305', ''],
      ['L-Treonina (mg)', '1707', ''],
      ['Triptofano (mg)', '312', ''],
      ['L-Tirosina (mg)', '753', ''],
      ['L-Valina (mg)', '1479', ''],
      ['Gorduras totais (g)', '2,1', '3'],
      ['Gorduras saturadas (g)', '0,8', '4'],
      ['Gorduras trans (g)', '0', '0'],
      ['Fibras alimentares (g)', '0', '0'],
      ['Sódio (mg)', '47', '2']
    ],
    footnote: '*Percentual de valores diários fornecidos pela porção.',
    sideTitle: 'NATURAL',
    sideParagraphs: [
      '<strong>Ingredientes:</strong> proteína de soro do leite concentrada e emulsificante lecitina.',
      '<strong>ALÉRGICOS:</strong> CONTÉM DERIVADOS DE SOJA E LEITE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN.',
      '<strong>Recomendação de consumo:</strong> Consumir 1 porção ao dia.',
      '<strong>Sugestão de preparo:</strong> Dissolver 30 g (2 dosadores) do pó em 200 mL de água, preferencialmente gelada. O tipo e a quantidade de líquido são sugestões e ficam a critério do consumidor.',
      'É enviado um scoop como brinde, conforme disponibilidade em estoque.',
      'Produto indicado para o grupo populacional ≥ 19 anos. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.',
      '<strong>Instruções de conservação:</strong> Conservar ao abrigo da luz, do calor e da umidade. Após aberto, consumir em até 60 dias. Após o consumo, manter a embalagem devidamente fechada.',
      'Em caso de dúvidas sobre este produto, consulte o médico ou nutricionista.'
    ],
    alertTitle: 'WHEY PROTEIN: CONTRA INDICAÇÕES',
    alertText: 'Este produto é derivado de leite. Pessoas com intolerância à lactose ou alergia às proteínas do leite não devem consumi-lo.'
  }
};

const themeToggle = document.querySelector('.theme-toggle');
const cartDrawer = document.querySelector('.cart-drawer');
const closeCart = document.querySelector('.close-cart');
const cartIconBtn = document.querySelector('.cart-toggle-btn');
const cartBubble = document.querySelector('.cart-bubble');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total strong');
const finalizarBtn = document.querySelector('.btn.primary.full');
const cart = [];
let currentProduct = null;

function formatBRL(value) {
  return `R$ ${Number(value).toFixed(2).replace('.', ',')}`;
}

function applyTheme(theme) {
  const normalized = theme === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', normalized);
  localStorage.setItem('irondark_theme', normalized);
  if (themeToggle) {
    const currentLabel = normalized === 'light' ? 'Light' : 'Dark';
    themeToggle.setAttribute('aria-label', `Tema atual: ${currentLabel}. Clique para alternar.`);
    const label = themeToggle.querySelector('.theme-toggle-text');
    if (label) label.textContent = currentLabel;
  }
}

applyTheme('dark');


function loadCartFromStorage() {
  const stored = sessionStorage.getItem('irondark_cart');
  if (!stored) return;
  try {
    const savedItems = JSON.parse(stored);
    if (Array.isArray(savedItems)) {
      savedItems.forEach((item) => {
        cart.push({
          name: item.name,
          price: Number(item.price) || 0,
          qty: item.qty || 1,
          emoji: item.emoji || '📦'
        });
      });
    }
  } catch (error) {
    console.warn('Não foi possível carregar o carrinho:', error);
  }
}

function updateCart() {
  if (!cartItems || !cartTotal) return;
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const qty = item.qty || 1;
    total += item.price * qty;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-info">
        <div>${item.name}</div>
        <div style="font-size: 0.85rem; color: var(--muted);">${qty > 1 ? `x${qty}` : ''}</div>
      </div>
      <div class="cart-item-price">${formatBRL(item.price * qty)}</div>
      <button class="cart-remove-btn" data-index="${index}">Remover</button>
    `;
    cartItems.appendChild(row);
    row.querySelector('.cart-remove-btn')?.addEventListener('click', () => {
      cart.splice(index, 1);
      updateCart();
    });
  });

  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="color: var(--muted); padding: 20px 0; text-align: center;">Seu carrinho está vazio.</p>';
  }

  cartTotal.textContent = formatBRL(total);
  sessionStorage.setItem('irondark_cart', JSON.stringify(cart.map(item => ({
    name: item.name,
    price: item.price,
    qty: item.qty || 1,
    emoji: item.emoji || '📦'
  }))));

  if (cartBubble) {
    const count = cart.reduce((s, it) => s + (it.qty || 1), 0);
    cartBubble.textContent = count;
    cartBubble.style.display = count > 0 ? 'inline-flex' : 'none';
  }
}

function addCurrentProductToCart() {
  if (!currentProduct) return;
  const existingItem = cart.find((item) => item.name === currentProduct.name);
  if (existingItem) existingItem.qty = (existingItem.qty || 1) + 1;
  else cart.push({ name: currentProduct.name, price: currentProduct.price, qty: 1, emoji: currentProduct.emoji });
  updateCart();
  cartDrawer?.classList.add('open');
  cartDrawer?.setAttribute('aria-hidden', 'false');
}

function renderNutritionSheet(productId) {
  const data = NUTRITION_DATA[productId];
  const container = document.getElementById('nutrition-content');
  if (!data || !container) return;

  const selectorMarkup = data.selectorLabel ? `
    <div class="nutrition-selector-row">
      <label>${data.selectorLabel}</label>
      <div class="nutrition-selector-value">${data.selectorValue}</div>
    </div>` : '';

  const rows = data.rows.map(([label, value, vd]) => `
    <tr>
      <td>${label}</td>
      <td>${value}</td>
      <td>${vd || ''}</td>
    </tr>`).join('');

  const noteRow = data.note ? `<tr class="nutrition-note-row"><td colspan="3">${data.note}</td></tr>` : '';
  const alertMarkup = data.alertTitle ? `
    <div class="nutrition-alert-box">
      <div class="nutrition-alert-icon">⚠</div>
      <div>
        <strong>${data.alertTitle}</strong>
        <p>${data.alertText}</p>
      </div>
    </div>` : '';

  container.innerHTML = `
    ${selectorMarkup}
    <div class="nutrition-sheet">
      <div class="nutrition-sheet-left">
        <table class="nutrition-html-table">
          <thead>
            <tr><th colspan="3">INFORMAÇÃO NUTRICIONAL</th></tr>
          </thead>
          <tbody>
            <tr class="nutrition-serving-row"><td colspan="3">${data.servings}<br>${data.portion}</td></tr>
            <tr class="nutrition-col-header"><td></td><td>${data.columns[0]}</td><td>${data.columns[1]}</td></tr>
            ${rows}
            ${noteRow}
            <tr class="nutrition-foot-row"><td colspan="3">${data.footnote || ''}</td></tr>
          </tbody>
        </table>
      </div>
      <div class="nutrition-sheet-right">
        ${data.sideTitle ? `<h3>${data.sideTitle}</h3>` : ''}
        ${data.sideParagraphs.map((p) => `<p>${p}</p>`).join('')}
        ${alertMarkup}
      </div>
    </div>
  `;
}

function renderProduct(product) {
  currentProduct = product;
  document.title = `IRONDARK V7 | ${product.name}`;

  document.getElementById('detail-image').src = product.image;
  document.getElementById('detail-image').alt = product.name;
  document.getElementById('detail-category').textContent = product.category;
  document.getElementById('detail-title').textContent = product.name;
  document.getElementById('detail-description').textContent = product.description;
  document.getElementById('detail-tag').textContent = product.tag;
  document.getElementById('detail-rating').textContent = `★★★★★ ${product.rating} (${product.reviews})`;
  document.getElementById('detail-price').textContent = formatBRL(product.price);
  document.getElementById('detail-installment').textContent = `No boleto ou PIX. No cartão em até 6x de ${formatBRL((product.price / 6))} sem juros.`;
  document.getElementById('nutrition-title').textContent = `Tabela nutricional — ${product.name}`;

  const benefits = document.getElementById('detail-benefits');
  benefits.innerHTML = product.benefits.map((item) => `<li>${item}</li>`).join('');
  document.getElementById('detail-use').textContent = product.use;
  document.getElementById('detail-ingredients').textContent = product.ingredients;

  const feedbacks = document.getElementById('product-feedbacks');
  feedbacks.innerHTML = product.comments.map(([name, type, text]) => {
    const initials = name.split(' ').map(part => part[0]).join('').slice(0,2).toUpperCase();
    return `
      <article class="feedback-card reveal">
        <div class="feedback-top"><span class="avatar">${initials}</span><div><strong>${name}</strong><small>${type} · ${product.name}</small></div></div>
        <div class="rating-stars small">★★★★★</div>
        <p>${text}</p>
      </article>
    `;
  }).join('');

  renderNutritionSheet(product.id);
}

const params = new URLSearchParams(window.location.search);
const selectedId = params.get('id') || 'voidx';
renderProduct(PRODUCTS[selectedId] || PRODUCTS.voidx);

const addButton = document.getElementById('detail-add-cart');
if (addButton) addButton.addEventListener('click', addCurrentProductToCart);
if (cartIconBtn) cartIconBtn.addEventListener('click', () => {
  cartDrawer?.classList.add('open');
  cartDrawer?.setAttribute('aria-hidden', 'false');
});
if (closeCart) closeCart.addEventListener('click', () => {
  cartDrawer?.classList.remove('open');
  cartDrawer?.setAttribute('aria-hidden', 'true');
});
if (finalizarBtn) finalizarBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Adicione produtos ao carrinho antes de finalizar.');
    return;
  }
  sessionStorage.setItem('irondark_cart', JSON.stringify(cart));
  window.location.href = 'checkout.html';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
loadCartFromStorage();
updateCart();
