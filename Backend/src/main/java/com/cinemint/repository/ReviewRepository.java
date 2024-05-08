package com.cinemint.repository;

import java.util.stream.Stream;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.cinemint.entity.Review;

@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId>{
	
	Stream<Review> findByTmdbId(String tmdbId);
}
