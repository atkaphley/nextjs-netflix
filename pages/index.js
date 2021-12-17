import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/layout'
import Container from '../components/container'
import Card from '../components/card'
import Col from '../components/col'
import Row from '../components/row'

import { getAllMovies } from '../lib/api'

export async function getStaticProps() {

  const movies = await getAllMovies();

  return {
    props : {
      movies
    }
  }
}

export default function Home( {movies} ) {
  return (
    <Layout>
      <Head>
        <title>IST 363 Netflix</title>
      </Head>
      <main>
        <Container>
          <Row>
            {movies.nodes.map((movie, index) => {
              const {title,slug,featuredImage} = movie;
              return <Col key={index} xs="6" sm="6" md="4" lg="3"> 
                <Card
                  title={title}
                  featuredImage={featuredImage}
                  slug={slug}
                  />
              </Col>
            })}
          </Row>
        </Container>
      </main>
      
    </Layout>
  )
}
