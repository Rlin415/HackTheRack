import { ChildProcess } from 'child_process';

interface ChildProcessModule {
  fork(path: String): ChildProcess;
}

const startItemsFetcher = (cp: ChildProcessModule) => {
  const child = cp.fork(__dirname + '/itemsFetcher.js');
}

export default startItemsFetcher;
