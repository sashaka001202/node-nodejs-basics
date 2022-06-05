import {readdir} from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

export const list = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const oldPath = path.join(__dirname, 'files')

    try {
        const files = await readdir(oldPath, { withFileTypes: true });

        for (const file of files) {
            console.log(file.name)
        }

    } catch (error) {
        console.error('FS operation failed');
    }

};

list()