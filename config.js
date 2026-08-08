// Arquivo de atualização do número de telefone e perfumes disponíveis:

const WHATSAPP_NUMBER = "5518996920515";

const perfumes = [
  {
    brand: "Lattafa", name: "Khamrah", type: "Eau de Parfum · 100ml", fill: 98, price: "160",
    tag: "Oriental Especiado", category: ["Unissex"],
    description: "Perfume doce, abaunilhado e recomendado para momentos à dois, no frio. Intenso com toque de tâmaras muito intenso.",
    notes: { topo: ["Canela", "Noz-moscada", "Bergamota"], coracao: ["Tâmaras", "Pralinê", "Tuberosa", "Mahonial"], fundo: ["Baunilha", "Fava Tonka", "Madeira de Âmbar", "Mirra", "Benjoim", "Akigalawood"] },
    accords: [ {name:"Doce", value:100}, {name:"Especiado Quente", value:75}, {name:"Baunilha", value:70}, {name:"Âmbar", value:60} ],
    occasion: "Saídas noturnas em clima frio", season: "Inverno", longevity: "8+ horas", sillage: "Moderada", images: ["images/khamrah.avif"]
  },
  {
    brand: "O Boticário", name: "Viagem Encantada", type: "Body Splash · 200ml", fill: 100, price: "100",
    tag: "Floral Frutado Gourmand", category: ["Feminino"],
    description: "Body Splash com boa fixação com destaque para as notas frutadas e cremosas.",
    notes: { topo: ["Pera", "Algodão Doce", "Bergamota"], coracao: ["Leite", "Pêssego", "Jasmim Sambac"], fundo: ["Pralinê", "Sândalo", "Ambroxan"] },
    accords: [ {name:"Doce", value:85}, {name:"Frutado", value:40}, {name:"Lactônico", value:35}, {name:"Caramelo", value:30} ],
    occasion: "Assinatura", season: "Todas as Estações", longevity: "6 horas", sillage: "Moderada", images: ["images/viagem_encantada.avif"]
  },
  {
    brand: "O Boticário", name: "Botica 214 African Sunrize", type: "Deo Parfum · 90ml", fill: 90, price: "140",
    tag: "Amadeirado Aromático", category: ["Masculino"],
    description: "Amadeirado aromático com um toque de couro denso por conta da nota de camurça. Perfume Assinatura.",
    notes: { topo: ["Bagas de zimbro", "Bergamota", "Elemi"], coracao: ["Gerânio", "Sálvia", "Alecrim", "Murta"], fundo: ["Camurça", "Sândalo", "Patchouli"] },
    accords: [ {name:"Aromático", value:90}, {name:"Fresco Especiado", value:70}, {name:"Amadeirado", value:65}, {name:"Herbal", value:35} ],
    occasion: "Dia a dia, assinatura.", season: "Primavera/Verão/Outono", longevity: "7 horas", sillage: "Leve", images: ["images/214_african_sunrize.avif"]
  },
  {
    brand: "Phytoderm", name: "Are You in?", type: "Eau de Parfum - 90ml (SEM CAIXA)", fill: 95, price: "75",
    tag: "Amadeirado Aromático Intenso", category: ["Masculino"],
    description: "Amadeirado masculino com toque adocicado de baunilha.",
    notes: { topo: ["Cardamomo", "Olibano"], coracao: ["Tabaco", "Patchouli", "Vetiver"], fundo: ["Baunilha", "Couro", "Ladano", "Cedro", "Camurça"] },
    accords: [ {name:"Especiado Quente", value:95}, {name:"Amadeirado", value:80}, {name:"Âmbar", value:65}, {name:"Baunilha", value:45} ],
    occasion: "Ocasiões especiais", season: "Outono/Inverno", longevity: "10 horas", sillage: "Moderada a Intensa", images: ["images/are_you_in.avif"]
  },
  {
    brand: "Avon", name: "Black Essential Secret", type: "EDT - 100ml", fill: 100, price: "50",
    tag: "Aromático Frutado", category: ["Masculino"],
    description: "Aromático fresco para todas as ocasiões com leve frutado doce da maçã vermelha.",
    notes: { topo: ["Maçã Vermelha", "Toranja"], coracao: ["Lavanda", "Cardamomo"], fundo: ["Vetiver de Madagascar", "Fava Tonka", "Couro", "Heléboro"] },
    accords: [ {name:"Aromátco", value:90}, {name:"Especiado Quente", value:55}, {name:"Lavanda", value:53}, {name:"Frutado", value:40} ],
    occasion: "Assinatura", season: "Todas as Estações", longevity: "6 horas", sillage: "Intimista a Moderada", images: ["images/black_essential_secret.avif"]
  },
  {
    brand: "Eudora", name: "Club 6 Exclusive", type: "Deo Colônia", fill: 100, price: "85",
    tag: "Oriental Abaunilhado", category: ["Masculino"],
    description: "Perfume doce e quente com toque alcóolico de whisky, caramelo e o frutado do abacaxi em calda.",
    notes: { topo: ["Calda", "Abacaxi", "Pimenta Preta", "Maçã", "Toranja", "Sálvia"], coracao: ["Canela", "Lavanda", "Gerânio", "Flor de Laranjeira"], fundo: ["Caramelo", "Whisky", "Âmbar", "Cumarina", "Cedro", "Vetiver"] },
    accords: [ {name:"Baunilha", value:100}, {name:"Doce", value:85}, {name:"Âmbar", value:55}, {name:"Fresco Especiado", value:50} ],
    occasion: "Encontros / Ocasiões Especiais", season: "Outono/Inverno", longevity: "9 horas", sillage: "Moderada a Intensa", images: ["images/club6_exclusive.avif"]
  },
  {
    brand: "Eudora", name: "Club 6 Intenso", type: "Deo Colônia - 100ml", fill: 95, price: "90",
    tag: "Oriental Abaunilhado", category: ["Masculino"],
    description: "Perfume extremamente carregado nas especiarias quentes, como cardamomo, noz-moscada e canela com adocicado do camarelo. Elegante para assinatura no inverno.",
    notes: { topo: ["Abacaxi", "Cardamomo", "Limão", "Bergamota", "Açafrão"], coracao: ["Noz-moscada", "Canela", "Lavanda", "Gerânio"], fundo: ["Caramelo", "Couro", "Baunilha", "Cedro", "Âmbar"] },
    accords: [ {name:"Especiado Quente", value:90}, {name:"Doce", value:70}, {name:"Caramelo", value:60}, {name:"Fresco Especiado", value:50} ],
    occasion: "Ocasiões especiais / Assinatura", season: "Outono/Inverno", longevity: "7 horas", sillage: "Moderada", images: ["images/club6_intenso.avif"]
  },
  {
    brand: "Lattafa", name: "Confidential Private Gold", type: "Eau de Parfum - 100ml", fill: 100, price: "160",
    tag: "Chipre Frutado", category: ["Unissex"],
    description: "Perfume doce frutado fresco com pêssego, maracujá, pera e pêssego com uma vibe divertida para o dia a dia.",
    notes: { topo: ["Pêssego", "Maracujá", "Pera", "Framboesa", "Cássis"], coracao: ["Lírio-do-vale"], fundo: ["Almíscar", "Baunilha", "Patchouli", "Sândalo", "Heliotrópio"] },
    accords: [ {name:"Frutado", value:100}, {name:"Doce", value:70}, {name:"Atalcado", value:40}, {name:"Fresco", value:30} ],
    occasion: "Dia a dia / Assinatura", season: "Verão/Primavera/Outono", longevity: "8 horas", sillage: "Moderada", images: ["images/confidential_private_gold.avif"]
  }
];