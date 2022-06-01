import {constants} from 'fs'
import {readdir, mkdir, copyFile} from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const oldPath = path.join(__dirname, 'files')
    const copyPath = path.join(__dirname, 'files_copy')

    try {

        const files = await readdir(oldPath, { withFileTypes: true });
        await mkdir(copyPath, { recursive: true });

        for (const file of files) {
            const srcName = path.join(oldPath, file.name);
            const destName = path.join(copyPath, file.name);
            await copyFile(srcName, destName,constants.COPYFILE_EXCL);

        }


    } catch (error) {
        console.error('FS operation failed');
    }

};

copy()