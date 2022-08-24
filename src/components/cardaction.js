import React, {useState} from 'react';

function CardAction(props) {

    /*
    declare the state called likeValues and initialize it with the value of props.likes
    use the function changeLikeValues whenever the value of likeValues needs to be 
    updated.
    */
   const [likeValues, changeLikesValues] = useState(parseInt(props.likes))
   const [disLikeValues, changeDisLikeValues] = useState(4)
    
   const changeLikes=()=>{
        //change the value of state likeValues using
        //changeLikeValues
        changeLikesValues(likeValues+1)
        //zxzx
   }
   
   const changeDisLikes=()=>{
          changeDisLikeValues(disLikeValues+1)
   }

   return ( 
        <div>
            <button onClick={changeLikes}>Likes</button>
            &nbsp;
            &nbsp;
            {likeValues}
            &nbsp;
            &nbsp;
            <button onClick={changeDisLikes}>Dislikes</button>
            &nbsp;
            &nbsp;
            {disLikeValues}
        </div>
     );
}

export default CardAction;