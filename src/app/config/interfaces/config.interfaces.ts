
// tslint:disable-next-line:no-empty-interface
export interface GetConfigParams {
}

export interface GetConfigResponse {
  config?: Config;
}

export interface Config {

  modes?: {
    cmv?: {
      enable?: boolean;
      readOnly?: boolean;
    };
    ac?: {
      enable?: boolean;
      readOnly?: boolean;
    };
    simv?: {
      enable?: boolean;
      readOnly?: boolean;
    };
    pcv?: {
      enable?: boolean;
      readOnly?: boolean;
    };
    ps?: {
      enable?: boolean;
      readOnly?: boolean;
    };
  };

  sensors?: {
    pressure?: {
      enable?: boolean;
      readOnly?: boolean;
    };
    flow?: {
      enable?: boolean;
      readOnly?: boolean;
    };
  };

  controls?: {
    rate?: {
      enable?: boolean;
      readOnly?: boolean;
    };
    compressionPercentage?: {
      enable?: boolean;
      readOnly?: boolean;
    };
    maxPressure?: {
      enable?: boolean;
      readOnly?: boolean;
    };
    inspiratoryPressure?: {
      enable?: boolean;
      readOnly?: boolean;
    };
    peakFlow?: {
      enable?: boolean;
      readOnly?: boolean;
    };
    ieRatio?: {
      enable?: boolean;
      readOnly?: boolean;
    };
    trigger?: {
      enable?: boolean;
      readOnly?: boolean;
    };
    fio2?: {
      enable?: boolean;
      readOnly?: boolean;
    };
  };

}

