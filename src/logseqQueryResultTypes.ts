/**
 * Typings for logseq query result types.
 * Since query results are comming from directly from datascript,
 * there's some difference between official Typescript typings.
 * These helper types exist to make the code more sustainable,
 * by removing all of 'any' in the codebase.
 *
 * WARNING: Manually typed ones from query result are may not be perfect,
 * and can be changed over time by update of logseq.
 */

import { BlockEntity, IEntityID, PageEntity } from '@logseq/libs/dist/LSPlugin.user';

type QueryBlockUUID = {
  $uuid$: string;
};

export type QueryResultBlockEntity = {
  // Fields from original BlockEntity type
  content: BlockEntity['content'];
  format: BlockEntity['format'];
  id: BlockEntity['id'];
  left: BlockEntity['left'];
  parent: BlockEntity['parent'];
  unordered: BlockEntity['unordered'];
  page: BlockEntity['page'];
  anchor?: BlockEntity['anchor'];
  body?: BlockEntity['body'];
  children?: BlockEntity['children'];
  container?: BlockEntity['container'];
  meta?: BlockEntity['meta'];
  file?: IEntityID;
  level?: BlockEntity['level'];
  title?: BlockEntity['title'];

  // Fields different from original BlockEntity type
  uuid: QueryBlockUUID;

  // Fields from query result
  'pre-block?'?: boolean;
  'path-refs'?: Array<IEntityID>;
  refs?: Array<IEntityID>;
  properties?: any;
  [key: string]: any;
};

export type QueryResultPageEntity = {
  // Fields from original PageEntity type
  id: PageEntity['id'];
  'journal?': PageEntity['journal?'];
  name: PageEntity['name'];
  'original-name': PageEntity['originalName'];
  properties: Record<string, any>;
  file?: PageEntity['file'];
  namespace?: PageEntity['namespace'];
  format?: PageEntity['format'];
  journalDay?: PageEntity['journalDay'];

  // Fields different from original PageEntity type
  uuid: QueryBlockUUID;

  // Fields from query result
  'created-at': number;
  'updated-at': number;
  tags: Array<IEntityID>;
};
