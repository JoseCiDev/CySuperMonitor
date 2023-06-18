import { createConnection, Connection, ConnectionOptions, ResultSetHeader } from 'mysql2/promise';

class Database {
  private connection: Connection;
  private config: ConnectionOptions;

  constructor() {
    // Configurações de conexão com o banco de dados
    this.config = {
      host: process.env.HOMOLOG_HOST,
      user: process.env.HOMOLOG_USER,
      password: process.env.HOMOLOG_PASSWORD,
      database: process.env.HOMOLOG_DATABASE
    };
    this.connection = null;
  }

  public async connect(): Promise<void> {
    // Lógica de conexão com o banco de dados
    this.connection = await createConnection(this.config);
  }

  public async disconnect(): Promise<void> {
    // Lógica de desconexão com o banco de dados
    if (this.connection) {
      await this.connection.end();
    }
  }

  // Métodos para execução de queries, inserção, atualização, etc.
  // Implemente os métodos necessários para suas operações com o banco de dados
  public async query(sql: string): Promise<any[]> {
    const [rows] = await this.connection.query(sql);
    return rows as any[];
  }

  public async insert(sql: string, values: any[]): Promise<number> {
    const [result] = await this.connection.query<ResultSetHeader>(sql, values);
    return result.affectedRows;
  }

  public async update(sql: string, values: any[]): Promise<number> {
    const [result] = await this.connection.query<ResultSetHeader>(sql, values);
    return result.affectedRows;
  }

  public async delete(sql: string, values: any[]): Promise<number> {
    const [result] = await this.connection.query<ResultSetHeader>(sql, values);
    return result.affectedRows;
  }
}

export default Database;
