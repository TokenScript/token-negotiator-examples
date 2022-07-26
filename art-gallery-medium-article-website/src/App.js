import { TokenContextProvider } from './TokenContextProvider';
import StoreFront from './StoreFront';

const App = () => {
  return (
    <TokenContextProvider>
        <StoreFront />
    </TokenContextProvider>
  )
}

export default App;