/**
 * CONFIGURAÇÃO DA PLAYLIST
 *
 * type: "image" ou "video"
 * src: caminho do arquivo
 * duration: duração da mídia em segundos (padrão para imagens: 7)
 * title / subtitle: textos opcionais sobre a mídia
 * show: exibe ou oculta title e subtitle (padrão: true)
 * showTime: tempo, em segundos, antes de ocultar title e subtitle
 */
const playlist = [
  {
    type: "image",
    src: "assets/img/fotos/cerimonial.jpg",
    duration: 8,
    title: "Transformamos momentos em memórias inesquecíveis",
    subtitle: "Cerimonial, eventos e celebrações planejadas em cada detalhe."
  },

  {
    type: "video",
    src: "assets/img/videos/laravel-video.mp4",
    title: "Cerimonial de Casamento",
    subtitle: "Organização, cuidado e tranquilidade para você viver cada emoção.",
    show: true,
    showTime: 7
  },

  {
    type: "image",
    src: "assets/img/fotos/cerimonia-igreja.jpg",
    title: "Cerimônia Religiosa ou Civil",
    subtitle: "Organização do cortejo, padrinhos, daminhas, alianças, músicos e celebrante."
  },

  {
    type: "image",
    src: "assets/img/fotos/recepcao-festa.jpg",
    title: "Recepção e Festa",
    subtitle: "Coordenamos cada momento para que você aproveite a sua celebração.",
  },

  {
    type: "video",
    src: "assets/img/videos/laravel-video.mp4",
    title: "Planejamento e Assessoria",
    subtitle: "Cronograma, checklist, fornecedores e acompanhamento completo do evento.",
    show: true,
    showTime: 7
  },

  {
    type: "image",
    src: "assets/img/fotos/decoracao.jpg",
    title: "Decoração e Ambientação",
    subtitle: "Cada detalhe pensado para transformar espaços e contar a sua história."
  },

  {
    type: "image",
    src: "assets/img/fotos/dj-musica.jpg",
    title: "Música e Entretenimento",
    subtitle: "DJ, músicos, bandas, sonorização, iluminação e atrações para sua festa."
  },

  {
    type: "image",
    src: "assets/img/fotos/buffet.jpg",
    title: "Buffet e Gastronomia",
    subtitle: "Buffet, doces, bolo, bebidas, garçons e experiências gastronômicas."
  },

  {
    type: "image",
    src: "assets/img/fotos/fotografia.jpg",
    title: "Fotografia e Filmagem",
    subtitle: "Profissionais para registrar cada sorriso, abraço e emoção."
  },

  {
    type: "image",
    src: "assets/img/fotos/fornecedores.jpg",
    title: "Gestão de Fornecedores",
    subtitle: "Selecionamos e coordenamos profissionais para que tudo aconteça em perfeita sintonia."
  },

  {
    type: "image",
    src: "assets/img/fotos/aniversario.jpg",
    title: "Festas e Celebrações",
    subtitle: "Aniversários, bodas, formaturas, confraternizações e momentos especiais."
  },

  {
    type: "image",
    src: "assets/img/fotos/melhores-momentos.jpg",
    title: "Você celebra. Nós cuidamos dos detalhes.",
    subtitle: "Do planejamento ao último momento da festa."
  },

  {
    type: "image",
    src: "assets/img/fotos/contato.jpg",
    duration: 9,
    title: "Seu próximo momento inesquecível começa aqui",
    subtitle: "Entre em contato e conte-nos como você imagina a sua celebração."
  }
];

const stage = document.getElementById("mediaStage");
const progressBar = document.getElementById("mediaProgress");
const companyInfo = document.getElementById("companyInfo");
const soundToggle = document.getElementById("soundToggle");

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

const whatsappQrCode = document.getElementById("whatsappQrCode");

if (whatsappQrCode) {
  new QRCode(whatsappQrCode, {
    text: "https://wa.me/5561991939043",
    width: 72,
    height: 72,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

startPresentation();
