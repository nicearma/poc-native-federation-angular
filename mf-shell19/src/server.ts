import { initNodeFederation } from '@softarc/native-federation-node';

console.log('Starting SSR for Shell');

(async () => {

  await initNodeFederation({
    remotesOrManifestUrl: './dist/mf-shell19/browser/federation.manifest.json',
    relBundlePath: './dist/mf-shell19/browser/',
  });

  await import('./bootstrap-server');

})();
