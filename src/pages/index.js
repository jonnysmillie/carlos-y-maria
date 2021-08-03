import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import JSONData from "../data/data.json"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="main-text text-center">
        <h2 className="text-center text-light my-5"><strong>May the years ahead be filled with lasting joy.</strong></h2>
        <h3>Here's a little something just for you!</h3>
    </div>
    <div className="container">
    <div className="row">
      <br />
      <div className="col-12 mt-5 d-flex justify-content-center">
        <div className="box">
          <div className="box-body">
            <p>Hola amingos</p>
              <StaticImage
              src="../images/conchal.jpeg"
              width={400}
              quality={95}
              className="img"
              formats={["AUTO", "WEBP", "AVIF"]}
            />
            <div className="box-lid">
              
              <div className="box-bowtie"></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
<div style={{ maxWidth: `960px`, margin: `2.45rem`, marginTop: `18rem` }}>
    <h2 className='text-center'>{JSONData.title}</h2>
    <div className="messages-container"></div>
    <ul className="grid-testimonials">
      {JSONData.content.map((data, index) => {
        return (
          
          <li key={`content_item_${index}`}>
            <div>
              <p>{data.message}</p><span className="quote-arrow"></span></div>
          <span class="grid-testimonials-citation">{data.name}</span>
          </li>
        )
      })}
    </ul>
  </div>
  </Layout>
)

export default IndexPage
