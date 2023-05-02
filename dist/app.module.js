"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const succes_module_1 = require("./succes/succes.module");
const error_module_1 = require("./error/error.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const succes_entity_1 = require("./succes/succes.entity");
const error_entity_1 = require("./error/error.entity");
const succes_controller_1 = require("./succes/succes.controller");
const error_controller_1 = require("./error/error.controller");
const succes_service_1 = require("./succes/succes.service");
const error_service_1 = require("./error/error.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig), typeorm_1.TypeOrmModule.forFeature([succes_entity_1.Succes]), typeorm_1.TypeOrmModule.forFeature([error_entity_1.Error]), succes_module_1.SuccesModule, error_module_1.ErrorModule],
        controllers: [app_controller_1.AppController, succes_controller_1.SuccesController, error_controller_1.ErrorController],
        providers: [app_service_1.AppService, succes_service_1.SuccesService, error_service_1.ErrorService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map