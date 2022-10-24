import React,{useEffect,useState} from 'react'
import Body from './component/Body';
import Navbar from './component/Navbar';
import './App.css'
import Footer from './component/footer';


function App() {
  const [data, setdata] = useState(); 

    useEffect(() => {

      (async()=>{
          const res = await fetch('data.json')
          const d = await res.json()
         setdata(d)

      })();


    }, []);

  
    
  return (
    <div className='App'>
          <Navbar/>
          <Body movies={data}/>
          <Footer vlaue={""}/>
    </div>
  )
}

export default App