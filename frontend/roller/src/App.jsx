import {useEffect} from 'react';
import { Navbar } from './components/Navbar';
import './App.css';
import { Banner } from './components/Banner';

function App(){
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if(scrollPosition > 100){
        console.log('show')}
    })
  })
  

  return(
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  )
}

export default App;