export const parseEnv = () => {

    const argsEnv = Object.keys(process.env);
    const prefArg = 'RSS_';
    const resultArr = [];

    for (const key in argsEnv) {

        if (argsEnv[key].slice(0, 4) === prefArg) {
            resultArr.push(`${argsEnv[key]}=${process.env[argsEnv[key]]}`)
        }

    }
    console.log(resultArr.join('; '))
};

parseEnv()