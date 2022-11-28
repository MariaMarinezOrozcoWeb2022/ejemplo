import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StartsShoe from './StartsShoe';

const ReviewsShoe = () => {

    // const objParams = useParams()
    const shoeId = useParams();
    const id = shoeId.id;
    const [shoe, setShoe] = useState([]);
    const [shoeReviews, setShoeReviews] = useState([]);


    useEffect(() => {
        async function getData() {
            axios.get(`http://localhost:3000/api/shoes/${id}`)
                .then(res => {
                    setShoe(res.data);
                    setShoeReviews(res.data.reviews[0]);
                })
        }
        getData();

    }, [])
  

    return (
      
            <><div class="containerReviews">
            <div class="reviewsCount">
                <p>Reviews</p>
                <p>{shoe.review_count}</p>

                <div class="ReviewsBody" style={{
                    borderRadius: "10px",
                    margin: "10px",
                    padding: "5px",
                    background: "border-box #F5F5F1",
                    width: "40%",
                    color: "black",
                    height: "100%"
                }}>

                    <p>{shoeReviews.body}</p>

                </div>

            </div>
        </div>
        <StartsShoe /></> 
    )  
}

export default ReviewsShoe