package com.cinemint.entity;

import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection="movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
	
	@Id
	private ObjectId id;
	
	private String tmdbId;
	
	private String title;
	
	private String thumbnail;
	
	private String releasedYear;
	
	private String certificate;
	
	private String runtime;
	
	private String genre;
	
	private String plot;
	
	private Double imdbRating;
	
	private Integer metascore;
	
	private String director;
	
	private String cast1;
	
	private String cast2;
	
	private String cast3;
	
	private String cast4;
	
	private String trailer;
	
	private List<String> posters;
	
	@DocumentReference
	private List<Review> reviews;

}
