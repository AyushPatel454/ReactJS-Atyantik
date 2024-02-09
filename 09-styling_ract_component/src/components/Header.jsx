import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p style={{
        backgroundColor: 'purple',
        color: 'white',
        textAlign: 'center', // text-align ---> textAlign -:OR:- 'text-align'
        'margin-left': '90px' // margin-left ---> marginLeft -:OR:- 'margin-left'
      }}>A community of artists and art-lovers.</p>
    </header>
  );
}
