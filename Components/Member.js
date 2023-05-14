import { Container,Row,Col } from "react-bootstrap"
import dummy from '../public/images/dummy.png'
import Image from 'next/image'
import imageUrlFor from "../utils/imageUrlFor";

export default function Member({image,title,description}){
    return(
        <Col xl={4} lg={4} md={6}>
        <div className='card1'>
         <div><img src={imageUrlFor(image)
                        } className='Memimg' alt="Card Image"/></div>
         <div>
           <h2 className="heading1" style={{color:'#fff'}}>{title}</h2>
           <p className="body text"  style={{color:'#fff',fontWeight:'200'}}>{description}</p>
         </div>
        </div>
      </Col>
    )
}