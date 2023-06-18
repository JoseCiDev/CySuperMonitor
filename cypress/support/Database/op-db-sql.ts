import SQLConnection from './dbsql';


async function runDbSql() {
  const connection = new SQLConnection();
  await connection.connect();

  try {
    const rows = await connection.execute('SELECT * FROM pagamento p WHERE p.id_atendimento = 2121536');
    console.log(rows);
  } catch (error) {
    console.error('Failed to fetch users:', error.message);
  } finally {
    await connection.close();
  }
}

export default runDbSql;

