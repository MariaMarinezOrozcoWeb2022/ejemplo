import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const StartsShoe = () => {

   // const objParams = useParams()
   const shoeId = useParams();
   const id = shoeId.id;
   const [shoe, setShoe] = useState([]);

   useEffect(() => {
       async function getData(){
           axios.get(`http://localhost:3000/api/shoes/${id}`)
           .then(res => {
               setShoe(res.data);
               
           })
       }
       getData();
     
   },[])
   const rating = (shoe.rating) 
   if (rating<=1)
   return (<div>{rating}&#9733;</div>);
   else  if (rating<=2)
   return (<div>{rating}&#9733;&#9733;</div>);
   else  if (rating<=3)
   return (<div>{rating}&#9733;&#9733;&#9733;</div>);
   else  if (rating<=4)
   return (<div>{rating}&#9733;&#9733;&#9733;&#9733;</div>);
   else  if (rating<=5)
   return (<div>{rating}&#9733;&#9733;&#9733;&#9733;&#9733;</div>);

    /* switch (rating) {
        case (rating<=1): return (<div>{rating}&#9733;</div>); break;
        case (rating<=2): return (<div>{rating}&#9733;</div>); break;
        case (rating<=3): return (<div>{rating}&#9733;</div>); break;
        case (rating<=4): return (<div>{rating}&#9733;</div>); break;
        case (rating<=5): return (<div>{rating}&#9733;</div>); break;
    default : return (<div>{rating}</div>); 
    }*/
   

} 
export default StartsShoe