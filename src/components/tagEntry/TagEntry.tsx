import * as Collapsible from '@radix-ui/react-collapsible';
import React, { useContext, useState } from 'react';
import { keyframes, styled } from '../../stitches.config';
import RotatingArrow from '../RotatingArrow';
import { Text } from '../Text';
import { TagContext } from './TagContext';
import { TagUsageList } from './usageList/TagUsageList';

const StyledTag = styled(Collapsible.Root, {
  display: 'flex',
  flexDirection: 'column',
});

const StyledTagHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingY: '$1',
  paddingLeft: '$1',
  paddingRight: '$3',
  cursor: 'default',

  borderRadius: '$2',
  '&:hover': {
    backgroundColor: '$elevation0Hover',
  },
  [`& ${Text}`]: {
    cursor: 'default',
  },
});

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' },
});

const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 },
});

export const TagEntry = () => {
  const { name, usages } = useContext(TagContext);
  const [isUsageOpen, setUsageOpen] = useState(false);

  return (
    <StyledTag onOpenChange={setUsageOpen}>
      <Collapsible.Trigger asChild>
        <StyledTagHeader>
          <Text
            css={{
              transform: isUsageOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              marginRight: '$2',
              color: '$disabledText',
            }}
          >
            <RotatingArrow />
          </Text>
          <Text size='2' css={{ flex: 1 }}>
            {name}
          </Text>
          <Text
            size='1'
            css={{
              padding: '$2',
              borderRadius: '$1',
              backgroundColor: '$elevation1',
              color: '$lowContrast',
            }}
          >
            {usages.length}
          </Text>
        </StyledTagHeader>
      </Collapsible.Trigger>
      <Collapsible.Content asChild>
        <TagUsageList
          css={{
            marginLeft: '$3',
            overflow: 'hidden',
            '&[data-state="open"]': { animation: `${open} 200ms ease-out` },
            '&[data-state="closed"]': { animation: `${close} 200ms ease-out` },
          }}
        />
      </Collapsible.Content>
    </StyledTag>
  );
};
