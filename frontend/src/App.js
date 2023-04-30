import Questions from './Questions/Questions.jsx'
import Banner from './Banner/Banner.jsx';
import Footer from './Footer/Footer.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faBlog)

function App() {
  return (
    <>
      <Banner />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
