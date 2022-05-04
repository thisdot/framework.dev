interface ImportMetaEnv {
    readonly PUBLIC_FRAMEWORK: string;
    MODE: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }