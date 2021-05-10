declare module '@capacitor/core' {
  interface PluginRegistry {
    Kissmetrics: KissmetricsPlugin;
  }
}

export interface KissmetricsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
