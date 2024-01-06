/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const { addTypeScriptSupport } = require('cypress-typescript-preprocessor');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

/**
 * @type {Cypress.PluginConfig}
 */
export default (on: Cypress.PluginEvents, config: Cypress.PluginConfig) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  addTypeScriptSupport(on, config);
  addMatchImageSnapshotPlugin(on, config);

  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../webpack.config'),
    watchOptions: {},
  };

  on('file:preprocessor', webpackPreprocessor(options));

  // Configurar o ambiente
  // Certifique-se de que o cypress.env.json está sendo carregado corretamente
  configureEnvironment(config);

  // Return the resolved configuration
  return config;
};

const configureEnvironment = (config: Cypress.PluginConfig) => {
  // Verifique se o arquivo cypress.env.json está definido
  if (Cypress.env) {
    // Verifique se o parâmetro "AMBIENTE" está definido
    const ambiente = Cypress.env('ambiente');
    if (!ambiente && Cypress.env[ambiente]) {
      throw new Error(`Ambiente '${ambiente}' não encontrado no arquivo cypress.env.json`);
    }
    const environmentConfig = Cypress.env[ambiente];

    // Exemplo de uso das variáveis de ambiente
    console.log(`Ambiente selecionado: ${ambiente}`);
    console.log(`DB Host: ${environmentConfig.DB_HOST}`);
    console.log(`DB User: ${environmentConfig.DB_USER}`);
    console.log(`DB Password: ${environmentConfig.DB_PASSWORD}`);
    // e assim por diante...
  }
};