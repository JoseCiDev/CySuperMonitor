import { defineConfig } from 'cypress'
import mysql from 'mysql'
// the connection strings for different databases could
// come from the Cypress configuration or from environment variables
const connections = {
  SM_HKM_LOCAL: {
    host: '192.168.0.66',
    user: 'root',
    password: '789123',
    database: 'supermonitor-hkm-new',
  }
  
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
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        // destructure the argument into the individual fields
        queryDatabase({ SM_HKM_LOCAL, query }) {
          const connectionInfo = connections[SM_HKM_LOCAL]

          if (!connectionInfo) {
            throw new Error(`Do not have DB connection under name ${SM_HKM_LOCAL}`)
          }

          return queryDB(connectionInfo, query)
        },
      })
    },
  },
})