import GenerateQuote from "./component/GenerateQuote";
import Quote from "./component/Quote";
import React,{useState, useEffect} from 'react';


function App() {
  const randomRGB = () => Math.floor(Math.random() * 256);
  const getRandomColor = () => 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';

  const [getFamousQuote,setgetFamousQuote] = useState(null);
  const [getAuthor,setgetAuthor]=useState(null)
  const [Color,setColor]=useState('cyan')

  const famousQuote=async() => {
    try{
     const res= await fetch("https://api.quotable.io/random")
     const data=await res.json()
     setgetFamousQuote(data.content)
     setgetAuthor(data.author)
     
     console.log(data)
    }catch(e){
      console.error(e)
    }
    setColor(getRandomColor)
 }
  useEffect(()=>{
    famousQuote()
  },[])
  
   
  return (
    <div className="main" style={{backgroundColor: Color}}>
    <div className="card ">
      <Quote title={getFamousQuote} author={getAuthor} color={Color}/>
      <GenerateQuote Click={famousQuote} color={Color}/>
    </div>
      <h4 style={developerName}>By Michael Webb</h4>
    </div>
  );
}

const developerName={
  textAlign:'center',
  color: 'white'
}
export default App;
