import { PageEntity } from '@logseq/libs/dist/LSPlugin';

// https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
export function escapeRegExp(s: string) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export function isPage(blockOrPage: any): blockOrPage is PageEntity {
  return blockOrPage.hasOwnProperty('tags');
}

export function orderBy<T>(retriever: (v: T) => number, desc?: boolean): (a: T, b: T) => number {
  return desc
    ? (rhs, lhs) => retriever(lhs) - retriever(rhs)
    : (lhs, rhs) => retriever(lhs) - retriever(rhs);
}
