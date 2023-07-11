import * as mysql from 'mysql';
import * as dotenv from 'dotenv';

dotenv.config();

class DatabaseConnection {
  private connections: any;

  constructor() {
    this.connections = {
      homolog: {
        host: process.env.HOMOLOG_HOST,
        port: process.env.HOMOLOG_PORT,
        user: process.env.HOMOLOG_USER,
        password: process.env.HOMOLOG_PASSWORD,
        database: process.env.HOMOLOG_DATABASE,
      }
    };
  }

  private getConnectionInfo(dbName: string) {
    const connectionInfo = this.connections[dbName];

    if (!connectionInfo) {
      throw new Error(`Do not have DB connection under name ${dbName}`);
    }

    return connectionInfo;
  }

  public async queryDB(dbName: string, query: string) {
    const connectionInfo = this.getConnectionInfo(dbName);
    const connection = mysql.createConnection(connectionInfo);

    connection.connect();

    return new Cypress.Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          return reject(error);
        }

        connection.end();

        return resolve(results);
      });
    });
  }
}

export { DatabaseConnection };