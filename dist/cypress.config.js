"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cypress_1 = require("cypress");
const connection_1 = __importStar(require("./cypress/support/Connections/connection"));
exports.default = cypress_1.defineConfig({
    // projectId: Cypress.env.PROJECT_KEY,
    viewportWidth: 1600,
    viewportHeight: 1280,
    includeShadowDom: true,
    e2e: {
        setupNodeEvents(on, config) {
            // Registre o evento 'task' aqui
            on("task", {
                queryDB({ dbName, query }) {
                    // Crie uma nova instância do DatabaseConnection dentro deste escopo
                    const databaseConnection = new connection_1.default(connection_1.connections);
                    return databaseConnection.queryDB(dbName, query);
                },
            });
        },
    },
});
