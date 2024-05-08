package com.cinemint.controller;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cinemint.entity.Review;
import com.cinemint.service.ReviewService;

@RestController
@RequestMapping("/review")
@CrossOrigin(origins = "*")
public class ReviewController {
	
	@Autowired
	private ReviewService service;
	
	@PostMapping
	public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload){
		return new ResponseEntity<Review>(service.createReview(payload.get("reviewBody"), payload.get("tmdbId")), HttpStatus.OK);
	}
	
	@GetMapping("/id/{tmdbId}")
	public ResponseEntity<List<Review>> getReviewsByTmdbId(@PathVariable String tmdbId){
		return new ResponseEntity<List<Review>>(service.getReviewsByTmdbId(tmdbId), HttpStatus.OK);
	}
}
