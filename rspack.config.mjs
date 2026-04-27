import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';
import { withESAD } from '@codemoreira/esad/plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Federated Module Configuration
 * Powered by ESAD Zero-Config Plugin
 */
export default Repack.defineRspackConfig((env) => {
  return withESAD(env, {
    type: 'module',
    id: 'esad-template-module',
    dirname: __dirname,
  });
});
