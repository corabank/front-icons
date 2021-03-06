const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const util = require('util');

const globAsync = util.promisify(glob);

async function generateIndex() {
  const files = await globAsync(path.join('./src/icons/', '*.tsx'));
  const index = files
    .map((file: string) => {
      const typename = path.basename(file).replace('.tsx', '');
      return `export { ${typename} } from './icons/${typename}';\n`;
    })
    .join('');

  await fs.writeFile(path.join('./src/', 'index.tsx'), index);
}

async function main() {
  try {
    await generateIndex();

    console.info('Index file success created!');
  } catch (err) {
    console.error(err);
  }
}

main();
