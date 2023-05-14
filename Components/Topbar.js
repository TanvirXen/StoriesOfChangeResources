import React ,{ useState,useEffect } from 'react'


export default function Topbar(){
    const [State, setState] = useState({
        bgColor: [
            'linear-gradient(270deg, #A3F5C1 0%, #52ADE0 100%)',
            'linear-gradient(270deg, #6873CB 0%, #E3DEB3 100%)',
            'linear-gradient(270deg, #C990D5 0%, #A6DEE7 100%)',
            'linear-gradient(270deg, #C270B4 0%, #EFBB76 100%)'
        ],

        selectedColor: ''
    })
    function getRandom(){
        const item = State.bgColor[Math.floor(Math.random()*State.bgColor.length)];
        setState({selectedColor: item})
    }
    useEffect(() => {
        getRandom()
    }, [])

    return(  
    <div className='animate' style={{backgroundImage:`${State.selectedColor}`}}> 
        
     </div>
        )
 
}