import { z } from "zod";

export const createDutySchema = z.object({
    body: z.object({
        id: z.string().min(1, { message: "Id must be at least 1 character!" }),
        name: z.string().min(1, { message: "Name must be at least 1 character!" })
    })
});

export const updateDutySchema = z.object({
    params: z.object({ id: z.string() }),
    body: z.object({
        name: z.string().min(1, { message: "Name must be at least 1 character!" })
    }).partial()
});
