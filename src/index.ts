import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import DutyRoutes from "./router/DutyRouter";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.databaseSync();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    protected databaseSync(): void {
        const db = new Database();
        db.sequelize?.sync();
    }

    protected routes(): void {
        const cors = require("cors");

        this.app.use(cors());
        this.app.use(express.json({ limit: "3mb" }));
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("Welcome to To-Do List of Duties");
        });
        this.app.use("/api/v1/duty", DutyRoutes);
    }
}



const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
    console.log("Server started successfully");
});
