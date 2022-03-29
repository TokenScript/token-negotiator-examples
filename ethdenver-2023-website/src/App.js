import { TokenContextProvider } from './TokenContextProvider';
import BookingPage from './pages/BookingPage';

const App = () => {
  return (
    <TokenContextProvider>
      <>
        <BookingPage/>
        <div className="overlay-tn"></div>
      </>
    </TokenContextProvider>
  )
}

export default App;

