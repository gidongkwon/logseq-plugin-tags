import { Input } from 'components/Input';
import React, { useRef, useState } from 'react';
import { TagList } from './components/TagList';
import { useAppVisible } from './hooks/useAppVisible';
import { css } from './stitches.config';

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
  const themeMode = useThemeMode(initialThemeMode);

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
          <TagList filter={filter} />
        </div>
      </main>
    );
  }

  return null;
}

export default App;
