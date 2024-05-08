import { Sequelize } from "sequelize-typescript";
import { Duty } from "../model/Duty";
import * as dotenv from "dotenv";

dotenv.config();

class Database {
    public sequelize: Sequelize | undefined;

    private POSTGRE_DB =  process.env.POSTGRES_DB as string;
    private POSTGRE_HOST =  process.env.POSTGRES_HOST as string;
    private POSTGRE_PORT =  process.env.POSTGRES_PORT as unknown as number;
    private POSTGRE_USER =  process.env.POSTGRES_USER as unknown as string;
    private POSTGRE_PASSWORD =  process.env.POSTGRES_PASSWORD as unknown as string;

    constructor() {
        this.connectToPostgreSQL();
    }

    private async connectToPostgreSQL() {
        this.sequelize = new Sequelize({
            database: this.POSTGRE_DB,
            username: this.POSTGRE_USER,
            password: this.POSTGRE_PASSWORD,
            host: this.POSTGRE_HOST,
            port: this.POSTGRE_PORT,
            dialect: "postgres",
            models: [Duty]
        });

        this.sequelize.authenticate().then(() => {
            console.log("PostgreSQL connection has been established successfully.");
        });
    }
}

export default Database;