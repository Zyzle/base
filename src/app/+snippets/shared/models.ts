export interface Snippet {
  authorUID: string;
  authorName: string;
  code: string;
  createdDate: number;
  description: string;
  language: string;
  languageAlias: string;
  languageDisplayName: string;
  name: string;
  updatedDate: string;
  $key?: string;
  $value?: any;
}

export interface Language {
  alias: string;
  displayName: string;
  $key: string;
}
