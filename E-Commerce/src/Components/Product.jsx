import React, { useEffect, useState } from "react";

function Product() {
  let [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts();
  }, [setProduct]);

  let getProducts = async () => {
    let productData = await fetch("http://localhost:3000/products");
    let records = await productData.json();
    setProduct(records);
  };

  let deleteProductData = async (id) =>{
    let deleteData = await fetch("http://localhost:3000/products/" + id, {
      method: "delete"
    })
    getProducts()
  }

  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-md-center">
        {product.map((v, i) => {
          return (
            <div key={i} className="col col-lg-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={v.image}
                  className="card-img-top"
                  alt="..."
                  width="150px"
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">{v.title}</h5>
                  <p className="card-text">{v.description.slice(0, 100)}...</p>
                  <p className="card-text">${v.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => deleteProductData(v.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
