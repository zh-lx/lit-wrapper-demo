import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

/** This script renames type declaration files generated by `vue-tsc` from
 * e.g. `ElementName.vue.d.ts` to `ElementName.d.ts` so that they match
 * generated component names of e.g. `ElementName.ts`.
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = `${__dirname}/..`;
const files = fs.readdirSync(root);
for (const file of files) {
  if (file.endsWith('.vue.d.ts')) {
    fs.renameSync(
      `${root}/${file}`,
      `${root}/${file.replace('.vue.d.ts', '.d.ts')}`,
      (err) => {
        console.log(err);
      }
    )
  }
}
