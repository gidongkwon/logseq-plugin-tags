import { AppUserConfigs } from '@logseq/libs/dist/LSPlugin';
import { Input } from 'components/Input';
import { TagSortOptions } from 'components/TagSortOptions';
import { useThemeMode } from 'hooks/useThemeMode';
import React, { useRef, useState } from 'react';
import { TagSortType } from 'types';
import { TagList } from './components/TagList';
import { useAppVisible } from './hooks/useAppVisible';
import { css, darkTheme } from './stitches.config';

const body = css({
  position: 'relative',
  height: '100%',

  '& ::-webkit-scrollbar': {
    width: '6px',
  },
  '& ::-webkit-scrollbar-corner': {
    background: '0 0',
  },
  '& ::-webkit-scrollbar-thumb': {
    backgroundColor: '$interactiveBorder',
  },
});

const app = css({
  position: 'absolute',
  top: 'calc(48px + $4)',
  right: '$4',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  backgroundColor: '$elevation0',
  borderRadius: '$2',
  padding: '$4',
  width: '400px',
  height: 'calc(100% - (48px + $4) * 2)',
  maxWidth: '50%',
  overflow: 'auto',

  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
});

type Props = {
  themeMode: AppUserConfigs['preferredThemeMode'];
};

export function App({ themeMode: initialThemeMode }: Props) {
  const innerRef = useRef<HTMLDivElement>(null);
  const isVisible = useAppVisible();
  const [filter, setFilter] = useState('');

  const [sortType, setSortType] = useState<TagSortType>(
    logseq.settings?.sortType ?? TagSortType.NameAsc,
  );
  const themeMode = useThemeMode(initialThemeMode);

  const handleSortTypeChange = (type: TagSortType) => {
    setSortType(type);
    logseq.updateSettings({ sortType: type });
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  if (isVisible) {
    return (
      <main
        className={`${body()} ${themeMode === 'dark' ? darkTheme.className : ''}`}
        onClick={e => {
          if (!innerRef.current?.contains(e.target as any)) {
            window.logseq.hideMainUI();
          }
        }}
      >
        <div ref={innerRef} className={app()}>
          <Input
            css={{ padding: '$3', borderRadius: '$2' }}
            size='2'
            placeholder='Search tags'
            onChange={handleSearchInputChange}
          />
          <TagSortOptions
            sortType={sortType}
            onSortTypeChange={handleSortTypeChange}
            css={{ alignSelf: 'center' }}
          />
          <TagList filter={filter} sortType={sortType} />
        </div>
      </main>
    );
  }

  return null;
}

export default App;
