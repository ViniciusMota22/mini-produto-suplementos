const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const cartDrawer = document.querySelector('.cart-drawer');
const closeCart = document.querySelector('.close-cart');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total strong');
const cartButtons = document.querySelectorAll('.cart-btn');
const contactForm = document.querySelector('.contact-form');
const chatToggle = document.querySelector('.chat-toggle');
const chatWindow = document.querySelector('.chat-window');
const chatClose = document.querySelector('.chat-close');
const chatForm = document.querySelector('.chat-form');
const chatInput = document.querySelector('.chat-form input');
const chatMessages = document.querySelector('.chat-messages');

const cartIconBtn = document.querySelector('.cart-toggle-btn');
const cartBubble = document.querySelector('.cart-bubble');
const loginLink = document.querySelector('.login-link');
const authModal = document.getElementById('auth-modal');
const themeToggle = document.querySelector('.theme-toggle');


// V6 — alternância light mode / dark mode
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


// Autenticação decorativa (modal sem backend)
function setAuthPanel(mode = 'login') {
  if (!authModal) return;
  authModal.querySelectorAll('.auth-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.authTab === mode);
  });
  authModal.querySelectorAll('.auth-panel').forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.authPanel === mode);
  });
}

function openAuth(mode = 'login') {
  if (!authModal) return;
  authModal.setAttribute('aria-hidden', 'false');
  setAuthPanel(mode);
}

function closeAuth() {
  if (!authModal) return;
  authModal.setAttribute('aria-hidden', 'true');
}

function showAuthFeedback(message) {
  const feedback = authModal?.querySelector('.auth-feedback');
  if (!feedback) return;
  feedback.textContent = message;
  feedback.classList.add('show');
  setTimeout(() => feedback.classList.remove('show'), 2600);
}

if (loginLink) {
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    openAuth('login');
  });
}

if (authModal) {
  authModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('auth-backdrop') || e.target.classList.contains('auth-close')) closeAuth();
    const tab = e.target.closest('[data-auth-tab]');
    if (tab) setAuthPanel(tab.dataset.authTab);
    if (e.target.classList.contains('auth-fake-login')) {
      const id = authModal.querySelector('#login-identifier')?.value.trim();
      const pass = authModal.querySelector('#login-pass')?.value.trim();
      if (!id || !pass) { showAuthFeedback('Preencha e-mail/CPF e senha para simular o login.'); return; }
      showAuthFeedback('Login realizado com sucesso. Bem-vindo à IRONDARK!');
      setTimeout(closeAuth, 1300);
    }
    if (e.target.classList.contains('auth-link-button')) showAuthFeedback('Enviamos as instruções de recuperação para o seu e-mail cadastrado.');
  });

  authModal.querySelector('[data-auth-panel="register"]')?.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const required = ['#reg-name', '#reg-email', '#reg-cpf', '#reg-pass'];
    const ok = required.every((selector) => authModal.querySelector(selector)?.value.trim());
    if (!ok) { showAuthFeedback('Preencha nome, e-mail, CPF e senha para concluir o cadastro.'); return; }
    showAuthFeedback('Cadastro realizado com sucesso. Sua conta foi criada!');
    setTimeout(closeAuth, 1300);
  });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAuth(); });
}


// Informações visuais de avaliação e preço estilo e-commerce
function formatBRL(value) {
  return `R$ ${Number(value).toFixed(2).replace('.', ',')}`;
}

document.querySelectorAll('.product-card').forEach((card, index) => {
  const info = card.querySelector('.product-info');
  const desc = info?.querySelector('p:not(.category)');
  const priceStrong = card.querySelector('.product-bottom strong');
  if (!info || !desc || !priceStrong || info.querySelector('.product-rating')) return;

  const price = Number(priceStrong.textContent.replace('R$', '').replace(',', '.').trim());
  const cardPrice = price / 0.90;
  const installment = cardPrice / 6;
  const reviews = [14, 18, 22, 11, 16, 24][index] || 14;

  const rating = document.createElement('div');
  rating.className = 'product-rating';
  rating.innerHTML = '★★★★★ <span>(' + reviews + ')</span>';

  const pricing = document.createElement('div');
  pricing.className = 'product-pricing';
  pricing.innerHTML = `
    <div class="from-label">A partir de:</div>
    <div><strong class="pix-price">${formatBRL(price)}</strong><span class="unit">(Cada)</span></div>
    <div class="pix-line">No boleto ou pix</div>
    <div class="card-line">ou a partir de ${formatBRL(cardPrice)} no cartão de crédito em até 6x de ${formatBRL(installment)} sem juros.</div>
  `;

  desc.insertAdjacentElement('afterend', pricing);
  desc.insertAdjacentElement('afterend', rating);
});

const cart = [];

function loadCartFromStorage() {
  const stored = sessionStorage.getItem('irondark_cart');
  if (!stored) return;
  try {
    const savedItems = JSON.parse(stored);
    if (Array.isArray(savedItems)) {
      savedItems.forEach((item) => {
        cart.push({
          name: item.name,
          price: item.price,
          qty: item.qty || 1,
          emoji: item.emoji || '📦'
        });
      });
    }
  } catch (error) {
    console.warn('Não foi possível carregar o carrinho:', error);
  }
}

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

cartButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const card  = button.closest('.product-card');
    const name  = card.querySelector('h3').textContent.trim();
    const priceText = card.querySelector('.product-bottom strong').textContent.trim();
    const price = Number(priceText.replace('R$', '').replace(',', '.').trim());

    // Pega o emoji do produto (ícone da tag do card)
    const tagText = card.querySelector('.tag') ? card.querySelector('.tag').textContent.trim() : '';
    const emojiMap = {
      'Recuperação': '💪', 'Força': '⚡', 'Saúde': '💊',
      'Definição': '🔥', 'Explosão': '⚡', 'Proteína': '🥛'
    };
    const emoji = emojiMap[tagText] || '📦';
    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
      existingItem.qty = (existingItem.qty || 1) + 1;
    } else {
      cart.push({ name, price, qty: 1, emoji });
    }

    updateCart();
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
  });
});


// V6 — clicar no produto abre a página de detalhes na mesma aba
const productCards = document.querySelectorAll('.product-card[data-product]');
productCards.forEach((card) => {
  card.addEventListener('click', (event) => {
    if (event.target.closest('.cart-btn') || event.target.closest('.detail-btn')) return;
    const productId = card.dataset.product;
    if (productId) window.location.href = `produto.html?id=${encodeURIComponent(productId)}`;
  });
});

document.querySelectorAll('.detail-btn').forEach((link) => {
  link.addEventListener('click', (event) => event.stopPropagation());
});

// Abrir carrinho ao clicar no ícone do topo
if (cartIconBtn) {
  cartIconBtn.addEventListener('click', () => {
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
  });
}

closeCart.addEventListener('click', () => {
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
});

function updateCart() {
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
      <div class="cart-item-price">R$ ${(item.price * qty).toFixed(2).replace('.', ',')}</div>
      <button class="cart-remove-btn" data-index="${index}">Remover</button>
    `;
    cartItems.appendChild(row);

    // Add event listener para remover
    const removeBtn = row.querySelector('.cart-remove-btn');
    removeBtn.addEventListener('click', () => {
      cart.splice(index, 1);
      updateCart();
    });
  });

  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="color: var(--muted); padding: 20px 0; text-align: center;">Seu carrinho está vazio.</p>';
  }

  cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

  // Salva o carrinho no sessionStorage para a página de checkout ler
  const cartParaCheckout = cart.map(item => ({
    name:  item.name,
    price: item.price,
    qty:   item.qty || 1,
    emoji: item.emoji || '📦'
  }));
  sessionStorage.setItem('irondark_cart', JSON.stringify(cartParaCheckout));

  // Atualiza badge de contagem no topo
  if (cartBubble) {
    const count = cart.reduce((s, it) => s + (it.qty || 1), 0);
    if (count > 0) {
      cartBubble.textContent = count;
      cartBubble.style.display = 'inline-flex';
    } else {
      cartBubble.style.display = 'none';
    }
  }
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Mensagem enviada com sucesso! Nossa equipe retornará em breve.');
  contactForm.reset();
});

chatToggle.addEventListener('click', () => chatWindow.classList.toggle('open'));
chatClose.addEventListener('click', () => chatWindow.classList.remove('open'));

const assistantLink = document.querySelector('a[href="#chatbot"]');
if (assistantLink) {
  assistantLink.addEventListener('click', (event) => {
    event.preventDefault();
    chatWindow.classList.add('open');
    chatInput.focus();
  });
}

chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, 'user-msg');
  chatInput.value = '';

  const loading = addMessage('Pensando...', 'bot-msg loading-msg');

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });

    const data = await response.json();
    loading.textContent = data.reply || 'Não consegui gerar uma resposta agora.';
    loading.classList.remove('loading-msg');
  } catch (error) {
    loading.textContent = getBotResponse(text);
    loading.classList.remove('loading-msg');
  }
});

function addMessage(text, className) {
  const message = document.createElement('p');
  message.className = className;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return message;
}

// Resposta reserva: funciona mesmo sem internet/API, útil para apresentar caso a chave não esteja configurada.
function getBotResponse(text) {
  const lower = text.toLowerCase();

  if (lower.includes('creatina')) {
    return 'A creatina IRONDARK é indicada para quem busca força, potência e melhor desempenho em treinos intensos.';
  }
  if (lower.includes('whey') || lower.includes('proteina') || lower.includes('proteína')) {
    return 'O Whey Protein IRONDARK é voltado para recuperação muscular e apoio ao ganho de massa magra.';
  }
  if (lower.includes('pré') || lower.includes('pre') || lower.includes('void')) {
    return 'O VOID-X é o pré-treino da IRONDARK, com proposta de energia, foco e intensidade antes do treino.';
  }
  if (lower.includes('bcaa')) {
    return 'O BCAA 2:1:1 auxilia na recuperação e pode ser usado por quem realiza treinos frequentes.';
  }
  if (lower.includes('entrega') || lower.includes('frete')) {
    return 'A entrega é calculada de acordo com a região do cliente e o prazo aparece no checkout.';
  }
  if (lower.includes('pagamento') || lower.includes('pix') || lower.includes('cartão')) {
    return 'Trabalhamos com PIX, cartão e boleto para facilitar a finalização do pedido.';
  }

  return 'Posso ajudar com dúvidas sobre produtos IRONDARK, carrinho, entrega, pagamento ou indicação de suplemento.';
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

// Botão "Finalizar compra" → redireciona para checkout.html
const finalizarBtn = document.querySelector('.btn.primary.full');
if (finalizarBtn) {
  finalizarBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Adicione produtos ao carrinho antes de finalizar!');
      return;
    }
    // Salva o carrinho no sessionStorage e redireciona para o checkout
    sessionStorage.setItem('irondark_cart', JSON.stringify(
      cart.map(item => ({
        name:  item.name,
        price: item.price,
        qty:   item.qty || 1,
        emoji: item.emoji || '📦'
      }))
    ));
    window.location.href = 'checkout.html';
  });
}

loadCartFromStorage();
updateCart();


function setupChatbotMedia() {
  const videoToggle = document.querySelector('.video-toggle');
  const video = document.querySelector('.chat-toggle-video');
  if (!videoToggle || !video) return;

  const activateVideo = () => {
    videoToggle.classList.add('video-ready');
    videoToggle.classList.remove('use-fallback');
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === 'function') {
      playAttempt.catch(() => {
        videoToggle.classList.add('use-fallback');
      });
    }
  };

  video.addEventListener('canplay', activateVideo);
  video.addEventListener('playing', activateVideo);
  video.addEventListener('error', () => videoToggle.classList.add('use-fallback'));
  setTimeout(() => {
    if (!video.readyState || video.readyState < 2) videoToggle.classList.add('use-fallback');
  }, 1800);
}
setupChatbotMedia();
