"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const textSplit_1 = require("./textSplit");
exports.default = new forgescript_1.NativeFunction({
    name: "$removeSplitTextElement",
    version: "1.0.0",
    description: "Removes an element from the split array at the specified index",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index to remove from the split array",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [index]) {
        const arr = ctx.getEnvironmentInstance(Array, textSplit_1.SplitTextName);
        arr.splice(Number(index), 1);
        return this.success();
    },
});
//# sourceMappingURL=removeSplitTextSegment.js.map