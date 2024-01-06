import * as mysql from 'mysql';


interface ConnectionInfo {
  host: string;
  port: number;
  user: string;
  password: string;
  dbName: string;
}

const connections = {
  // Defina os objetos de conexão para diferentes ambientes
  TESTE: {
    host: '192.168.0.66',
    port: 3306,
    user: 'root',
    password: '789123',
    dbName: 'supermonitor-hkm-new',
  },
};


class DatabaseConnection {
  private connections: Record<string, ConnectionInfo>

  constructor(connections: Record<string, ConnectionInfo>) {
    this.connections = connections;
  }

  private getConnectionInfo(dbName: string): ConnectionInfo {
    console.log(dbName)
    const connectionInfo = this.connections[dbName];
    console.log(connectionInfo)
    if (!connectionInfo) {
      throw new Error(`Do not have DB connection under name ${dbName}`);
    }
    return connectionInfo;
  }


  public async queryDB(dbName: string, query: string) {
    const connectionInfo = this.getConnectionInfo(dbName);
    const connection = mysql.createConnection({
    });
    const ok = connection.connect();
    if (!ok) {
      cy.log("Não foi possivel conectar ao banco de dados");
    }
    console.log("Connectado com sucesso!");

    return new Promise((resolve, reject) => {
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
export default DatabaseConnection;
export { ConnectionInfo, connections };