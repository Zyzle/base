export interface KeyedModel {
  $key?: string;
}

export interface Language extends KeyedModel {
  alias: string;
  displayName: string;
}

export interface Snippet extends KeyedModel {
  authorName: string;
  authorUID: string;
  code: string;
  createdDate: number;
  description: string;
  language: string;
  languageAlias: string;
  languageDisplayName: string;
  name: string;
  score: number;
  updatedDate: number;
}
