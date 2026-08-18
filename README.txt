MODELO DE EXPOSIÇÃO - HTML + CSS + JAVASCRIPT + BOOTSTRAP
=========================================================

1. Abra index.html no navegador.
2. Para tela cheia, pressione F11 no navegador ou a tecla F dentro da apresentação.
3. As fotos e vídeos ficam em: assets/media/
4. A playlist é configurada em: assets/js/app.js
5. A aparência fica em: assets/css/style.css
6. A logomarca fica em: assets/img/logo-placeholder.svg

EXEMPLO PARA ADICIONAR FOTO:
{
  type: "image",
  src: "assets/media/minha-foto.jpg",
  duration: 7000,
  title: "Título",
  subtitle: "Descrição"
}

EXEMPLO PARA ADICIONAR VÍDEO:
{
  type: "video",
  src: "assets/media/meu-video.mp4",
  title: "Título",
  subtitle: "Descrição"
}

OBSERVAÇÃO SOBRE BOOTSTRAP:
Este modelo carrega Bootstrap por CDN. Se a exposição ocorrer sem internet, faça o download do Bootstrap e altere os caminhos no index.html para arquivos locais.

ATALHOS:
- F: solicita modo tela cheia
- Seta direita: próxima mídia
- Espaço: próxima mídia

RECOMENDAÇÃO PARA VÍDEOS:
Use MP4/H.264 para maior compatibilidade entre Chrome, Edge, notebooks e TVs.
