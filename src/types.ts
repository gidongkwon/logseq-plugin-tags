import { QueryResultBlockEntity, QueryResultPageEntity } from 'logseqQueryResultTypes';

export type Tag = {
  name: string;
  usages: Array<QueryResultBlockEntity | QueryResultPageEntity>;
};

export type TagUsageType = 'block' | 'page';

export enum TagSortType {
  NameAsc = 'NameAsc',
  NameDesc = 'NameDesc',
  UsageAsc = 'UsageAsc',
  UsageDesc = 'UsageDesc',
}
