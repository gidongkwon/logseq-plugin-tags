import { AppUserConfigs } from '@logseq/libs/dist/LSPlugin.user';
import { useEffect, useState } from 'react';
import { useMountedState } from './useMountedState';

// initialThemeMode should be injected through main function.
export function useThemeMode(
  initialThemeMode: AppUserConfigs['preferredThemeMode'],
): AppUserConfigs['preferredThemeMode'] {
  const [themeMode, setThemeMode] = useState(initialThemeMode);
  const isMounted = useMountedState();
  useEffect(() => {
    type ThemeModeChangedEvent = Parameters<Parameters<typeof logseq.App.onThemeModeChanged>[0]>[0];
    const handler = ({ mode }: ThemeModeChangedEvent) => {
      if (isMounted()) {
        setThemeMode(mode);
      }
    };
    logseq.App.onThemeModeChanged(handler);
  }, []);
  return themeMode;
}
