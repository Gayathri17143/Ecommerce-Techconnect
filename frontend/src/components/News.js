import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import News from "../components/News";
import {News } from '../components/Newsdata';
import { LinkContainer } from 'react-router-bootstrap';
const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news data from API
    fetch('')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setNews(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Autoplay speed in milliseconds
    pauseOnHover: true,
  };

  return (
    <Container className="news-container" style={{paddingTop:"20px"}}>
      <h2>Recent News for Gadgets</h2>
      {/* <Slider {...settings}> */}
      <Row>
        {News.map((item, index) => (
          <Col md={4} sm={6} xs={12} style={{padding:"20px"}}>
          <div className="news-item" key={index}>
            <Card style={{ width: '18rem' }}>
              <img src={item.image} alt={item.title} style={{width:"100%!important"}}/>
              <Card.Body>
              
                <Card.Title>{item.title}</Card.Title> 
                <Card.Text>Date: {item.date}</Card.Text>
                <LinkContainer to={'/NewsProductPage'}><button  >View More</button></LinkContainer>
              </Card.Body>
            </Card>
          </div>
          </Col>
        ))}
         {News.map((item, index) => (
          <Col md={4} sm={6} xs={12} style={{padding:"20px"}}>
          <div className="news-item" key={index}>
            <Card style={{ width: '18rem' }}>
              <img src={item.image} alt={item.title} style={{width:"100%!important"}}/>
              <Card.Body>
              
                <Card.Title>{item.title}</Card.Title> 
                <Card.Text>Date: {item.date}</Card.Text>
                <LinkContainer to={'/NewsProductPage'}><button>View More</button></LinkContainer>
              </Card.Body>
            </Card>
          </div>
          </Col>
        ))}
        </Row>
      {/* </Slider> */}
    </Container>
  );
};

export default NewsComponent;
