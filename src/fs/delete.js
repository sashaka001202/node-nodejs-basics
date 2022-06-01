import { rm} from 'fs/promises'
import path from  'path'
import { fileURLToPath } from 'url'



export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const resultPath = path.join(__dirname,'files','fileToRemove.txt')

    try {
        
        const deleteF = rm(resultPath);

        await deleteF;

      } catch (error) {
        console.error('FS operation failed');
      }

};

remove()