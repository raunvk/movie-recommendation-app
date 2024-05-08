package com.cinemint.entity;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection="reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
	
	@Id
	private ObjectId id;
	
	private String tmdbId;
	
	private String body;
	
	private LocalDateTime created;
	
	public Review(String body, String tmdbId, LocalDateTime created) {
		this.body = body;
		this.tmdbId = tmdbId;
		this.created= created;
	}
}
