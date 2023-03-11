import dotenv from "dotenv";
dotenv.config();

interface ENV {
    PORT?: number;
    MONGO_URI?: string;
}

const getENV = (): ENV => {
    return {
        PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
        MONGO_URI: process.env.MONGO_URI
    };
};

const checkENVKeys = (config: ENV): Required<ENV> => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`);
        }
    }
    return config as Required<ENV>;
};

const ENV = getENV();

const checkedENV = checkENVKeys(ENV);

export default checkedENV;
