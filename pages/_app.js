import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import '../styles/Menu.style.css'
import '../styles/Navbar.style.css'
import Menu from "../components/Menu/Menu";

export default function App({ Component, pageProps }) {
  return (
      <Menu>
        <Component {...pageProps} />
      </Menu>
  )
}
