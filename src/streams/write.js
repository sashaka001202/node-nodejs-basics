import path from 'path';
import fs from 'fs';
const { stdin } = process;
import { fileURLToPath } from 'url';

export const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pafthFile = path.join(__dirname, 'files', 'fileToWrite.txt');
    const readableStream = fs.createWriteStream(pafthFile);

    stdin.on('data', data => {readableStream.write(data)});

};

write()
