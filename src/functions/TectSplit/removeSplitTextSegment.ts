import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { SplitTextName } from "./textSplit";

export default new NativeFunction({
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
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [index]) {
        const arr = ctx.getEnvironmentInstance(Array, SplitTextName);
        arr!.splice(Number(index), 1);
        return this.success();
    },
});
