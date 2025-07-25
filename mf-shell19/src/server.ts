import { initNodeFederation } from '@softarc/native-federation-node';

console.log('Starting SSR for Shell');

(async () => {
  console.log('init federation - server');
  await initNodeFederation({
    remotesOrManifestUrl: './public/federation.manifest.json',
    relBundlePath: './dist/mf-shell19/browser/',
  });

  await import('./bootstrap-server');
})();
