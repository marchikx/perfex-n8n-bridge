// Perfex discovers a module only through the "Module Name:" header of its main file,
// and buyers read the version from the README. All three must agree.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const main = fs.readFileSync(path.join(root, 'n8n_bridge', 'n8n_bridge.php'), 'utf8');
const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');

const failures = [];
const header = main.match(/^Module Name:\s*(.+)$/m);
const headerVersion = main.match(/^Version:\s*([\d.]+)\s*$/m);
const constant = main.match(/define\('N8N_BRIDGE_MODULE_VERSION',\s*'([\d.]+)'\)/);
const readmeVersion = readme.match(/\*\*Version ([\d.]+)\*\*/);

if (!header) failures.push('missing "Module Name:" header in n8n_bridge.php');
if (!headerVersion) failures.push('missing "Version:" header in n8n_bridge.php');
if (!constant) failures.push('missing N8N_BRIDGE_MODULE_VERSION constant');
if (!readmeVersion) failures.push('missing **Version x.y.z** line in README.md');

const versions = [headerVersion, constant, readmeVersion].map((m) => m && m[1]);
if (failures.length === 0 && new Set(versions).size !== 1) {
  failures.push(`version mismatch: header=${versions[0]} constant=${versions[1]} readme=${versions[2]}`);
}

if (failures.length) {
  failures.forEach((f) => console.error(`FAIL ${f}`));
  process.exit(1);
}
console.log(`ok - module header, constant and README all at ${versions[0]}`);
