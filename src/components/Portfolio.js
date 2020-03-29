import React from 'react';
import { Container, Card, CardDeck, Button } from 'react-bootstrap';
import './About.css';
import mf1 from './materials/moviefun1.png';
import mf2 from './materials/moviefun2.png';
import me1 from './materials/movieexplorer1.png';
import cs1 from './materials/coming soon.png';
import cs2 from './materials/coming soon 2.png';


import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class Portfolio extends React.Component {
  state = {
    portfolios: [
      {
        id: "P1",
        name: "Movie Fun",
        image: [mf1, mf2],
        text: "The idea was a platform for people to criticize movies and give their honest opinions. After 1 month-long HTML & CSS course, we designed this project. We used Bootstrap as a CSS framework. I was responsible only for movies page and movie details page.",
        github: 'https://github.com/mmelihdogan/moviefun'
      },
      {
        id: "P2",
        name: "Movie Explorer",
        image: [me1, me1],
        text: "The idea was a platform like IMDb. During React training, we created various movie-explorer projects in a team. The aim of the last one is to fetch the movies from the database and render that fetched data.",
        github: 'https://github.com/mmelihdogan/movie-explorer'
      },
      {
        id: "P3",
        name: "Coming Soon!",
        image: [cs1, cs2],
        text: "I've started to create my personal website. But pulling all the knowledge I learnt together without teammates is really hard for newbie developer. Yes, this website is still under construction!",
        github: "https://github.com/mmelihdogan/mmelihdogan.github.io"
      },
    ],
    showSecondImg: false
  }

  clickHandler = () => {
    const doesShow = this.state.showSecondImg;
    this.setState({ showSecondImg: !doesShow })
  }

  render() {

    return (
      <Container fluid className="About">
        <Container md={12}>
          <CardDeck>
            {this.state.portfolios.map((project) => {
              return (
                <Card>
                  <Card.Header>{project.name}</Card.Header>
                  <Card.Img variant="top" src={!this.state.showSecondImg ? project.image[0] : project.image[1]} onClick={this.clickHandler} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>{project.text}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="light" href={project.github}><FontAwesomeIcon icon={faLink} /> Github Repo </Button>
                  </Card.Footer>
                </Card>
              )
            })}
          </CardDeck>
        </Container>
      </Container>

    )
  }
}