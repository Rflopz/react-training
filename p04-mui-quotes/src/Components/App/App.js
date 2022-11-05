import { Container } from '@mui/system';
import Providers from "../Providers"
import { Quotes } from '../Quote';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <Providers>
      <Header />
      <Quotes />
      <Footer />
    </Providers>
  );
}

export default App;
