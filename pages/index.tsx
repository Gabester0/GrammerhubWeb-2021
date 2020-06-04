import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const ShowLink = ({ show }) => (
  <li key={show.id}> 
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
      <a>{show.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const Index = (props) => (
  <React.Fragment>
    <Head key={5}>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content="For the team to write tags in here" />
      <meta name="author" content="Grammer Hub" />
      <title>Grammerhub | Level Up Your Coding Skills - Coming Soon</title>

      <link href='http://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css' />
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
          crossOrigin="anonymous" />

      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet"
          integrity="sha384-MI32KR77SgI9QAPUs+6R7leEOwtop70UsjEtFEezfKnMjXWx15NENsZpfDgq8m8S" crossOrigin="anonymous" />

      <link href="../static/coming-soon/index.css" rel="stylesheet" />
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" defer integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
            crossOrigin="anonymous"></script>
      <script defer src="../static/coming-soon/main.js"></script>
    </Head>

    <div className="gradient-bg" style={{minHeight: '100vh'}}>
      <div className="wrapper">
        <main>
          <div id="coming-soon">
              <div className="welcome-msg jumbo-box">
                <header>
                    <h1>Ready to Gain Experience?</h1>
                </header>
                <div className="container">
                    <div className="row">
                      <div className="col-md-6 col-md-push-3">
                          <p className="slogan">Our site is coming soon. Gather with a team of developers to practice in demand skills!</p>
                      </div>
                    </div>
                </div>

                <div className="join-us">
                    <a href="https://www.meetup.com/grammerhub/"><button className="join-us-btn">Learn More</button></a>
                    <form action="#" method="post" name="subscribe-form" className="notify-me subscribe-form">
                      <input type="email" name="subscribe" placeholder="SEND US AN EMAIL" className="form-control email subemail" />
                      <input type="submit" name="subsubmit" value="" className="btn btn-info subsubmit" />
                      <span className="form-message" style={{display: 'none'}}></span>
                    </form>
                </div>


              </div>
          </div>
        </main>
      </div>
    </div>
  </React.Fragment>
)

export default Index