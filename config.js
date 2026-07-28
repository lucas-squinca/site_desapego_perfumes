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
    brand: "Natura", name: "Kaiak Aventura", type: "Deo Parfum · 100ml", fill: 40, price: "90",
    tag: "Aquático", category: ["Feminino"],
    description: "Um aquático fresco e leve, pensado para o dia a dia e atividades ao ar livre. Simples e fácil de usar.",
    notes: { topo: ["Notas marinhas", "Toranja"], coracao: ["Flores brancas", "Frutas"], fundo: ["Almíscar", "Madeiras claras"] },
    accords: [ {name:"Aquático", value:75}, {name:"Frutado", value:40}, {name:"Floral", value:30}, {name:"Almiscarado", value:35} ],
    occasion: "Dia a dia, esportes", season: "Primavera/Verão", longevity: "3-5 horas", sillage: "Leve", images: []
  },
  {
    brand: "Le Labo", name: "Santal 33", type: "Decant · 5ml", fill: 100, price: "120",
    tag: "Nichado", category: ["Nichado", "Unissex"],
    description: "Amadeirado seco e levemente fumado, famoso pela assinatura olfativa marcante e unissex. Um clássico moderno de nicho.",
    notes: { topo: ["Cardamomo", "Íris", "Violeta"], coracao: ["Sândalo", "Couro"], fundo: ["Cedro", "Âmbar", "Almíscar"] },
    accords: [ {name:"Amadeirado", value:85}, {name:"Couro", value:60}, {name:"Especiado", value:40}, {name:"Almiscarado", value:45} ],
    occasion: "Qualquer ocasião", season: "Todas as estações", longevity: "6-8 horas", sillage: "Moderada", images: []
  },
  {
    brand: "Ferrari", name: "Ferrari Black", type: "Eau de Toilette · 125ml", fill: 60, price: "70",
    tag: "Amadeirado", category: ["Masculino"],
    description: "Amadeirado aromático simples e clássico, com boa relação custo-benefício. Ideal para o uso casual do dia a dia.",
    notes: { topo: ["Bergamota", "Limão"], coracao: ["Lavanda", "Gerânio"], fundo: ["Sândalo", "Âmbar", "Almíscar"] },
    accords: [ {name:"Amadeirado", value:60}, {name:"Aromático", value:55}, {name:"Cítrico", value:45}, {name:"Almiscarado", value:30} ],
    occasion: "Dia a dia", season: "Todas as estações", longevity: "4-6 horas", sillage: "Leve a moderada", images: []
  },
];