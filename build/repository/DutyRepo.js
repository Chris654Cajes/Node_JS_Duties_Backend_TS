"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DutyRepo = void 0;
const Duty_1 = require("../model/Duty");
class DutyRepo {
    save(duty) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Duty_1.Duty.create({
                    id: duty.id,
                    name: duty.name
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    update(duty) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_duty = yield Duty_1.Duty.findOne({
                    where: {
                        id: duty.id
                    }
                });
                if (!new_duty) {
                    throw new Error("Duty not found!");
                }
                new_duty.name = duty.name;
                yield new_duty.save();
            }
            catch (error) {
                throw new Error("Failed to update duty.");
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_duty = yield Duty_1.Duty.findOne({
                    where: {
                        id: id
                    }
                });
                if (!new_duty) {
                    throw new Error("Duty not found!");
                }
                yield new_duty.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete duty.");
            }
        });
    }
    retrieveById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_duty = yield Duty_1.Duty.findOne({
                    where: {
                        id: id
                    }
                });
                if (!new_duty) {
                    throw new Error("Duty not found!");
                }
                return new_duty;
            }
            catch (error) {
                throw new Error("Failed to get duty.");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_duty = yield Duty_1.Duty.findAll();
                return new_duty;
            }
            catch (error) {
                throw new Error("Failed to get all duties.");
            }
        });
    }
}
exports.DutyRepo = DutyRepo;
