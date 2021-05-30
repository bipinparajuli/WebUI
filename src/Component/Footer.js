import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa'
import "./Footer.css"
const Footer = () => {
    return (
        <Container className="footer_main" style={{backgroundColor:"#5458ae"}} fluid>
            <Container>
                <Row style={{paddingTop:"5%",color:"white"}}>

                <Col style={{display:"flex",flexDirection:"column"}}>
                    <h4>Platform</h4>
                    <Link >Web Application</Link>
                    <Link>Mobile Application</Link>
                    <Link>Email Service</Link>

                </Col>
                <Col style={{display:"flex",flexDirection:"column"}}>
                <h4>Platform</h4>
                    <Link>Web Application</Link>
                    <Link>Mobile Application</Link>
                    <Link>Email Service</Link>

                </Col>
                <Col style={{display:"flex",flexDirection:"column"}}>
                <h4>Platform</h4>
                    <Link>Web Application</Link>
                    <Link>Mobile Application</Link>
                    <Link>Email Service</Link>

                </Col>
                <Col style={{display:"flex",flexDirection:"column"}}>
                <h4>Platform</h4>
                    <Link>Web Application</Link>
                    <Link>Mobile Application</Link>
                    <Link>Email Service</Link>

                </Col>
                </Row>

            </Container>
<Container className="footer_socail" fuild>
<Row>
    <Col>
    <h1>Travel</h1></Col>
    <Col>
    <Row style={{flexDirection:"column",textAlign:"center",marginLeft:"16%"}}>
        <Col className="icon_container" >
        <FaFacebook/>
        <FaInstagram />
        <FaTwitter />
        </Col>
<Col style={{fontSize:"10px"}}>
&#169; Travel Social Network,by Buddgged
</Col>
    </Row>
    </Col>

</Row>
</Container>
        </Container>
    )
}

export default Footer
