export function carregarImagemSimulada(name: string, size: number, type: string) {
  const content = new Uint8Array(size * 1024);
  const blob = new Blob([content], { type });
  const imagem = new File([blob], name, { type });

  const leitor = new FileReader();
  leitor.onload = (evento) => {
    const url = evento.target?.result;
    if (typeof url === 'string') {
      const imageElement = document.createElement('img');
      imageElement.src = url;
      document.body.appendChild(imageElement);
    }
  };
  leitor.readAsDataURL(imagem);
}
