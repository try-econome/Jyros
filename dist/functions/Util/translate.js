"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const google_translate_1 = __importDefault(require("@iamtraction/google-translate"));
exports.default = new forgescript_1.NativeFunction({
    name: "$translateText",
    version: "1.1.3",
    description: "translates text into another language.",
    brackets: true,
    args: [
        {
            name: "text",
            description: "text to translate",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "to",
            description: "The Language to translate to",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "from",
            description: "The Language to translate from.",
            type: forgescript_1.ArgType.String,
            required: false,
            rest: false
        }
    ],
    unwrap: true,
    async execute(ctx, [text, toLang, fromLang]) {
        try {
            const res = await (0, google_translate_1.default)(text, { from: fromLang ?? "auto", to: toLang });
            return this.success(res.text);
        }
        catch (e) {
            return this.customError(`Translation failed`);
        }
    }
});
//# sourceMappingURL=translate.js.map