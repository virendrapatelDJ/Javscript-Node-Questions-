const fs = require('fs/promises');

async function writeScripts(scripts) {
  const packageJsonFileName = `${__dirname}/package.json`;
  const packageJson = await fs.readFile(packageJsonFileName);
  const packageJsonObject = JSON.parse(packageJson.toString());
  const newData = JSON.stringify(
    {
      ...packageJsonObject,
      scripts,
    },
    null,
    2
  );
  await fs.writeFile(packageJsonFileName, newData);
}

async function readDir() {
  const jsFiles = await fs.readdir(__dirname);

  const scripts = jsFiles.reduce((scripts, path) => {
    const number = path.split('_')[0];
    if (number) {
      scripts[number] = `npx nodemon ${path}`;
    }
    return scripts;
  }, {});

  return scripts;
}

readDir().then(writeScripts);

// writeScripts();
