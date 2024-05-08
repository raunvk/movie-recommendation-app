package com.cinemint.service;

import java.util.List;
import com.cinemint.entity.Review;

public interface ReviewService {
	
	public Review createReview(String body, String tmdbId);
	public List<Review> getReviewsByTmdbId(String tmdbId);

}
