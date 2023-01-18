import './App.css';
import Photo  from './component/ProfilePhoto'
import { Name } from './component/FullName'
import { Adress } from './component/Adress'

function App() {
  return (
    <>
    <div className='profile'>
      <div className='Photo_pro'>
      <Photo />
      </div>
      <div className='Name_pro'>
        <Name />
      </div>
      <div className='Adress_pro'>
        <Adress />
      </div>
    </div>
    </>
  );
}

export default App;
