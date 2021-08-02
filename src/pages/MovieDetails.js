import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    const { match: {params: {id}}} = this.props;
    movieAPI.getMovie(id).then((result) => this.setState({
      movie: result,
    }));
  }

  render() {
    const { movie } = this.state;
    if (movie === '') return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ `Title: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

// MovieDetails.propTypes = {
//   movie: PropTypes.shape({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     genre: PropTypes.string,
//     rating: PropTypes.number,
//     imagePath: PropTypes.string,
//   }).isRequired,
// };

export default MovieDetails;
