import { Input } from 'components/Input';
import React, { useRef, useState } from 'react';
import { TagList } from './components/TagList';
import { useAppVisible } from './hooks/useAppVisible';
import { css } from './stitches.config';

const body = css({
  height: '100%',
});

const app = css({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  backgroundColor: 'white',
  borderRadius: '$2',
  padding: '$4',
  width: '500px',
  height: '100%',
  maxWidth: '50%',
  overflow: 'auto',
});

function App() {
  const innerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isVisible = useAppVisible();
  const [filter, setFilter] = useState('');

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  if (isVisible) {
    return (
      <main
        className={body()}
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
