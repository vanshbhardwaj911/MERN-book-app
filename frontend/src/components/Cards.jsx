import React from 'react';

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl transition-transform duration-300 hover:scale-105">
          <figure>
            <img
              src="https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?t=st=1732536995~exp=1732540595~hmac=17d7e3b937014adbb59b79f7a247747ad6ec5acc409f77f99cb734d6bd20a91c&w=740"
              alt="Books"
              className="rounded-lg object-cover w-full h-full" // Apply object-cover to maintain aspect ratio
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
