import React from "react"
import About from "../components/About"
import Navbar from '../components/Navbar'
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default function index() {
  return (
    <>
    <Helmet>
      <title>Nolan Dyke</title>
      <meta name="description" content="nolan dyke"/>
    </Helmet>
      <Navbar />
      <div id="app">
        <p id="job-title">Web Developer / Software Engineer</p>
        <About />
        <a id="email" href="mailto:nolan.g.dyke@gmail.com">nolan.g.dyke@gmail.com</a>
      </div>
    </>
  )
}
