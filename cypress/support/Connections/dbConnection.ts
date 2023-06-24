import { Connection, ConnectionOptions } from 'mysql2/promise';
import * as mysql2 from 'mysql2/promise';
import * as dotenv from 'dotenv';
dotenv.config();

class DatabaseConnection {
  private connections: Record<string, ConnectionOptions>;

  constructor() {
    this.connections = {
      homolog: {
        host: process.env.HOMOLOG_HOST || '',
        port: Number(process.env.HOMOLOG_PORT) || 0,
        user: process.env.HOMOLOG_USER || '',
        password: process.env.HOMOLOG_PASSWORD || '',
        database: process.env.HOMOLOG_DATABASE || ''
      }
    };
  }

  private getConnectionInfo(dbName: string): ConnectionOptions {
    const connectionInfo = this.connections[dbName];

    if (!connectionInfo) {
      throw new Error(`Do not have DB connection under name ${dbName}`);
    }

    return connectionInfo;
  }

  public async queryDB(dbName: string, query: string): Promise<any> {
    const connectionInfo = this.getConnectionInfo(dbName);
    const connection: Connection = await mysql2.createConnection(connectionInfo);

    try {
      const [results] = await connection.query(query);
      return results;
    } catch (error) {
      throw error;
    } finally {
      await connection.end();
    }
  }
}

export default DatabaseConnection;
