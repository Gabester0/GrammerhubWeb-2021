import Layout from "../components/MyLayout";
import { Container, Jumbotron, Row, Col, Card } from 'react-bootstrap'

// pull data from db
// conditionally render loading images
// how to view? clickable card, button, view in a player component
// Lose Jumbotron?
// adjust vertical spacing of cards
// add media query to navbar bumper div: 24px small, 52px large


export default () => (
  <Layout>
    <div style={{ height: '52px', marginTop: '15px' }}></div>
      <Jumbotron>
          <h1>Media</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img 
                src="http://placekitten.com/1800/1800"
              />
              <Card.Body>
                <Card.Title>Bacon ipsum dolor amet</Card.Title>
                <Card.Text>esse alcatra leberkas, elit hamburger qui drumstick et pastrami.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img 
                src="http://placekitten.com/1500/1500"
              />
              <Card.Body>
                <Card.Title>Bacon ipsum dolor amet</Card.Title>
                <Card.Text>esse alcatra leberkas, elit hamburger qui drumstick et pastrami.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img 
                src="http://placekitten.com/1900/1900"
              />
              <Card.Body>
                <Card.Title>Bacon ipsum dolor amet</Card.Title>
                <Card.Text>esse alcatra leberkas, elit hamburger qui drumstick et pastrami.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img 
                src="http://placekitten.com/1200/1200"
              />
              <Card.Body>
                <Card.Title>Bacon ipsum dolor amet</Card.Title>
                <Card.Text>esse alcatra leberkas, elit hamburger qui drumstick et pastrami.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  </Layout>
);
