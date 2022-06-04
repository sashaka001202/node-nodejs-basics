const { stdin, stdout} = process;
import { Transform } from "stream";

export const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, chunk.toString().trim().split('').reverse().join('')+'\n');},
      });

      stdin.pipe(reverse).pipe(stdout);
};

transform()
