// Arquivo de atualização do número de telefone e perfumes disponíveis:

const WHATSAPP_NUMBER = "5518996920515";

const perfumes = [
  {
    brand: "We Pink", name: "VF Tropical", type: "Deo Colônia · 75ml", fill: 100, price: "85",
    tag: "Oriental Floral", category: ["Feminino"],
    description: "Perfume intenso para assinatura feminina e sofisticada com destaque para as notas de baunilha, amêndoa e tuberosa.",
    notes: { topo: ["Amêndoa", "Limão Siciliano", "Amora", "Amora", "Mandarina"], coracao: ["Jasmim Sambac", "Tuberosa", "Cananga", "Rosa"], fundo: ["Baunilha", "Almíscar", "íris Branco", "Liatris", "Néctar"] },
    accords: [ {name:"Amêndoa", value:90}, {name:"Frutado", value:80}, {name:"Floral Branco", value:75}, {name:"Baunilha", value:65} ],
    occasion: "Assinatura", season: "Outono/Inverno/Privamera", longevity: "9 horas", sillage: "Forte", images: ["images/vf_tropical.avif"]
  },
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
    brand: "Lattafa", name: "Ajwaa", type: "Mini Frasco · 20ml (SEM CAIXA)", fill: 100, price: "55",
    tag: "Unissex", category: ["Unissex"],
    description: "Perfume doce ambarado compartilhável.",
    notes: { topo: ["Tâmaras", "Elemi", "Limão", "Bergamota"], coracao: ["Alcaçuz", "Mirra"], fundo: ["Benjoim", "Incenso"] },
    accords: [ {name:"Âmbar", value:85}, {name:"Doce", value:75}, {name:"Balsâmico", value:60}, {name:"Picante Suave", value:45} ],
    occasion: "Eventos descontraídos, dia-a-dia ameno", season: "Primavera/Outono", longevity: "6-7 horas", sillage: "Moderada", images: ["images/ajwaa.avif"]
  },
  {
    brand: "Lattafa", name: "Al'Qiam Gold", type: "Mini Frasco · 20ml (SEM CAIXA)", fill: 100, price: "55",
    tag: "Amadeirado encouraçado", category: ["Masculino"],
    description: "Amadeirado denso com couro para ocasiões especiais.",
    notes: { topo: ["Framboesa", "Açafrão"], coracao: ["Couro", "Patchouli"], fundo: ["Oud", "Âmbar", "Benjoim", "Madeira Guaiac", "Vetiver"] },
    accords: [ {name:"Couro", value:100}, {name:"Oud", value:80}, {name:"Especiado Quente", value:78}, {name:"Âmbar", value:70} ],
    occasion: "Ocasiões especiais", season: "Outono/Inverno", longevity: "9+ horas", sillage: "Moderada a Intensa", images: ["images/al_qiam.avif"]
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
    brand: "Lattafa", name: "Art Of Arabia III", type: "Mini Frasco · 20ml", fill: 100, price: "55",
    tag: "Aromático Especiado", category: ["Masculino"],
    description: "Perfume aromático adocicado com um toque frutal das tâmaras, junto ao lado resinoso da Mirra",
    notes: { topo: ["Olibano", "Davana", "Bergamota"], coracao: ["Tâmaras", "Tabaco", "Sândalo", "Tuberosa"], fundo: ["Mirra", "Baunilha", "Fava Tonka", "Ládano", "Patchouli"] },
    accords: [ {name:"Âmbar", value:95}, {name:"Doce", value:80}, {name:"Baunilha", value:50}, {name:"Especiado Quente", value:45} ],
    occasion: "Assinatura para dias frios", season: "Outono/Inverno", longevity: "7 horas", sillage: "Moderada", images: ["images/art_of_arabia_3.avif"]
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
    brand: "Lattafa", name: "Brioche Vanille", type: "Mini Frasco · 20ml", fill: 100, price: "55",
    tag: "Oriental Abaunilhado", category: ["Feminno"],
    description: "Perfume doce abaunilhado com cheiro de massa de bolo de baunilha assim que saiu do forno. Quente, doce e cremoso.",
    notes: { topo: ["Brioche", "Bergamota", "Frésia"], coracao: ["Bálsamo de Abeto", "Heliotrópio"], fundo: ["Baunilha", "Benjoim", "Pralinê"] },
    accords: [ {name:"Baunilha", value:100}, {name:"Doce", value:85}, {name:"Âmbar", value:55}, {name:"Fresco Especiado", value:50} ],
    occasion: "Ocasiões especiais", season: "Outono/Inverno", longevity: "9+ horas", sillage: "Moderada a Intensa", images: ["images/brioche_vanille.avif"]
  },
];