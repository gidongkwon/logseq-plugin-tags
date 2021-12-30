import React from 'react';
import { Tag } from 'types';

export const TagContext = React.createContext<Tag>({ name: '', usages: [] });
