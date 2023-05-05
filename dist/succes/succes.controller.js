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
exports.SuccesController = void 0;
const common_1 = require("@nestjs/common");
const succes_service_1 = require("./succes.service");
let SuccesController = class SuccesController {
    constructor(succesService) {
        this.succesService = succesService;
    }
    getSucces() {
        console.log('get time');
        return this.succesService.getSucces();
    }
    createSucces(timeTakenMs, created_at) {
        return this.succesService.createSucces(timeTakenMs, created_at);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuccesController.prototype, "getSucces", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('timeTakenMs')),
    __param(1, (0, common_1.Body)('created_at')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Date]),
    __metadata("design:returntype", void 0)
], SuccesController.prototype, "createSucces", null);
SuccesController = __decorate([
    (0, common_1.Controller)('calculatrice'),
    __metadata("design:paramtypes", [succes_service_1.SuccesService])
], SuccesController);
exports.SuccesController = SuccesController;
//# sourceMappingURL=succes.controller.js.map