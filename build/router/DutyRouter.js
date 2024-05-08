"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DutyController_1 = __importDefault(require("../controller/DutyController"));
const validate_1 = __importDefault(require("../helper/validate"));
const DutySchema_1 = require("../schema/DutySchema");
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
class DutyRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(DutySchema_1.createDutySchema), DutyController_1.default.create);
        this.router.patch("/:id", (0, validate_1.default)(DutySchema_1.updateDutySchema), DutyController_1.default.update);
        this.router.delete("/:id", DutyController_1.default.delete);
        this.router.get("", DutyController_1.default.findAll);
        this.router.get("/:id", DutyController_1.default.findById);
    }
}
exports.default = new DutyRoutes().router;
