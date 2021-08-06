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
    <h2 className='text-center'>A 2 night stay at the <a target="_blank" rel="noopener noreferrer" href='https://www.marriott.com/hotels/travel/lirwi-the-westin-reserva-conchal-an-all-inclusive-golf-resort-and-spa/'>Westin Reserva Conchal</a> for the happy couple</h2>
    <h3 className='text-center'>{JSONData.title}</h3>
    <p>Elegant and exclusive, our Royal Beach Club Suite will complement your dreamed stay. Located within a separated area in our resort, where you will enjoy access to an adults-only pool and lounge, personalized concierge/butler service and premium alcohol beverages as part of your benefits.</p>
    <p>This suite will offer you the private and relaxed touch you want for your stay. As soon as you arrive, you will feel invited to settle in and relax, take a complimentary Costa Rican coffee to the balcony, featuring an outdoor soaking tub. Along with refreshing garden or pool views, this suite is equipped with a 32-inch LCD TV, an iPod docking station and complimentary High Speed Internet Access.</p>
    <p>In addition, its modern and stylish bathroom off from the living area, which provides extra privacy and convenience, is furnished with an invigorating rainforest shower, Westin White Tea Heavenly™ Bath Amenities, plush bathrobes, and slippers to complete a unique experience. Royal Beach Club Suites are limited to guests aged 18 and over.</p>
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
  <StaticImage
              src="../images/team.png"
              quality={100}
              className="img fullwidth"
              formats={["AUTO", "WEBP", "AVIF"]}
            />
    <div className="flex">
      <StaticImage
                src="../images/roberto.png"
                quality={95}
                className="img center"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
    <div className="flex">
    </div>
    <StaticImage
              src="../images/anand.jpg"
              quality={95}
              className="img center"
              formats={["AUTO", "WEBP", "AVIF"]}
            />
    </div>
  </Layout>
)

export default IndexPage
