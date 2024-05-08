package com.cinemint.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import com.cinemint.entity.Movie;
import com.cinemint.entity.Review;
import com.cinemint.repository.ReviewRepository;

@Service
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private MongoTemplate template;
	
	@Override
	public Review createReview(String reviewBody, String tmdbId) {
		Review review = repository.insert(new Review(reviewBody, tmdbId, LocalDateTime.now()));
		
		template.update(Movie.class)
			.matching(Criteria.where("tmdbId").is(tmdbId))
			.apply(new Update().push("reviewId").value(review.getId()))
			.first();
		
		return review;
	}

	@Override
	public List<Review> getReviewsByTmdbId(String tmdbId) {
		return repository.findByTmdbId(tmdbId).collect(Collectors.toList());
	}

}
