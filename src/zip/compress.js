import path from 'path';
import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';


export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const inputFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const outputFile = path.join(__dirname, 'files', 'archive.gz');

    
    const input = fs.createReadStream(inputFile, 'utf-8');
    const output = fs.createWriteStream(outputFile);
    const gzip = zlib.createGzip();
    
    pipeline(
        input,
        gzip,
        output,
        err => {
            if (err) {
                // обрабатываем ошибки
            }
        }
    );
};

compress()
