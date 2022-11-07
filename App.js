import logo from './logo.svg';
import './App.css';
import Card from './Card';
import sdata from './sdata';


const App=()=>{
return(<>
<h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>

{

   sdata.map((val)=>{
    return(<>
      <Card
            id=  {val.id}
            imgsrc= {val.imgsrc}        
            tittle={val.tittle}
            Sname= {val.Sname}
            link=  {val.link}
   />
    </>)  
   })
}
  
{/* 
<Card
            imgsrc= {sdata[1].imgsrc}        
            tittle={sdata[1].tittle}
            Sname= {sdata[1].Sname}
            link=  {sdata[1].link}
   />
<Card
            imgsrc= {sdata[2].imgsrc}        
            tittle={sdata[2].tittle}
            Sname= {sdata[2].Sname}
            link=  {sdata[2].link}
   />
<Card
            imgsrc= {sdata[3].imgsrc}        
            tittle={sdata[3].tittle}
            Sname= {sdata[3].Sname}
            link=  {sdata[3].link}
   />
<Card
            imgsrc= {sdata[4].imgsrc}        
            tittle={sdata[4].tittle}
            Sname= {sdata[4].Sname}
            link=  {sdata[4].link}
   /> */}

</>)
}


 

export default App;

//https://career.infosys.com/jobs/jobapply?jobReferenceCode=PROGEN-External-144219&sourceId=41