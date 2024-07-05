import { DotenvParseOutput, config } from "dotenv";
import { IConfigService } from "./config.interface";


export class ConfigService implements IConfigService {
    private config: DotenvParseOutput;
    constructor() {
        const { error, parsed } = config();
        if (error) {
            throw new Error('Didn`t find .env');
        }
        if (!parsed) {
            throw new Error('Blank .env!');
        }
        this.config = parsed;
    }

    get(key: string): string {
        const val = this.config[key];
        if (!val) {
            throw new Error(`cant find ${key} value in .env`);
        }
        return val;
    }

}