import React from "react"
import Placeholder from "../components/Placeholder"
import Navbar from '../components/Navbar'
import { Link } from "gatsby"

export default function index() {
  return (
    <>
      <Navbar />
      <div id="app">
        <p id="job-title">Web Developer / Software Engineer</p>
        <Placeholder />
        <a id="email" href="mailto:nolan.g.dyke@gmail.com">nolan.g.dyke@gmail.com</a>
      </div>
    </>
  )
}
