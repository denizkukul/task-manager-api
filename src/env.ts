// import path from "path";
import dotenv from "dotenv";
dotenv.config();
// Parsing the env file.
// dotenv.config({ path: path.resolve(__dirname, "../config/config.env") });


// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
    //   NODE_ENV: string | undefined;
    PORT?: number;
    MONGO_URI?: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
    return {
        // NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
        MONGO_URI: process.env.MONGO_URI
    };
};

const getSanitzedConfig = (config: ENV): Required<ENV> => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`);
        }
    }
    return config as Required<ENV>;
};

const config = getConfig();

const env = getSanitzedConfig(config);

export default env;
