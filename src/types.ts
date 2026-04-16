import { LovelaceCardConfig } from 'custom-card-helpers';

export interface ConfigWrapperCardConfig extends LovelaceCardConfig {
  type: string;
  config_url: string;
  cache_bust?: boolean;
  card?: LovelaceCardConfig;
}
