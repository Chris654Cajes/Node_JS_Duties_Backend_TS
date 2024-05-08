import { Duty } from "../model/Duty";

interface IDutyRepo {
    save(duty: Duty): Promise<void>;
    update(duty: Duty): Promise<void>;
    delete(id: string): Promise<void>;
    retrieveById(id: string): Promise<Duty>;
    retrieveAll(): Promise<Duty[]>;
}

export class DutyRepo implements IDutyRepo {
    async save(duty: Duty): Promise<void> {
        try {
            await Duty.create({
                id: duty.id,
                name: duty.name
            });
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    
    async update(duty: Duty): Promise<void> {
        try {
            const new_duty = await Duty.findOne({
                where: {
                    id: duty.id
                }
            });

            if (!new_duty) {
                throw new Error("Duty not found!")
            }

            new_duty.name = duty.name;

            await new_duty.save();
        } catch (error) {
            throw new Error("Failed to update duty.");
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const new_duty = await Duty.findOne({
                where: {
                    id: id
                }
            });

            if (!new_duty) {
                throw new Error("Duty not found!")
            }

            await new_duty.destroy();
        } catch (error) {
            throw new Error("Failed to delete duty.");
        }
    }

    async retrieveById(id: string): Promise<Duty> {
        try {
            const new_duty = await Duty.findOne({
                where: {
                    id: id
                }
            });

            if (!new_duty) {
                throw new Error("Duty not found!")
            }

            return new_duty;
        } catch (error) {
            throw new Error("Failed to get duty.");
        }
    }

    async retrieveAll(): Promise<Duty[]> {
        try {
            const new_duty = await Duty.findAll();

            return new_duty;
        } catch (error) {
            throw new Error("Failed to get all duties.");
        }
    }
}