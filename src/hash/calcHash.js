import { readFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { createHash } from 'crypto'



export const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const resultPath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

    try {

        const data = await readFile(resultPath, 'utf8');
        console.log(data);
        const hash = createHash('sha256')
            .update(data).digest("hex");
        console.log(hash);

    } catch (error) {
        console.error('FS operation failed');
    }

};

calculateHash()


