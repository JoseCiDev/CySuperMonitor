let objFromFile = [];

 let objs = (cy)=>{
  cy.log("JSKHDJSK 1->".objFromFile);
  cy.readFile('./cypress/integration/files/arquivo1.txt', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    
    let linhas = data.split(/\r?\n/);

    linhas.forEach(function (linha, key) {
      let values = linha.split(",");
      let nrorc = values[0].trim();
      let cdfil = values[1].trim();

      //console.log(values);
      objFromFile.push({ "nrorc": nrorc, "cdfil": cdfil });
      //console.log(key +" - "+duasposicoes);
      cy.log("JSKHDJSK 2->".objFromFile);
    })
  })
}
export { objs }
