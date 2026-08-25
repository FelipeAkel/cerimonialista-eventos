/**
 * CONFIGURAÇÃO DA PLAYLIST
 *
 * type: "image" ou "video"
 * src: caminho do arquivo
 * duration: duração da mídia em segundos (padrão para imagens: 7)
 * title / subtitle: textos opcionais sobre a mídia
 * show: exibe ou oculta title e subtitle (padrão: true)
 * showTime: tempo, em segundos, antes de ocultar title e subtitle
 * showFooter: exibe ou oculta as informações do rodapé (padrão: true)
 * showDev: troca os dados da RT Eventos pelos dados do desenvolvedor
 * centeredQrCode: URL usada para gerar um QR Code no centro da mídia
 * O QR Code permanece sempre visível, independentemente de showFooter.
 */
const RT_WHATSAPP_URL = "https://wa.me/5561991091587?text=Ol%C3%A1%2C%20RT%20Eventos%21%20Quero%20informa%C3%A7%C3%B5es.";
const DEV_WHATSAPP_URL = "https://wa.me/5561991939043?text=Ol%C3%A1%2C%20Felipe%20Akel%21";

const playlist = [
  {
    type: "image",
    src: "assets/img/fotos/cerimonial.jpg",
    showFooter: true,
    duration: 8,
    title: "Transformamos momentos em memórias inesquecíveis",
    subtitle: "Cerimonial, assessoria e decoração para que cada detalhe conte a história de vocês.",
  },

  {
    type: "video",
    src: "assets/img/videos/laravel-video.mp4",
    showFooter: false,
    title: "Exemplo Vídeo",
    subtitle: "Descrição breve do vídeo.",
    show: true,
    showTime: 7
  },

  {
    type: "image",
    src: "assets/img/fotos/cerimonial-casamento.jpg",
    showFooter: false,
    title: "Cerimonial e assessoria pré-evento",
    subtitle: "Planejamento próximo e suporte aos noivos durante toda a preparação do evento.",
    show: true,
    showTime: 7
  },

  {
    type: "image",
    src: "assets/img/fotos/fornecedores.jpg",
    showFooter: false,
    duration: 9,
    title: "Orçamentos e fornecedores",
    subtitle: "Solicitamos orçamentos, conduzimos negociações e buscamos parcerias exclusivas com fornecedores."
  },

  {
    type: "image",
    src: "assets/img/fotos/acompanhamento.jpg",
    showFooter: false,
    duration: 9,
    title: "Visitas e acompanhamento",
    subtitle: "Agendamos e acompanhamos visitas a fornecedores, reuniões de progresso e o checklist dos noivos.",
  },

  {
    type: "image",
    src: "assets/img/fotos/suporte-online.jpg",
    showFooter: true,
    title: "Suporte online",
    subtitle: "Orientação e acompanhamento para esclarecer dúvidas e apoiar as decisões antes do grande dia.",
    show: true,
    showTime: 7
  },

  {
    type: "image",
    src: "assets/img/fotos/recebendo-fornecedores.jpg",
    showFooter: false,
    duration: 9,
    title: "Supervisão no dia do evento",
    subtitle: "Acompanhamos a montagem, recebemos os fornecedores e supervisionamos a execução dos serviços."
  },

  {
    type: "image",
    src: "assets/img/fotos/controle-organizacao.jpg",
    showFooter: false,
    duration: 9,
    title: "Controle e organização",
    subtitle: "Conferimos serviços na entrega e retirada, como bebidas e doces, e organizamos os pertences dos noivos."
  },

  {
    type: "image",
    src: "assets/img/fotos/reservado.jpg",
    showFooter: false,
    duration: 9,
    title: "Recepção dos convidados",
    subtitle: "Realizamos o protocolo de cumprimentos e a contagem de convidados para o controle do buffet."
  },

  {
    type: "image",
    src: "assets/img/fotos/cortejo.jpg",
    showFooter: false,
    duration: 9,
    title: "Assessoria para o cortejo",
    subtitle: "Orientamos noivos, pais, padrinhos, daminhas e pajens, da preparação às entradas e saídas."
  },

  {
    type: "image",
    src: "assets/img/fotos/melhores-momentos.jpg",
    showFooter: false,
    duration: 9,
    title: "Coordenação do cerimonial",
    subtitle: "Coordenamos os protocolos da cerimônia e da recepção para que cada etapa aconteça no momento certo."
  },

  {
    type: "image",
    src: "assets/img/fotos/decoracao.jpg",
    showFooter: false,
    duration: 9,
    title: "Decoração com identidade",
    subtitle: "Transformamos o ambiente em um cenário marcante, alinhado ao estilo e à história de cada casal."
  },

  {
    type: "image",
    src: "assets/img/fotos/recepcao-festa.jpg",
    showFooter: false,
    duration: 10,
    title: "Assessoria e produção da decoração",
    subtitle: "Arranjos, decoração de móveis e objetos, forração de pisos, paredes e mesas, além de mesa posta."
  },

  {
    type: "image",
    src: "assets/img/fotos/programa-impacto-social.jpg",
    showFooter: false,
    duration: 7,
    title: "Programa de Impacto Social",
    subtitle: "Oferecemos, em um número limitado de eventos por ano, atendimento sem custos a casamentos comunitários, famílias de baixa renda e instituições carentes."
  },

  {
    type: "image",
    src: "assets/img/fotos/equipe-rt-eventos.jpeg",
    showFooter: true,
    duration: 7,
    title: "Equipe RT Eventos",
    subtitle: "Profissionais dedicados a tornar cada momento especial."
  },

  {
    type: "image",
    src: "assets/img/fotos/equipe-rt-eventos-2.jpg",
    centeredQrCode: RT_WHATSAPP_URL,
    centeredQrCodeLabel: "QR Code de contato da RT Eventos",
    showFooter: true,
    showDev: true,
    duration: 15,
    title: "Contato RT Eventos",
    subtitle: "Contato pelo WhatsApp: (61) 99109-1587",
  }

];

const stage = document.getElementById("mediaStage");
const progressBar = document.getElementById("mediaProgress");
const companyInfo = document.getElementById("companyInfo");
const soundToggle = document.getElementById("soundToggle");
const appFooter = document.getElementById("appFooter");
const centeredQrLayer = document.getElementById("centeredQrLayer");
const footerLogo = document.getElementById("footerLogo");
const footerName = document.getElementById("footerName");
const footerTagline = document.getElementById("footerTagline");
const footerInstagram = document.getElementById("footerInstagram");
const footerWhatsapp = document.getElementById("footerWhatsapp");
const footerWhatsappText = document.getElementById("footerWhatsappText");
const footerCtaEyebrow = document.getElementById("footerCtaEyebrow");
const footerCtaTitle = document.getElementById("footerCtaTitle");
const footerQrLink = document.getElementById("footerQrLink");
const whatsappQrCode = document.getElementById("whatsappQrCode");

const footerProfiles = {
  rt: {
    name: "RT Eventos",
    tagline: "Transformamos momentos em memórias inesquecíveis.",
    whatsappText: "(61) 99109-1587",
    whatsappUrl: RT_WHATSAPP_URL,
    whatsappLabel: "Abrir conversa com a RT Eventos no WhatsApp",
    ctaEyebrow: "Planejando um evento?",
    ctaTitle: "Solicite seu orçamento",
  },
  dev: {
    name: "Desenvolvido por Felipe Akel",
    tagline: "Desenvolvimento web",
    whatsappText: "WhatsApp: (61) 99193-9043",
    whatsappUrl: DEV_WHATSAPP_URL,
    whatsappLabel: "Abrir conversa com Felipe Akel no WhatsApp",
    ctaEyebrow: "Projeto desenvolvido por",
    ctaTitle: "Felipe Akel",
  },
};

function renderQrCode(container, text, size = 144) {
  if (!container || container.dataset.qrText === text) return;

  container.replaceChildren();
  container.dataset.qrText = text;
  new QRCode(container, {
    text,
    width: size,
    height: size,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

function updateCenteredQrCode(item) {
  if (!centeredQrLayer) return;

  if (!item.centeredQrCode) {
    centeredQrLayer.hidden = true;
    return;
  }

  centeredQrLayer.setAttribute(
    "aria-label",
    item.centeredQrCodeLabel || "QR Code"
  );
  renderQrCode(centeredQrLayer, item.centeredQrCode, 720);
  centeredQrLayer.hidden = false;
}

function updateFooterHeight() {
  const footerHeight = appFooter?.getBoundingClientRect().height || 0;
  document.documentElement.style.setProperty("--footer-height", `${footerHeight}px`);
}

if (appFooter) {
  new ResizeObserver(updateFooterHeight).observe(appFooter);
  updateFooterHeight();
}

function applyFooterVisibility(showFooter = true, showDev = false) {
  document.body.classList.toggle("footer-info-hidden", !showFooter);

  document.querySelectorAll(".footer-info").forEach((element) => {
    element.hidden = !showFooter;
  });

  const profile = showDev ? footerProfiles.dev : footerProfiles.rt;
  if (footerLogo) footerLogo.hidden = showDev;
  if (footerName) footerName.textContent = profile.name;
  if (footerTagline) footerTagline.textContent = profile.tagline;
  if (footerInstagram) footerInstagram.hidden = !showFooter || showDev;
  if (footerWhatsapp) {
    footerWhatsapp.href = profile.whatsappUrl;
    footerWhatsapp.setAttribute("aria-label", profile.whatsappLabel);
  }
  if (footerWhatsappText) footerWhatsappText.textContent = profile.whatsappText;
  if (footerCtaEyebrow) footerCtaEyebrow.textContent = profile.ctaEyebrow;
  if (footerCtaTitle) footerCtaTitle.textContent = profile.ctaTitle;
  if (footerQrLink) {
    footerQrLink.href = profile.whatsappUrl;
    footerQrLink.setAttribute("aria-label", profile.whatsappLabel);
  }
  renderQrCode(whatsappQrCode, profile.whatsappUrl);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.warn("Nao foi possivel registrar o modo offline:", error);
    });
  });
}

let currentIndex = -1;
let activeElement = null;
let timerId = null;
let captionTimerId = null;
let progressFrame = null;
let soundControlTimerId = null;
let soundEnabled = false;

function applySoundState(video) {
  if (!video) return;

  video.defaultMuted = !soundEnabled;
  video.muted = !soundEnabled;
  video.volume = 1;

  if (soundEnabled) {
    video.removeAttribute("muted");
  } else {
    video.setAttribute("muted", "");
  }
}

function createCaption(item) {
  if (item.show === false || (!item.title && !item.subtitle)) return null;

  const caption = document.createElement("div");
  caption.className = "media-caption text-fade";
  caption.innerHTML = `
    ${item.title ? `<h2 class="display-4 fw-bold mb-2">${item.title}</h2>` : ""}
    ${item.subtitle ? `<p class="fs-4 mb-0 opacity-75">${item.subtitle}</p>` : ""}
  `;
  return caption;
}

function createMediaElement(item) {
  const wrapper = document.createElement("article");
  wrapper.className = "media-item";

  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = "metadata";
    applySoundState(video);

    video.addEventListener("ended", nextItem, { once: true });
    video.addEventListener("error", () => {
      setTimeout(nextItem, 2500);
    }, { once: true });

    wrapper.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.title || "Imagem da exposição";
    wrapper.appendChild(img);
  }

  const caption = createCaption(item);
  if (caption) wrapper.appendChild(caption);

  return wrapper;
}

function animateProgress(duration) {
  cancelAnimationFrame(progressFrame);
  const startedAt = performance.now();
  progressBar.style.width = "0%";

  function tick(now) {
    const elapsed = now - startedAt;
    const percent = Math.min((elapsed / duration) * 100, 100);
    progressBar.style.width = `${percent}%`;

    if (percent < 100) progressFrame = requestAnimationFrame(tick);
  }

  progressFrame = requestAnimationFrame(tick);
}

function showItem(index) {
  clearTimeout(timerId);
  clearTimeout(captionTimerId);
  cancelAnimationFrame(progressFrame);
  progressBar.style.width = "0%";

  currentIndex = index;
  const item = playlist[currentIndex];
  applyFooterVisibility(item.showFooter !== false, item.showDev === true);
  updateCenteredQrCode(item);
  const nextElement = createMediaElement(item);
  stage.appendChild(nextElement);

  requestAnimationFrame(() => nextElement.classList.add("active"));

  if (activeElement) {
    activeElement.classList.remove("active");
    const oldElement = activeElement;
    setTimeout(() => oldElement.remove(), 800);
  }

  activeElement = nextElement;

  const caption = nextElement.querySelector(".media-caption");
  const showTime = Number(item.showTime);
  const textElements = [caption, companyInfo].filter(Boolean);

  companyInfo?.classList.toggle("is-hidden", item.show === false);

  if (item.show !== false && Number.isFinite(showTime) && showTime > 0) {
    captionTimerId = setTimeout(() => {
      textElements.forEach((element) => element.classList.add("is-hidden"));
    }, showTime * 1000);
  }

  if (item.type === "image") {
    const duration = Number(item.duration) || 7;
    const durationMs = duration * 1000;
    animateProgress(durationMs);
    timerId = setTimeout(nextItem, durationMs);
  } else {
    const video = nextElement.querySelector("video");

    if (Number(item.duration) > 0) {
      const durationMs = Number(item.duration) * 1000;
      animateProgress(durationMs);
      timerId = setTimeout(nextItem, durationMs);
      return;
    }

    video.addEventListener("loadedmetadata", () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        animateProgress(video.duration * 1000);
      }
    }, { once: true });
  }
}

function nextItem() {
  const nextIndex = (currentIndex + 1) % playlist.length;
  showItem(nextIndex);
}

function startPresentation() {
  if (!playlist.length) {
    stage.innerHTML = `
      <div class="empty-state">
        <div>
          <h1>Nenhuma mídia configurada</h1>
          <p class="lead opacity-75">Edite <code>assets/js/app.js</code> e adicione suas fotos e vídeos.</p>
        </div>
      </div>
    `;
    return;
  }

  showItem(0);
}

function showSoundControl() {
  if (!soundToggle) return;

  soundToggle.classList.add("is-visible");
  clearTimeout(soundControlTimerId);
  soundControlTimerId = setTimeout(() => {
    if (document.activeElement !== soundToggle) {
      soundToggle.classList.remove("is-visible");
    }
  }, 3000);
}

function updateSoundControl() {
  if (!soundToggle) return;

  const label = soundEnabled ? "Desativar som" : "Ativar som";
  soundToggle.classList.toggle("sound-enabled", soundEnabled);
  soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  soundToggle.setAttribute("aria-label", label);
  soundToggle.title = label;
}

soundToggle?.addEventListener("click", () => {
  soundEnabled = !soundEnabled;

  document.querySelectorAll(".media-item video").forEach((video) => {
    applySoundState(video);

    if (soundEnabled) {
      video.play().catch((error) => {
        console.warn("O navegador bloqueou a reprodução com som:", error);
      });
    }
  });

  updateSoundControl();
  showSoundControl();
});

document.addEventListener("mousemove", showSoundControl, { passive: true });
document.addEventListener("touchstart", showSoundControl, { passive: true });
soundToggle?.addEventListener("focus", showSoundControl);

updateSoundControl();

// Atalhos úteis durante a exposição.
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") nextItem();
  if (event.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
});

startPresentation();
