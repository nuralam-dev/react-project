import React from 'react';

const SingleProducts = ({product,handleCard}) => {
  
    return (
        <div>
           <div className="card gap-3 shadow-sm border border-amber-200 mb-3">
          <figure>
            <img
              src={product.image}
              alt=""
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">{product.title.slice(0,10)}</h2>
            <p>{product.description.slice(0,100)}
             
            </p>
            <div className="card-actions justify-end flex">
              <p className="text-2xl">Price : {product.price}</p>
              <button onClick={(e) =>handleCard(product)}
              className="btn btn-primary">ADD TO CARD</button>
            </div>
          </div>
        </div> 
        </div>
    );
};

export default SingleProducts;