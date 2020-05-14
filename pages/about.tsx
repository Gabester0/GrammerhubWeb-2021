import Layout from '../components/MyLayout'
import { Row, Container, Col} from 'react-bootstrap'
import css from './about.scss';
import Button from 'react-bootstrap/Button'


export default () => (
  <Layout>



    <Container fluid className={`${css.padding}`}>
      <Row className= {`${css.styling}`}>
        <Col sm={12} lg={6}>
        
          <div>
            <h5 className={`${css.title}`}>About Us</h5>
            <p>We are Grammers. Founded in 2019 we are a club that welcomes anyone who wants to learn (or level up!) their coding skills in a fun, collaborative environment. Our members come from varied backgrounds in tech and many other fields!
            We are Grammers. Founded in 2019 we are a club that welcomes anyone who wants to learn (or level up!) their coding skills in a fun, collaborative environment. Our members come from varied backgrounds in tech and many other fields!
            We are Grammers. Founded in 2019 we are a club that welcomes anyone who wants to learn (or level up!) their coding skills in a fun, collaborative environment. Our members come from varied backgrounds in tech and many other fields!
            We are Grammers. Founded in 2019 we are a club that welcomes anyone who wants to learn (or level up!) their coding skills in a fun, collaborative environment. Our members come from varied backgrounds in tech and many other fields!
            </p>
            <Button className={`${css.story}`} variant="outline-dark">Our Story</Button>
          </div>
         
        </Col>
        <Col sm={12} lg={6}>
        
        <div>
       <img className={`${css.photo}`} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"></img>
      
        </div>
      </Col>


      </Row>
      
    </Container>                                                                                                                                                                                                                          

    <Container fluid className={`${css.padding}`}>
      <Row className= {`${css.styling}`}>
      <Col sm={12} lg={6}>
        
        <div>
       <img className={`${css.photo}`} src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></img>
      
        </div>
      </Col>
      <Col sm={12} lg={6}>
        
        <div>
        <h5 className={`${css.title}`}>News</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </Col>

        <Col sm={12} lg={6}>
        
        <div className={`${css.icon}`}>
          <div className={`${css.colorme}`}>

          </div>
    
        </div>
      </Col>

      </Row>
      
    </Container>  


  </Layout>
)



