'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/Redux-store/Redux-store';
function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
}

export default Provider;
