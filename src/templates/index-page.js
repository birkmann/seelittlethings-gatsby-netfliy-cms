import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className='hero'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
      }}
    >
      <div className='container'>
        <div className='text'>
          <h2>{title}</h2>
          <p>{subheading}</p>
          <div className='btn-wrapper'>
            <a href='' className='btn primary'>
              Registrieren
            </a>
            <a href='' className='btn'>
              Termine ansehen
            </a>
          </div>
        </div>
        <div className='card'>
          <div
            className='header'
            style={{
              backgroundImage: `url(https://instagram.fmuc4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/100898024_158972465634597_867980364891533485_n.jpg?_nc_ht=instagram.fmuc4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=TbhZD5ZySr0AX_kVIC_&oh=716339ec9d8975f9b29c0aebc4aad89a&oe=5F2A8DE1)`,
              backgroundPosition: `center top`,
            }}
          ></div>
          <div className='body'>
            <h4>News, 12.05.2020</h4>
            <h3>Fit durch den Frühling.</h3>
            <div className='tags'>
              <span>#zeit</span>
              <span>#körper</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
      <h1> {title}</h1>
      <h2> {subheading}</h2>
    </div>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div className='content'>
                  <div className='tile'>
                    <h1 className='title'>{mainpitch.title}</h1>
                  </div>
                  <div className='tile'>
                    <h3 className='subtitle'>{mainpitch.description}</h3>
                  </div>
                </div>
                <div className='columns'>
                  <div className='column is-12'>
                    <h3 className='has-text-weight-semibold is-size-2'>
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className='columns'>
                  <div className='column is-12 has-text-centered'>
                    <Link className='btn' to='/products'>
                      See all products
                    </Link>
                  </div>
                </div>
                <div className='column is-12'>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className='column is-12 has-text-centered'>
                    <Link className='btn' to='/blog'>
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
