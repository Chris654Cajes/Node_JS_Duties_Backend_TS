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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
test('fetches duties from API', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = axios_1.default.get('https://localhost:8000/api/v1/duty');
}));
test('fetches one duty from API by id', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = axios_1.default.get('https://localhost:8000/api/v1/duty/1');
}));
test('delete one duty from API by id', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = axios_1.default.delete('https://localhost:8000/api/v1/duty/1');
}));
test('add new duty from API with id and name', () => __awaiter(void 0, void 0, void 0, function* () {
    axios_1.default.post('https://localhost:8000/api/v1/duty/', {
        id: '223223',
        name: 'Cooking'
    });
}));
test('update existing duty from API with id and name', () => __awaiter(void 0, void 0, void 0, function* () {
    axios_1.default.post('https://localhost:8000/api/v1/duty/1', {
        id: '1',
        name: 'Cooking'
    });
}));
