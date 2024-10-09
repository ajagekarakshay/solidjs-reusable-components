import { renderComponent } from './ComponentPlayground.jsx';
import Navbar from '~/components/Navbar';

// Render Button component
renderComponent(Navbar);

// To render a different component, comment out the above line and uncomment the next line:
// renderComponent(Card, { title: 'Card Title', content: 'This is the card content.' });