package com.cinemint.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cinemint.entity.Movie;
import com.cinemint.repository.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService {

	@Autowired
	private MovieRepository repository;
	
	@Override
	public Optional<Movie> getMovieByTmdbId(String tmdbId) {
		return repository.findByTmdbId(tmdbId);
	}
	
	@Override
	public List<Movie> getAllMovies() {
		Stream<Movie> movieStream = repository.findAllByCustomQuery();
		List<Movie> movies =  movieStream.collect(Collectors.toList());
		return getRandomMovies(movies);
	}

	@Override
	public List<Movie> getMovieByKeyword(String keyword) {
		keyword = ".*" + keyword.toLowerCase() + ".*";
        Stream<Movie> movieStream = repository.findByKeyword(keyword);
        List<Movie> movies = movieStream.collect(Collectors.toList());
        if (movies.size() <= 100) {
            return movies; 
        } else {
            return getRandomMovies(movies);
        }
	}
	
	private List<Movie> getRandomMovies(List<Movie> movies) {
        Random random = new Random();
        return random.ints(0, movies.size())
                .distinct()
                .limit(100)
                .mapToObj(movies::get)
                .collect(Collectors.toList());
    }
}
