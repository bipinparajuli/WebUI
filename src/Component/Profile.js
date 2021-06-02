import React from 'react'
import {Card,Image,Button} from "react-bootstrap"
import img from '../assets/pg.png'
const Profile = ({name,src,profile}) => {
    return (
            <Card style={{ width: '18rem',border:"0" }}>
                <div style={{clipPath: "polygon(0 0,100% 0,100% 80%,0 100%)"}}>
                <Card.Img variant="top" src={img} />

                </div>
  <Card.Body style={{display:"flex",flexDirection:"column"}}>
  <Image style={{position:"relative",top:"-60px",objectFit:"contain",height:"50px",}} src={src} roundedCircle />
    <Card.Title style={{textAlign:"center"}}>{name}</Card.Title>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
    <Image style={{position:"relative",height:"40px",width:"40px",objectFit:"contain"}} src={profile}  />
    <Image style={{position:"relative",height:"40px",width:"40px",objectFit:"contain"}} src={profile}  />
 
    </div>
    
    <Button>
      View Profile
    </Button>
  </Card.Body>
</Card>
    )
}

export default Profile
