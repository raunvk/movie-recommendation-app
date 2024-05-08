import { useEffect, useRef, useState } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import './Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Reviews = ({ getMovieData, movie }) => {
    const revText = useRef();
    const params = useParams();
    const movieId = params.movieId;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getMovieData(movieId);
        fetchReviews(movieId);
    }, [movieId]);

    const fetchReviews = async (movieId) => {
        try {
            const response = await api.get(`/review/id/${movieId}`);
            setReviews(response.data || []);
        } catch (error) {
            console.error('Error fetching movie reviews:', error);
        }
    };

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;
        try {
            const response = await api.post("/review", { reviewBody: rev.value, tmdbId: movieId });
            const newReview = { body: rev.value };
            rev.value = "";
            setReviews([newReview, ...reviews]); // Update local state with new review
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="reviews-container" style={{ '--bg-image': `url(${movie?.posters[0]})` }}>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="section1">
                        <h3 className="plot-heading">Movie Plot</h3>
                        <h6 className="plot-text">{movie?.plot}</h6>
                        <div>
                            <h3 className="more-details-heading">Read More</h3>
                            <h6 className="wikipedia-link">
                            <a
                                href={`https://en.wikipedia.org/wiki/${encodeURIComponent(movie?.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="wikipedia-link-anchor no-underline"
                            >
                                <span className="white">Visit&nbsp;</span>
                                <span className="gold">{movie?.title}</span>
                                <span className="white">'s Wikipedia&nbsp;</span>
                                <FontAwesomeIcon icon={faUpRightFromSquare} className="wikipedia-icon" />
                            </a>
                        </h6>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="section2">
                        <div className="review-form">
                            <h3 className="review-heading">What's Your Review?</h3>
                            <ReviewForm handleSubmit={addReview} revText={revText}/>
                        </div>
                        <div className="review-divider">
                            {reviews.length > 0 ? (
                                reviews.map((review, index) => (
                                    <div key={index} className="review-item">
                                        <p className="review-text">{review.body}</p>
                                        <hr />
                                    </div>
                                ))
                            ) : (
                                <p className="no-reviews">No reviews available</p>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;
