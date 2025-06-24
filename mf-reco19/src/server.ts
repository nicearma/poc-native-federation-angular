import { initNodeFederation } from '@softarc/native-federation-node';

(async () => {

  await initNodeFederation({
    relBundlePath: './dist/mf-reco19/browser/'
  });

  await import('./bootstrap-server');

})();
