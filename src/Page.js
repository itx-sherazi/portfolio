import React ,{useState}from 'react'


function Page(props) {
  
  
  return (
    <div>

     <div
    
    >    <img height={600} width={290}  marginLeft={'60px'} style={{paddingTop:'30px' , height:'600px',width:'230px',alignItems:'center' ,fontSize:'15px',paddingBottom:'10px' }} 
    src  = {currentImg} />
     <h4>{props.title}</h4> 
             </div>

    </div>
  )
}

export default Page