/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SnippetFilterPipe } from './snippet-filter.pipe';

import { Snippet } from '../../shared';

const testData: Snippet[] = [
  {
    authorUID: '',
    authorName: '',
    code: '',
    createdDate: 0,
    description:  'ddd',
    language: '',
    languageAlias: '',
    languageDisplayName: '',
    name: 'aaa',
    updatedDate: 0,
    score: 0
  },
  {
    authorUID: '',
    authorName: '',
    code: '',
    createdDate: 0,
    description:  'eee',
    language: '',
    languageAlias: '',
    languageDisplayName: '',
    name: 'bbb',
    updatedDate: 0,
    score: 0
  },
  {
    authorUID: '',
    authorName: '',
    code: '',
    createdDate: 0,
    description:  'fff',
    language: '',
    languageAlias: '',
    languageDisplayName: '',
    name: 'ccc',
    updatedDate: 0,
    score: 0
  },
  {
    authorUID: '',
    authorName: '',
    code: '',
    createdDate: 0,
    description:  'ggg',
    language: '',
    languageAlias: '',
    languageDisplayName: '',
    name: 'ddd',
    updatedDate: 0,
    score: 0
  }
];

beforeEach(() => {
  this.pipe = new SnippetFilterPipe();
});

describe('Pipe: SnippetFilter', () => {
  it('create an instance', () => {
    expect(this.pipe).toBeTruthy();
  });

  it('should return the list unchanged when not given a parameter', () => {
    let unaltered = this.pipe.transform(testData, null);
    expect(unaltered).toBe(testData);
  });

  it('should filter by name', () => {
    let byName = this.pipe.transform(testData, 'a');
    expect(byName.length).toEqual(1);
  });

  it('should filter by description', () => {
    let byDesc = this.pipe.transform(testData, 'ggg');
    expect(byDesc.length).toEqual(1);
  });

  it('should filter name and desc together', () => {
    let byNameDesc = this.pipe.transform(testData, 'dd');
    expect(byNameDesc.length).toEqual(2);
  });

});
