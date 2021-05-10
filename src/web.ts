import { WebPlugin } from '@capacitor/core';
import { KissmetricsPlugin } from './definitions';

export class KissmetricsWeb extends WebPlugin implements KissmetricsPlugin {
  constructor() {
    super({
      name: 'Kissmetrics',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const Kissmetrics = new KissmetricsWeb();

export { Kissmetrics };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Kissmetrics);
