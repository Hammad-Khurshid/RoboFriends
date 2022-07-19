import React from 'react'


const Card =({name , email, id}) => {
    return(
        <div className='tc bg-dark-blue dib br4 pa4 ma3 grow bw shadow-7'>
            <img  alt="snap" src= {`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;