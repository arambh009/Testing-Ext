import React,{useState} from 'react';
import './App.css';
const data=[
  {
    name:"Noysi",
    url:[""]
  },
  {
    name:"clickup",
    url:[""]
  },
  {
    name:"Attendance",
    url:[""]
  },
  {
    name:"employee info",
    url:["https://docs.google.com/spreadsheets/d/1p6-skdY64NPhVcJQXm-GXDVHqKpNgoqZ-8kRgBhMTQc/edit#gid=0"]
  }

]
function App() {
  const [lists,setLists]=useState(data);
  const openTabs=(url)=>{
    for(const link of url){
      window.open(link,"_blank")
    }
  }
  return (
    <div className="App">
      <h3>Choose your destination</h3>
      <div className='lists'>
        {lists && lists.map((item)=>{
          return (<button className='button-29' onClick={()=>{openTabs(item.url)}}>{item.name}</button>);
        })
        }
      </div>
    </div>
  );
}

export default App;
