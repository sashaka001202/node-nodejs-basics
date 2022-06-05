import { writeFile, readFile } from 'fs/promises'
import path from  'path'
import { fileURLToPath } from 'url'



export const create = async () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const resultPath = path.join(__dirname,'files','fresh.txt')

    try {
        
        const writeF = writeFile(resultPath, 'I am fresh and young', {
          encoding: "utf8",
          flag: "ax",
        });
        // await readF;
        await writeF;

      } catch (error) {
        console.error('FS operation failed');
      }

};

create()