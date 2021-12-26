import { createConnection } from 'typeorm';
import { Product } from './entity/Product';

var DB_HOST = process.env.DB_HOST;
var DB_USER = process.env.DB_USER;
var DB_PASS = process.env.DB_PASS;
var DB_NAME = process.env.DB_NAME;
async function main() {
    try {
        await createConnection({
            type: "mssql",
            host: DB_HOST,
            port: 1433,
            username: DB_USER,
            password: DB_PASS,
            database: DB_NAME,
            synchronize: true,
            entities: [Product],
            extra: {
                trustServerCertificate: true,
            },
        })
        console.log("Database is CONNECTED!  :)")
    } catch (e: any) {
        console.error(e)
        console.log("Conection Error!  :(")
    }
}
main();