declare module '@capacitor/core' {
  interface PluginRegistry {
    Kissmetrics?: KissmetricsProtocol;
  }
}

export interface KissmetricsProtocol {
  initialize(options : {key: string}): Promise<{ value: string }>;
  identify(options : {email: string}): Promise<{value: string}>;
  record(options : RecordEvent): Promise<{value: string}>;
  clearIdentity(): Promise<{value: string}>
}

export interface RecordEvent {
  event: string;
  properties: { [key: string]: any };
}

