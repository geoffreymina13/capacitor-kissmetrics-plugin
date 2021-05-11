// import { Plugins } from '@capacitor/core';
// import { KissmetricsProtocol, RecordEvent } from './definitions';
//
// const { KissmetricsPlugin } = Plugins;
//
// export class Kissmetrics implements KissmetricsProtocol {
//
//   initialize(options : {key: string}): Promise<{ value: string }> {
//     return KissmetricsPlugin.initialize(options);
//   }
//
//   identify(options : {email: string}): Promise<{value: string}>{
//     return KissmetricsPlugin.identify(options);
//   }
//
//   record(options : RecordEvent): Promise<{value: string}> {
//     return KissmetricsPlugin.record(options);
//   }
//
//   clearIdentity(): Promise<{value: string}> {
//     return KissmetricsPlugin.clearIdentity();
//   }
// }