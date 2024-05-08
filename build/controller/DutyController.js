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
const Duty_1 = require("../model/Duty");
const DutyRepo_1 = require("../repository/DutyRepo");
class DutyController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_duty = new Duty_1.Duty();
                new_duty.id = req.body['id'];
                new_duty.name = req.body['name'];
                yield new DutyRepo_1.DutyRepo().save(new_duty);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully creaated new duty!"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!"
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_duty = new Duty_1.Duty();
                new_duty.id = req.params.id;
                new_duty.name = req.body['name'];
                yield new DutyRepo_1.DutyRepo().update(new_duty);
                res.status(201).json({
                    status: "Updated!",
                    message: "Successfully updated existing duty!"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!"
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield new DutyRepo_1.DutyRepo().delete(req.params.id);
                res.status(200).json({
                    status: "Deleted!",
                    message: "Successfully deleted duty!"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!"
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const duties = yield new DutyRepo_1.DutyRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched duties!",
                    data: duties
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!"
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const duty = yield new DutyRepo_1.DutyRepo().retrieveById(req.params.id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched duty!",
                    data: duty
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!"
                });
            }
        });
    }
}
exports.default = new DutyController();
