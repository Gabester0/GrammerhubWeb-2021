import Layout from "../components/MyLayout";
import { Container, Jumbotron, Row, Col, Media, Card } from 'react-bootstrap'

export default () => (
  <Layout>
    <div style={{ height: '52px', marginTop: '15px' }}></div>
      <Jumbotron>
          <h1>Video</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.img 
                src="http://placekitten.com/90/90"
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
