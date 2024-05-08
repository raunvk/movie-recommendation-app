package com.cinemint.service;

import java.util.List;
import java.util.Optional;
import com.cinemint.entity.Movie;

public interface MovieService {
	
	public Optional<Movie> getMovieByTmdbId(String tmdbId);
	public List<Movie> getAllMovies();
	public List<Movie> getMovieByKeyword(String keyword);
}
