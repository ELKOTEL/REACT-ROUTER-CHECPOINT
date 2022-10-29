import React from 'react'
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {

  return (
  <div>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.img} style={{width:200}}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rating}
        /> 
        <Card.Text>
        {movie.desc}
        </Card.Text>

      </Card.Body>
    </Card>
       
  </div>
  )
}

export default MovieCard