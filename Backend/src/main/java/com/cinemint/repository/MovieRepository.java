package com.cinemint.repository;

import java.util.Optional;
import java.util.stream.Stream;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import com.cinemint.entity.Movie;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
	
	Optional<Movie> findByTmdbId(String tmdbId);
	
	@Query("{}")
    Stream<Movie> findAllByCustomQuery();
	
	@Query("{$or:[" +
            "{'title': {$regex: ?0, $options: 'i'}}, " +
            "{'releasedYear': {$regex: ?0, $options: 'i'}}, " +
            "{'genre': {$regex: ?0, $options: 'i'}}, " +
            "{'director': {$regex: ?0, $options: 'i'}}, " +
            "{'cast1': {$regex: ?0, $options: 'i'}}, " +
            "{'cast2': {$regex: ?0, $options: 'i'}}, " +
            "{'cast3': {$regex: ?0, $options: 'i'}}, " +
            "{'cast4': {$regex: ?0, $options: 'i'}}" +
            "]}")
    Stream<Movie> findByKeyword(String keyword);
}
