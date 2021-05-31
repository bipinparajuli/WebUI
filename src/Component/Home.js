import React from 'react'
import Layout from "../Layout/Layout"
import {Container,Row,Col,Image, Button} from "react-bootstrap"
import img from '../assets/hero.png'
import btnimg from '../assets/hero-story-people.png'
import Card from './Cards'
import {data} from '../Data.js/discover'
import {hot} from '../Data.js/hot'
import {rust} from '../Data.js/rust'
import './Home.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1,
        slidesToShow: 2,
        slidesToScroll: 1
      };
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <Layout>
<Container fluid>
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

<Carousel responsive={responsive}>
{/* <Row> */}

{
hot.map(data=> (
<Col>
    <Card img={data.src} title={data.title} text={data.text} />
</Col>

))
}

{/* </Row> */}
</Carousel>

{/* RUSH */}

<h1 style={{fontSize:"28px",marginBottom:"15px",fontWeight:"700",color:"#20114d",lineHeight:"110%"}}>Adrenaline Rush</h1>
<Row>




{
    rust.map(src=>(
<Col>
        <Card img={src.src} />
</Col>
    ))
}
</Row>
</Container>

{/* last banner */}
<Container style={{backgroundColor:"#5458ae"}} fluid>
<Container >
<Row style={{flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white"}}>
    <Col>
    <h1 style={{textAlign:"center",fontSize:"30px",fontWeight:"700",marginTop:"10%"}}>So far and counting ...</h1>
    </Col>
    <Col>
    <Row className="num">
        <Col>    
        <h3>125</h3>
        <p>Degisnation</p>
        </Col>
        <Col><h3>125</h3>
        <p>Degisnation</p>
        </Col>
        <Col><h3>125</h3>
        <p>Degisnation</p>
        </Col>
        <Col><h3>125</h3>
        <p>Degisnation</p>
        </Col>
        <Col><h3>125</h3>
        <p>Degisnation</p>
        </Col>
    </Row>
    </Col>
    <Col style={{marginBottom:"10%",textAlign:"center"}}>
    <Button className="btn_last">Join Us</Button>
    <Button className="btn_second">Send Feedback</Button>
    
    </Col>
    <hr />
</Row>

</Container>
</Container>

</Container>
        </Layout>
    )
}


export default Home
