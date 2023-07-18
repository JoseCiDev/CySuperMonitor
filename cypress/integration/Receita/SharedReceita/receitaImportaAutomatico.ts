cy.get(el.imgjpg).each(($input) => {
  const fileName = 'ReceitaJpeg(1).jpeg'; // Nome fictício do arquivo
  const mimeType = 'image/jpeg';

  // Gerar um arquivo fictício usando a biblioteca faker
  const base64Content = faker.random.alphaNumeric(100); // Exemplo de conteúdo em base64 fictício

  const byteString = atob(base64Content);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  const file = new File([uint8Array], fileName, { type: mimeType });

  cy.wrap($input)
    .then(($input) => {
      const fileInput = $input[0] as HTMLInputElement;
      const dataTransfer = new DataTransfer();

      dataTransfer.items.add(file);
      fileInput.files = dataTransfer.files;

      const event = new Event('change', { bubbles: true }) as any;
      Object.defineProperty(event, 'simulated', { value: true }); // Adicione essa propriedade personalizada para identificar eventos simulados

      cy.wrap(fileInput)
        .trigger('change', { force: true }); // Dispare o evento de mudança manualmente

      return Cypress.Promise.resolve(); // Retorne uma promessa resolvida para desbloquear o próximo comando Cypress
    });
});








cy.get(el.importar_imagem).each(($input) => {
  const fileName = 'ReceitaJpeg(1).jpeg'; // Nome fictício do arquivo
  const mimeType = 'image/jpeg';

  const base64Content = faker.string.alphanumeric(100); // Exemplo de conteúdo em base64 fictício

  const byteCharacters = atob(base64Content);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
  }

  const file = new File(byteArrays, fileName, { type: mimeType });


  cy.wrap($input)
      .then(($input) => {
          const fileInput = $input[0] as HTMLInputElement;
          const dataTransfer = new DataTransfer();

          dataTransfer.items.add(file);
          fileInput.files = dataTransfer.files;

          cy.wrap(fileInput)
              .trigger('change', { force: true }); // Dispare o evento de mudança manualmente

      });
});






// clicar em importar imagem
cy.get(el.importar_imagem).each(($input) => {
  const fileName = 'ReceitaJpeg(1).jpeg'; // Nome fictício do arquivo
  const mimeType = 'image/jpeg';

  const base64Content = faker.string.alphanumeric(100); // Exemplo de conteúdo em base64 fictício

  const byteCharacters = atob(base64Content);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
  }

  const file = new File(byteArrays, fileName, { type: mimeType });


  cy.wrap($input).then(($input: JQuery<HTMLInputElement>) => {
      return new Promise<void>((resolve) => {
          const fileInput = $input[0];
          const dataTransfer = new DataTransfer();
          const file = new File(byteArrays, fileName, { type: mimeType });

          dataTransfer.items.add(file);
          fileInput.files = dataTransfer.files;

          $input.on('change', () => {
              resolve();
          });

          $input.trigger('change', { force: true });
      });
  });
});