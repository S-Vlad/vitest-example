import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';

import { AppProviders } from './app-providers';
import { MuiMode } from './components/mui-mode';
import { Form } from './components/form';
import { Skills } from './components/skills';
import { CounterWithProps } from './components/counter-with-props';
import { CounterWithState } from './components/counter-with-state';
import { Users } from './components/users';

function App() {
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <AppProviders>
        <MuiMode />
        <Form />
        <Skills skills={['Vitest', 'React Testing Library']} />
        <CounterWithState />
        <CounterWithProps count={101} />
        <Users />
      </AppProviders>
    </QueryClientProvider>
  );
}

export default App;
