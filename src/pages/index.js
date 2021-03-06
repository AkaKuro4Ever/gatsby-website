import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Router >
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </div>
    </Router>
  </Layout>
)

const Contact = () => (
  <div>
    <a href="email: deborahseow9@gmail.com">Email Me</a>
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default IndexPage
