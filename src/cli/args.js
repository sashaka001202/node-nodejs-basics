export const parseArgs = () => {
    let prop = ''

    for (let j = 2; j < process.argv.length; j = j + 2) {
        prop = prop + (process.argv[j].slice(2)) + ' is ' + (process.argv[j + 1]) + ', '
    }
    
    console.log(prop.slice(0, -2))
};

parseArgs()