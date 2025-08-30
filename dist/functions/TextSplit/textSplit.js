"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitTextName = void 0;
const forgescript_1 = require("@tryforge/forgescript");
exports.SplitTextName = "splits";
exports.default = new forgescript_1.NativeFunction({
    name: "$textSplit",
    version: "1.2.0",
    description: "Creates an array on given text with a separator",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to split",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String
        },
        {
            name: "separator",
            description: "The separator to use",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String
        }
    ],
    execute(ctx, [text, sep]) {
        ctx.setEnvironmentKey(exports.SplitTextName, text.split(sep));
        return this.success();
    },
});
//# sourceMappingURL=textSplit.js.map