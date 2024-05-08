package com.cinemint.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cinemint.entity.Movie;
import com.cinemint.service.MovieService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/movie")
public class MovieController {
	
	@Autowired
	private MovieService service;
	
	@GetMapping("/id/{tmdbId}")
	public ResponseEntity<Optional<Movie>> getMovieByTmdbId(@PathVariable String tmdbId){
		return new ResponseEntity<Optional<Movie>>(service.getMovieByTmdbId(tmdbId), HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Movie>> getAllMovies(){
		return new ResponseEntity<List<Movie>>(service.getAllMovies(), HttpStatus.OK);
	}
	
	@GetMapping("/all/{keyword}")
	public ResponseEntity<List<Movie>> getMovieByKeyword(@PathVariable String keyword){
		return new ResponseEntity<List<Movie>>(service.getMovieByKeyword(keyword), HttpStatus.OK);
	}
}
