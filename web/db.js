import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Test",
  password: "bhatti",
  port: "5432",
});
db.connect();

// function to insert data
export async function insertData(colName, value) {
  try {
    
    const allowedColumns = ["your_column_name_1", "your_column_name_2"]; 
    if (!allowedColumns.includes(colName)) {
      throw new Error("Invalid column name");
    }

    
    const checkResult = await db.query(
      `SELECT * FROM items WHERE ${colName} = $1`,
      [value]
    );

    if (checkResult.rows.length > 0) {
      return null; 
    } else {
      const result = await db.query(
        `INSERT INTO items (${colName}) VALUES ($1) RETURNING *`,
        [value]
      );
      return result.rows[0];
    }
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
}

// get data from db
export async function readData(value) {
  const checkResult = await db.query("SELECT * FROM items WHERE email = $1", [
    value,
  ]);
  if (checkResult.rows.length > 0) {
    const data = checkResult.rows[0];
    return data;
  } else {
    return null;
  }
}
