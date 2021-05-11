import { WebPlugin, registerWebPlugin } from '@capacitor/core';
import { KissmetricsProtocol, RecordEvent } from './definitions';

export class KissmetricsWeb extends WebPlugin implements KissmetricsProtocol {
  constructor() {
    super({
      name: 'Kissmetrics',
      platforms: ['web'],
    });
  }

  async initialize(options: { key: string }): Promise<{ value: string }> {
    console.log('Kissmetrics.initialize()', options);
    return { value: 'ok' };
  }

  async identify(options: { email: string }): Promise<{ value: string }> {
    console.log('Kissmetrics.identify()', options);
    return { value: 'ok' };
  }

  async record(options: RecordEvent): Promise<{ value: string }> {
    console.log('Kissmetrics.record()', options);
    return { value: 'ok' };
  }

  async clearIdentity(): Promise<{ value: string }> {
    console.log('Kissmetrics.clearIdentity()');
    return { value: 'ok' };
  }
}

const kissmetricsPluginInstance = new KissmetricsWeb();

export { kissmetricsPluginInstance };

registerWebPlugin(kissmetricsPluginInstance);
