import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDescription.css";

const ProductPage = () => {
  const productData = {
    name: "Premium Cotton T-Shirt",
    price: 89.0,
    mainImage:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    ],
    colors: ["#3d3d3d", "#5a5a5a", "#ffffff"],
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedProducts: [
      {
        name: "Classic White Tee",
        price: 79.0,
        image:
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Striped Cotton Shirt",
        price: 89.0,
        image:
          "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Premium Black Tee",
        price: 79.0,
        image:
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "V-Neck Cotton Shirt",
        price: 85.0,
        image:
          "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
  };

  return (
    <div className="container-fluid bg-black text-white py-5 min-vh-100">
      <div className="row justify-content-center">
        {/* Main Image Section */}
        <div className="col-lg-6 col-12 mb-5 px-4">
          <div className="d-flex justify-content-center align-items-center bg-dark rounded-3 p-3 main-image-container">
            <img
              src={productData.mainImage}
              alt={productData.name}
              className="img-fluid main-product-image"
            />
          </div>

          {/* Thumbnails Grid */}
          <div className="row mt-4 g-3">
            {productData.thumbnails.map((thumb, index) => (
              <div key={index} className="col-3">
                <div className="thumbnail-container bg-dark p-1 rounded-2 h-100">
                  <img
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className="img-fluid d-block mx-auto h-100 object-fit-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-lg-6 col-12 px-4">
          <h1 className="mb-3 fw-bold">{productData.name}</h1>
          <div className="d-flex align-items-center mb-3">
            <span className="text-info">⭐ 4.8 (245 reviews)</span>
          </div>
          <h2 className="mb-4 text-info">${productData.price.toFixed(2)}</h2>

          {/* Size Selector */}
          <div className="mb-4">
            <h5>SELECT SIZE</h5>
            <div className="d-flex gap-2 flex-wrap">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  className="btn btn-outline-info size-btn rounded-pill"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div className="mb-4">
            <h5>SELECT COLOR</h5>
            <div className="d-flex gap-2">
              {productData.colors.map((color, index) => (
                <div
                  key={index}
                  className="color-swatch position-relative"
                  style={{ backgroundColor: color }}
                >
                  {index === 0 && (
                    <span className="color-checkmark position-absolute">✓</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-4">
            <h5>QUANTITY</h5>
            <div
              className="input-group quantity-selector border-info rounded-pill"
              style={{ maxWidth: "150px" }}
            >
              <button className="btn btn-outline-info rounded-start-pill">
                -
              </button>
              <input
                type="text"
                className="form-control text-center bg-black text-white border-info"
                value="1"
                readOnly
              />
              <button className="btn btn-outline-info rounded-end-pill">
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-grid gap-3 mb-5">
            <button className="btn btn-custom-primary btn-lg py-3 rounded-pill">
              Add to Cart
            </button>
            <button className="btn btn-outline-info btn-lg py-3 rounded-pill">
              Add to Wishlist
            </button>
          </div>

          {/* Product Details */}
          <div className="product-details border-top border-secondary pt-4">
            <h5 className="mb-3 text-info">Product Details</h5>
            <ul className="list-unstyled">
              <li className="mb-2">✓ 100% Organic Cotton</li>
              <li className="mb-2">✓ Modern Regular Fit</li>
              <li className="mb-2">✓ Machine Washable</li>
              <li className="mb-2">✓ Pre-shrunk Fabric</li>
            </ul>
            <p className="text-white-50">
              Premium cotton t-shirt with a modern fit. Made from 100% organic
              cotton for maximum comfort and durability. Features a ribbed crew
              neck and reinforced shoulder seams.
            </p>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="col-12 mt-5 px-4">
          <h4 className="mb-4 text-info">You May Also Like</h4>
          <div className="row g-4">
            {productData.relatedProducts.map((product, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 related-product-card border-secondary bg-dark">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top related-product-image p-3"
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title text-white">{product.name}</h6>
                    <p className="card-text text-info">
                      ${product.price.toFixed(2)}
                    </p>
                    <button className="btn btn-outline-info btn-sm rounded-pill">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
