import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    console.log(id)
  return (
    <div>
          <h1 className="mb-5 text-center">Item Details</h1>
          <div className="mt-5 border border-4">
              <div className="row">
                  <div className="col col-md-6">
                      <img src="" alt="item-img" />
                  </div>
                  <div className="col col-md-6">
                      
                  </div>
              </div>
          </div>
    </div>
  );
};

export default ProductDetails;
