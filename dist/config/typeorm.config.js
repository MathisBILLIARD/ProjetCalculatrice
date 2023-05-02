"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const error_entity_1 = require("../error/error.entity");
const succes_entity_1 = require("../succes/succes.entity");
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'junia_user',
    password: 'junia_user',
    database: 'junia',
    entities: [succes_entity_1.Succes, error_entity_1.Error],
};
//# sourceMappingURL=typeorm.config.js.map