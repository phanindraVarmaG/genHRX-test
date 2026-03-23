import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { greet } from '../../../../packages/utils';

const StyledApp = styled.div`
  /* Your style here */
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="web" />
      <p>{greet('Web User')}</p>
    </StyledApp>
  );
}

export default App;
