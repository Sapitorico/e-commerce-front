interface ImportMetaEnv {
  readonly PORT: number;
  readonly BACK_END_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.css";
