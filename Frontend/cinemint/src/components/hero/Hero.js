import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const handleThumbnailClick = (thumbnailUrl) => {
    window.open(thumbnailUrl, '_blank');
};

const Hero = ({ movies }) => {

    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {movies?.map((movie) => (
                    <Paper key={movie?.tmdbId}>
                        <div className='movie-card-container'>
                            <div className='movie-card' style={{ '--img': `url(${movie?.posters[0]})` }}>
                                <div className='movie-details-container'>
                                    <div className='movie-thumbnail' onClick={() => handleThumbnailClick(movie.thumbnail)}>
                                        <img src={movie?.thumbnail} alt="" />
                                    </div>
                                    <div className='movie-details'>
                                    <div className='movie-buttons-container'>
                                        <div className='play-button-icon-container'>
                                            {movie?.trailer && (
                                                <Link to={`/trailer/${movie?.trailer?.substring(movie.trailer.length - 11)}`}>
                                                    <FontAwesomeIcon className='play-button-icon' icon={faPlay} />
                                                </Link>
                                            )}
                                        </div>
                                        <div className="review-button">
                                            <Link to={`/reviews/${movie?.tmdbId}`}>
                                                <FontAwesomeIcon className='review-button-icon' icon={faMessage} />
                                            </Link>
                                        </div>
                                    </div>

                                        <div className='movie-title'>
                                            <h4>{movie?.title}</h4><h6 className='small-text-key'>&ensp;({movie?.certificate || 'N.A.'})</h6>
                                        </div>
                                        <div className='more-movie-details'>
                                            <h6 className='small-text-key'>‣ Released&ensp;:&ensp;
                                                <span className='small-text-value'>{movie?.releasedYear || 'N.A.'}</span>
                                            </h6>
                                            <h6 className='small-text-key'>‣ Genre&ensp;:&ensp;
                                                <span className='small-text-value'>{movie?.genre || 'N.A.'}</span>
                                            </h6>
                                            <h6 className='small-text-key'>‣ Runtime&ensp;:&ensp;
                                                <span className='small-text-value'>{movie?.runtime || 'N.A.'}</span>
                                            </h6>
                                            <h6 className='small-text-key'>‣ IMDB Rating&ensp;:&ensp;
                                                <span className='small-text-value'>{movie?.imdbRating || 'N.A.'}</span>
                                            </h6>
                                            <h6 className='small-text-key'>‣ Metascore&ensp;:&ensp;
                                                <span className='small-text-value'>{movie?.metascore || 'N.A.'}</span>
                                            </h6>
                                            <h6 className='small-text-key'>‣ Directed by&ensp;:&ensp;
                                                <span className='small-text-value'>{movie?.director || 'N.A.'}</span>
                                            </h6>
                                            <h6 className='small-text-key'>‣ Starring&ensp;:&ensp;
                                                <span className='small-text-value'>
                                                    {movie?.cast1 || 'N.A.'}, {movie?.cast2 || 'N.A.'}, {movie?.cast3 || 'N.A.'}, {movie?.cast4 || 'N.A.'}
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                ))}
            </Carousel>
        </div>
    );
};

export default Hero;
