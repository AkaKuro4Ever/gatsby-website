import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from "../components/layout"

const Sidebar = () => (
  <Layout>
    <Router >
      <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  </Layout>
)

const Contact = () => (
  <div>
    <Link to="/">Home</Link>
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
