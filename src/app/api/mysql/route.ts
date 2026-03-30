import mysql from 'mysql2/promise';

export async function GET(request: Request) {
  try {
    const connectionParams = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PSWD,
      database: process.env.DB
    };

    // 2. connect to database

    const connection = await mysql.createConnection(connectionParams)

    // 3. create a query to fetch data

    let get_exp_query = ''

    get_exp_query = 'SELECT * FROM inbox'

    // we can use this array to pass parameters to the SQL query

    let values: any[] = []

    // 4. exec the query and retrieve the results

    const [results] = await connection.execute(get_exp_query, values)

    // 5. close the connection when done

    connection.end()

    // return the results as a JSON API response

    return Response.json(results)
  } catch (err) {
    console.log('ERROR: API - ', (err as Error).message)

    const response = {
      error: (err as Error).message,

      returnedStatus: 200,
    }

    return Response.json(response, { status: 200 })
  }
}

