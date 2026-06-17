import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config({ override: true });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('.'));

const systemPrompt = `
Você é o Assistente IRONDARK, chatbot oficial de uma loja de suplementos voltada para alta performance e atendimento rápido ao cliente.

Objetivo:
- Responder dúvidas dos visitantes sobre os produtos, entrega, pagamento e navegação no site.
- Usar linguagem curta, educada, comercial e fácil de entender.
- Nunca afirmar cura, tratamento médico ou resultado garantido.
- Quando o assunto for saúde, doença, uso de estimulantes, restrições ou dosagem, oriente procurar médico ou nutricionista.
- Responder sempre em português do Brasil.

Produtos da loja:
1. IRONDARK BCAA 2:1:1, 120 cápsulas: recuperação muscular e resistência.
2. IRONDARK Creatina Monohidratada, 250g: força, potência e desempenho em treinos intensos.
3. IRONDARK Multivitamínico Ultra, 120 comprimidos: vitaminas e minerais para complementar a alimentação.
4. IRONDARK Termogênico 200mg, 120 cápsulas: energia e foco, com cuidado para pessoas sensíveis a estimulantes.
5. IRONDARK VOID-X Pré-Treino, 500g: energia, foco e intensidade antes do treino.
6. IRONDARK Whey Protein 80%, 1kg: proteína para recuperação e apoio ao ganho de massa muscular.

Informações comerciais:
- Pagamento: PIX, cartão e boleto.
- Entrega: prazo e frete calculados conforme a região do cliente.
- Site: estrutura moderna com HTML, CSS, JavaScript e backend Node.js com API Gemini.
`;

function fallbackReply(message) {
  const lower = String(message || '').toLowerCase();
  if (lower.includes('creatina')) return 'A creatina IRONDARK é indicada para força, potência e desempenho em treinos intensos. Para dosagem ideal, consulte um nutricionista.';
  if (lower.includes('whey') || lower.includes('proteína') || lower.includes('proteina')) return 'O Whey Protein 80% da IRONDARK auxilia na recuperação muscular e no consumo diário de proteínas.';
  if (lower.includes('void') || lower.includes('pré') || lower.includes('pre')) return 'O VOID-X é o pré-treino da IRONDARK, criado para energia, foco e intensidade antes do treino.';
  if (lower.includes('bcaa')) return 'O BCAA 2:1:1 da IRONDARK é voltado para suporte à recuperação e resistência em treinos frequentes.';
  if (lower.includes('termog')) return 'O Termogênico IRONDARK tem proposta de energia e foco. Pessoas sensíveis a estimulantes devem procurar orientação profissional.';
  if (lower.includes('multi') || lower.includes('vitamina')) return 'O Multivitamínico Ultra ajuda a complementar vitaminas e minerais na rotina alimentar.';
  if (lower.includes('pagamento') || lower.includes('pix') || lower.includes('cartão') || lower.includes('cartao')) return 'A loja trabalha com PIX, cartão e boleto.';
  if (lower.includes('entrega') || lower.includes('frete')) return 'O sistema calcula prazo e frete de acordo com a região do cliente.';
  return 'Posso ajudar com dúvidas sobre whey, creatina, BCAA, multivitamínico, termogênico, pré-treino, pagamento ou entrega.';
}

app.post('/api/chat', async (req, res) => {
  const message = String(req.body?.message || '').trim();

  try {
    if (!message) {
      return res.status(400).json({ reply: 'Digite uma pergunta para o Assistente IRONDARK.' });
    }

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY.includes('COLE_SUA_CHAVE')) {
      return res.json({ reply: fallbackReply(message) });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL || 'gemini-1.5-flash'
    });

    const prompt = `${systemPrompt}\n\nPergunta do cliente: ${message}`;
    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    return res.json({ reply: reply || fallbackReply(message) });
  } catch (error) {
    console.error('Erro no chatbot Gemini:', error.message);
    return res.json({ reply: fallbackReply(message) });
  }
});

app.listen(port, () => {
  console.log(`IRONDARK rodando em http://localhost:${port}`);
  console.log('Chatbot configurado para Gemini API.');
});
