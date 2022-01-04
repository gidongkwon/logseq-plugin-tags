import { BlockEntity, PageEntity } from '@logseq/libs/dist/LSPlugin';

export type Tag = {
  name: string;
  usages: Array<BlockEntity | PageEntity>;
};

export type TagUsageType = 'block' | 'page';

export enum TagSortType {
  NameAsc = 'NameAsc',
  NameDesc = 'NameDesc',
  UsageAsc = 'UsageAsc',
  UsageDesc = 'UsageDesc',
}
