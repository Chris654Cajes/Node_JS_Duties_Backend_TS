import { Request, Response } from "express";
import { Duty } from "../model/Duty";
import { DutyRepo } from "../repository/DutyRepo";

class DutyController {
    async create(req: Request, res: Response) {
        try {
            const new_duty = new Duty();
            new_duty.id = req.body['id'];
            new_duty.name = req.body['name'];

            await new DutyRepo().save(new_duty);

            res.status(201).json({
                status: "Created!",
                message: "Successfully creaated new duty!"
            });
        } catch (err: any) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const new_duty = new Duty();
            new_duty.id = req.params.id;
            new_duty.name = req.body['name'];

            await new DutyRepo().update(new_duty);

            res.status(201).json({
                status: "Updated!",
                message: "Successfully updated existing duty!"
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await new DutyRepo().delete(req.params.id);

            res.status(200).json({
                status: "Deleted!",
                message: "Successfully deleted duty!"
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const duties = await new DutyRepo().retrieveAll();

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched duties!",
                data: duties
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const duty = await new DutyRepo().retrieveById(req.params.id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched duty!",
                data: duty
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            });
        }
    }
}

export default new DutyController();