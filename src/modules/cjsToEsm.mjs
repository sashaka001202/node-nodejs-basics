import path from  'path';
import { fileURLToPath}  from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __files = path.join('file:///',__dirname,'files');
const random = Math.random();

import {readFile} from 'fs/promises';

import(path.join(__files,'c.js')).then(() => {});


let unknownObject;

if (random > 0.5) {
    unknownObject = await readFile(path.join(__dirname,'files','a.json'), 'utf8');
} else {
    unknownObject = await readFile(path.join(__dirname,'files','b.json'), 'utf8');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer };

