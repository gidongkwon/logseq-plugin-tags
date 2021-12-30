import { useEffect, useState } from 'react';
import { useMountedState } from './useMountedState';

export function useAppVisible() {
  const [visible, setVisible] = useState(logseq.isMainUIVisible);
  const isMounted = useMountedState();
  useEffect(() => {
    const eventName = 'ui:visible:changed';
    const handler = async ({ visible }: any) => {
      if (isMounted()) {
        setVisible(visible);
      }
    };
    logseq.on(eventName, handler);
    return () => {
      logseq.off(eventName, handler);
    };
  }, [isMounted]);
  return visible;
}
