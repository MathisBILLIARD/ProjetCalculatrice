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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const succes_entity_1 = require("./succes.entity");
let SuccesService = class SuccesService {
    constructor(succesRepository) {
        this.succesRepository = succesRepository;
    }
    async createSucces(timeTakenMs, created_at) {
        const newSucces = new succes_entity_1.Succes();
        newSucces.timeTakenMs = timeTakenMs;
        newSucces.created_at = created_at;
        return this.succesRepository.save(newSucces);
    }
    async getSucces() {
        const res = await this.succesRepository.find();
        const times = res.map(succes => succes.timeTakenMs);
        const lastTime = times.pop();
        console.log('time is :', lastTime);
        return lastTime;
    }
};
SuccesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(succes_entity_1.Succes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SuccesService);
exports.SuccesService = SuccesService;
//# sourceMappingURL=succes.service.js.map