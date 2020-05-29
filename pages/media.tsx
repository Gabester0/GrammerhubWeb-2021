import Layout from "../components/MyLayout";
import { Container, Jumbotron, Row, Col, Card } from 'react-bootstrap'
import MediaCard from '../components/Media/MediaCard'
// pull data from db
let data = [{ id: 1, link: "https://www.youtube.com/embed/OqDANG7tCFc", title: "Grammerhub 002: React Part II", text: "Our March 16th 2020 meetup"}, { id: 2, link: "https://www.youtube.com/embed/wnA_mWbzvkc", title: "Placeholder 1", text: "Placeholder"}, { id: 3, link: "https://www.youtube.com/embed/tpiyEe_CqB4", title: "Placeholder 2", text: "Placeholder"}, { id: 4, link: "https://www.youtube.com/embed/Uj1ykZWtPYI", title: "Placeholder 3", text: "Placeholder"}]

// conditionally render loading images
// how to view? clickable card, button, view in a player component
// Lose Jumbotron? <-- depends on site style
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
          {data.map(video => 
            <MediaCard key={video.id} link={video.link} title={video.title} text={video.text} />
          )}
        </Row>
      </Container>
  </Layout>
);
