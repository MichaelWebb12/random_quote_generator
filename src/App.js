import GenerateQuote from "./component/GenerateQuote";
import Quote from "./component/Quote";
import React,{useState, useEffect} from 'react';
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const randomRGB = () => Math.floor(Math.random() * 256);
  const getRandomColor = () => 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';

  const [getFamousQuote,setgetFamousQuote] = useState(null);
  const [getAuthor,setgetAuthor]=useState(null)
  const [Color,setColor]=useState(getRandomColor)
  const [Loading,setLoading]=useState(false)

  const famousQuote=async() => {
    try{
     const res= await fetch("https://api.quotable.io/random")
     const data=await res.json()
     setgetFamousQuote(data.content)
     setgetAuthor(data.author)
    }catch(e){
      console.error(e)
    }
    setColor(getRandomColor)
    setLoading(true)
 }
  useEffect(()=>{
    famousQuote()
    
  },[])
  
   
  return (
    <div className="main" style={{backgroundColor: Color}}>
    <div className="card ">
      {Loading ? <Quote title={getFamousQuote} author={getAuthor} color={Color}/>
      : <ClipLoader color={Color}  size={100} />
      }
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
