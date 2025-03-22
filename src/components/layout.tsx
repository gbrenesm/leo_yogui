import * as React from 'react';
import { Link } from 'gatsby';

interface ModalRendererProps {
  pageTitle: string;
  children: React.ReactNode;
};

const navStyle = {
  backgroundColor: "#859c80",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const Layout = (props: ModalRendererProps) => {
  return (
    <>
      <nav style={ navStyle }>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sobre-mi">Sobre mí</Link></li>
          <li><Link to="/psicoterapia">Psicoterapia</Link></li>
          <li><Link to="/yoga-sensible-trauma">Yoga Sensible a Trauma</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <main>
        { props.children }
      </main>
    </>
  )
};

export default Layout;
