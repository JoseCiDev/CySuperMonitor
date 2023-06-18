/// <reference types="Cypress" />


import { defineConfig } from 'cypress'
import mysql from 'mysql'
// import crossEnv from 'cross-env';
import * as dotenv from 'dotenv';
dotenv.config();



// the connection strings for different databases could
// come from the Cypress configuration or from environment variables
const connections = {
  local: {
    host: process.env.LOCAL_HOST,
    user: process.env.LOCAL_USER,
    password: process.env.LOCAL_PASSWORD,
    database: process.env.LOCAL_DATABASE,
  },
  homolog: {
    host: process.env.HOMOLOG_HOST,
    user: process.env.HOMOLOG_USER,
    password: process.env.HOMOLOG_PASSWORD,
    database: process.env.HOMOLOG_DATABASE,
  },
}

// querying the database from Node
function queryDB(connectionInfo, query) {
  const connection = mysql.createConnection(connectionInfo)

  connection.connect()

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        return reject(error)
      }

      connection.end()

      return resolve(results)
    })
  })
}

export default defineConfig({
  projectId: process.env.PROJECT_KEY,
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    viewportWidth: 1600,
    viewportHeight: 1280,
    includeShadowDom: true,
    setupNodeEvents(on, config) {
      on('task', {
        // destructure the argument into the individual fields
        queryDatabase({ homolog, query }) {
          const connectionInfo = connections[homolog]

          if (!connectionInfo) {
            throw new Error(`Do not have DB connection under name ${homolog}`)
          }

          return queryDB(connectionInfo, query)
        },
      })
    },
  },
})