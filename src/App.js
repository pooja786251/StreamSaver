import './App.css';
import Front from './ui/front';
import avtar from './Avatar-Profile-PNG-Photos.png';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <>
    
<inject/>
    <div className='body'>
  <Analytics />
    <Front/>
    <div className='bottom-nav'><h2 style={{marginRight:"20px"}}>Made by-</h2>
    <img className='bottom-image' alt="avtar" src={avtar}/>
    </div>
    </div>
    </>
  );
}

export default App;
