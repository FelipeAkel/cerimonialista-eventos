/**
 * CONFIGURAÇÃO DA PLAYLIST
 *
 * type: "image" ou "video"
 * src: caminho do arquivo
 * duration: duração em milissegundos para imagens
 * title / subtitle: textos opcionais sobre a mídia
 */
const playlist = [
  {
    type: "image",
    src: "assets/media/foto-01.svg",
    duration: 7000,
    title: "Projetos que ganham destaque",
    subtitle: "Substitua esta imagem pelas fotos fornecidas pelo cliente."
  },
  {
    type: "image",
    src: "assets/media/foto-02.svg",
    duration: 7000,
    title: "Serviços apresentados com clareza",
    subtitle: "Você pode alterar textos, tempo de exibição e ordem dos itens."
  },
  {
    type: "video",
    src: "assets/media/video-exemplo.mp4",
    title: "Vídeo institucional",
    subtitle: "Adicione um MP4 neste caminho. Caso o arquivo não exista, o player avança automaticamente."
  },
  {
    type: "image",
    src: "assets/media/foto-03.svg",
    duration: 7000,
    title: "Contato sempre visível",
    subtitle: "Logo, Instagram, WhatsApp e chamada para QR Code permanecem na parte inferior."
  }
];

const stage = document.getElementById("mediaStage");
const progressBar = document.getElementById("mediaProgress");

let currentIndex = -1;
let activeElement = null;
let timerId = null;
let progressFrame = null;

function createCaption(item) {
  if (!item.title && !item.subtitle) return null;

  const caption = document.createElement("div");
  caption.className = "media-caption";
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
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

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

  if (item.type === "image") {
    const duration = item.duration || 7000;
    animateProgress(duration);
    timerId = setTimeout(nextItem, duration);
  } else {
    const video = nextElement.querySelector("video");
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

// Atalhos úteis durante a exposição.
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") nextItem();
  if (event.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
});

startPresentation();
