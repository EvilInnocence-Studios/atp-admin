import { execSync } from 'child_process';
import * as fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { table } from 'table';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = path.resolve(__dirname, '../src');
const repos = fs.readdirSync(srcDir).filter(dir => fs.existsSync(path.join(srcDir, dir, '.git')));

const getRepoStatus = (repoPath) => {
    const name = path.basename(repoPath);
    const statusOutput = execSync('git status --porcelain', { cwd: repoPath }).toString();
    const unstagedChanges = statusOutput.split('\n').some(line => line.startsWith(' M') || line.startsWith('??'));
    const changesToPush = execSync('git log origin/main..HEAD', { cwd: repoPath }).toString().trim().length > 0;
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: repoPath }).toString().trim();
    return { name, unstagedChanges, changesToPush, currentBranch };
};

const repoStatuses = repos.map(repo => getRepoStatus(path.join(srcDir, repo)));

const data = [
    ['Module', 'Branch', 'Unstaged Changes?', 'Changes to Push?'],
    ...repoStatuses.map(({ name, unstagedChanges, changesToPush, currentBranch }) => [
        unstagedChanges ? chalk.red(name) : changesToPush ? chalk.yellow(name) : name,
        currentBranch,
        unstagedChanges ? chalk.red('Yes') : 'No',
        changesToPush ? chalk.yellow('Yes') : 'No'
    ])
];

console.log(table(data));
