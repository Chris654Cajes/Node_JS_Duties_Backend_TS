"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duty = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Duty = class Duty extends sequelize_typescript_1.Model {
};
exports.Duty = Duty;
Duty.DUTY_TABLE_NAME = "duty";
Duty.DUTY_ID = "id";
Duty.DUTY_NAME = "name";
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(8),
        primaryKey: true,
        field: Duty.DUTY_ID
    }),
    __metadata("design:type", String)
], Duty.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: Duty.DUTY_NAME
    }),
    __metadata("design:type", String)
], Duty.prototype, "name", void 0);
exports.Duty = Duty = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: Duty.DUTY_TABLE_NAME,
        timestamps: false
    })
], Duty);
