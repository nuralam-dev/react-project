import React from 'react';

const SingleProducts = () => {
    return (
        <div>
           <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co.com/8gvSWSdN/Custom-Navy-T-Shirts-Diadye.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Diadye</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end flex">
              <p className="text-2xl">Price : 15$</p>
              <button className="btn btn-primary">ADD TO CARD</button>
            </div>
          </div>
        </div> 
        </div>
    );
};

export default SingleProducts;