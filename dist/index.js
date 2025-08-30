"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeJyros = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const package_json_1 = require("./../package.json");
class ForgeJyros extends forgescript_1.ForgeExtension {
    name = 'Forge.Jyros';
    description = 'A Extension for Project Econome Bots';
    version = package_json_1.version;
    init() {
        this.load(__dirname + '/functions');
    }
    ;
}
exports.ForgeJyros = ForgeJyros;
;
//# sourceMappingURL=index.js.map