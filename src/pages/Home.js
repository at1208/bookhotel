import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Navbar1 from '../components/Navbar1/Navbar1'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

export default function Home() {
    return (
        <>
            <Navbar1 />
            <br /><br />
            <MDBRow>
                <MDBCol size="4"><MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
          </MDBCardText>
                        <MDBBtn href="#">MDBBtn</MDBBtn>
                    </MDBCardBody>
                </MDBCard></MDBCol>
                <MDBCol size="4"><MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
          </MDBCardText>
                        <MDBBtn href="#">MDBBtn</MDBBtn>
                    </MDBCardBody>
                </MDBCard></MDBCol>
                <MDBCol size="4"><MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
          </MDBCardText>
                        <MDBBtn href="#">MDBBtn</MDBBtn>
                    </MDBCardBody>
                </MDBCard></MDBCol>
            </MDBRow>
            <br /><br />
            <Hero>
                <Banner title="luxurious room" subtitle="deluxe rooms starting at ₹5000">
                    <Link to='/rooms' className='btn-primary'>
                        our rooms
                </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}

Hero.defaultProps = {
    hero: 'defaultHero'
}
