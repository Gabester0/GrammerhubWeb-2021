import Layout from '../components/MyLayout'
import css from './Header.scss' 



export default () => (
  <Layout> 
    
    <div className="row justify-content-center mt-1 pt-4">
    <div className="card col-lg-12card bg-dark text-white">
        <img className="card-img" src="https://place-hold.it/820x260" alt="Card image"></img>
  <div className="card-img-overlay">
    <h1 className="text-center">Welcome to Grammerhub!</h1>
  
    
</div>
  </div>
  </div>


  




  <section className="container-fluid pt-4">
    <div className="row justify-content-center">
    <div className="card col-lg-4 pl-4 pr-4 ml-4 mr-4">
        <img className="card-img-top" src="https://www.fillmurray.com/400/400" alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title text-center">About Us</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
  </div>


    <div className="card col-lg-4 pl-4 pr-4 ml-4 mr-4">
    <img className="card-img-top" src="https://www.fillmurray.com/400/400" alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title text-center">In the News</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
  </div>
</div>
</section>
  
<div className="row justify-content-center mt-1 pt-4">
    <div className="card col-lg-12card bg-dark text-white">
        <img className="card-img" src="https://place-hold.it/820x260" alt="Card image"></img>
  <div className="card-img-overlay">
    <h1 className="text-center">Recent Projects</h1>
  
    
</div>
  </div>
  </div>


  </Layout>
)
