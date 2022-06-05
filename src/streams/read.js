import path from 'path';
import fs from 'fs';
const { stdout } = process;
import { fileURLToPath } from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pafthFile = path.join(__dirname, 'files', 'fileToRead.txt');
    const readableStream = fs.createReadStream(pafthFile);
    readableStream.on('data', chunk => stdout.write(chunk));
};

read()
