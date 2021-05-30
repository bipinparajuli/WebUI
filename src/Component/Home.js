import React from 'react'
import Layout from "../Layout/Layout"
import {Container,Row,Col,Image, Button} from "react-bootstrap"
import img from '../assets/hero.png'
import btnimg from '../assets/hero-story-people.png'
import Card from './Cards'
import {data} from '../Data.js/discover'
import {hot} from '../Data.js/hot'

const Home = () => {
    console.log(data);
    return (
        <Layout>
<Container>
    <Row>
        <Col>
        <Image src={img} />
        </Col>
        <Col>
        <Row style={{flexDirection:"column",justifyContent:"center",height:"634px"}}>
            <h1 style={{fontSize:"58px",fontWeight:"700",color:"#20114d",lineHeight:"110%",width:"420px"}}>Life is short and the world is wide !!</h1>
            <p style={{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"14px",color:"#424561",width:"320px"}}>To get the best of your adventure you just need to leave and go where you like. We are waiting for you.</p>
            <Row>
                <Col>
                <Button style={{backgroundColor:"#ee736e"}}>
                    Plan a trip
                </Button>
                </Col>
                <Col>
                <Button>
                    <Image source={btnimg}/>
                    Plan a trip
                </Button>
                </Col>
            </Row>
        </Row>
        </Col>
    </Row>

{/* discover section */}
<h1 style={{fontSize:"28px",marginBottom:"15px",fontWeight:"700",color:"#20114d",lineHeight:"110%"}}>Discover the touch of nature</h1>
<Row>




{
    data.map(src=>(
<Col>
        <Card img={src.src} />
</Col>
    ))
}
</Row>

{/* hot stories */}
<h1 style={{fontSize:"28px",marginBottom:"15px",fontWeight:"700",color:"#20114d",lineHeight:"110%"}}>Hot Stories</h1>
<Row>

{
hot.map(data=> (
<Col>
    <Card img={data.src} title={data.title} text={data.text} />
</Col>

))
}

</Row>

</Container>
        </Layout>
    )
}


export default Home
