import {constants} from 'fs'
import {readdir, mkdir, copyFile,readFile, rename as rn} from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const filesPath = path.join(__dirname,'files')
    const oldPathFilename = path.join(__dirname,'files','wrongFilename.txt')
    const newPathFilename = path.join(__dirname,'files','properFilename.md')

    try {
        
        await readFile(oldPathFilename,  {
          encoding: "utf8",
          flag: "r",
        });
       

        const files = await readdir(filesPath, { withFileTypes: true });

        for (const file of files) {
            if (file.name == 'properFilename.md'){
                console.error('FS operation failed');
                process.exit()
            }

        }
        await rn(oldPathFilename,newPathFilename)


      } catch (error) {
        console.error('FS operation failed');
      }

   

};

rename()