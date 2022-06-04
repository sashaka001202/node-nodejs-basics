import { Worker } from 'worker_threads';
import os from 'os'
import path from  'path'
import { fileURLToPath } from 'url'

export const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const resultPath = path.join(__dirname,'worker.js')
    const numberCPU = os.cpus().length
    let workersResult = []

    const runService = (workerData) => {
        return new Promise((resolve) => {

            const worker = new Worker(resultPath, { workerData });
            worker.on('message', (data) => {
                resolve({
                    status: 'resolved',
                    data: data,
                });
            })
            worker.on('error', (e) => {
                resolve({
                    status: 'error',
                });
            })
        })
    }

    const run = async () => {
        for (let index = 0; index < numberCPU; index++) {
            const result = await runService(index + 10)
            workersResult.push(result)
        }
        console.log(workersResult);
    }
    run()

};

performCalculations()