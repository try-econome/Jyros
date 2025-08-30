import { ForgeExtension } from '@tryforge/forgescript';
import { version } from './../package.json'

export class ForgeJyros extends ForgeExtension {
    name = 'Forge.Jyros';
    description = 'A Extension for Project Econome Bots';
    version = version;

    public init () {
        this.load(__dirname + '/functions');
    };
};