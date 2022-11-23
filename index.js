const { execSync } = require('child_process')

execSync('git pull');
execSync(`echo ${new Date().toTimeString()} > now.txt`);
execSync('git add .');
execSync('git commit -m "truly hard work"');
execSync('git push');