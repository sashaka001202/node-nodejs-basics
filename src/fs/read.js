import { writeFile, readFile} from 'fs/promises'
import path from  'path'
import { fileURLToPath } from 'url'



export const read = async () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const resultPath = path.join(__dirname,'files','fileToRead.txt')

    try {
        
        const data = await readFile(resultPath, 'utf8');
        console.log(data);

      } catch (error) {
        console.error('FS operation failed');
      }

};

read()