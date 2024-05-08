"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDutySchema = exports.createDutySchema = void 0;
const zod_1 = require("zod");
exports.createDutySchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string().min(1, { message: "Id must be at least 1 character!" }),
        name: zod_1.z.string().min(1, { message: "Name must be at least 1 character!" })
    })
});
exports.updateDutySchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name must be at least 1 character!" })
    }).partial()
});
