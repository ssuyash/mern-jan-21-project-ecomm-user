import React from 'react'
import Slider from "react-slick";
const products = [
  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },
  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },

  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },


  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },
  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },
  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },
  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },
  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },
  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },
  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },
  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },
  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },
  { "_id": { "$oid": "6099ff3b098e8e41a7f4ec68" }, "sku": "N11200643A", "brand": "DAVIDOFF", "name": "Cool Water EDT 125ml ", "price": 225, "sale_price": 52, "url": "cool-water-edt-125ml", "image_key": "v1614175642/N11200643A_1" },

]
export default function Productslider(props) {
  var settings = {
    dots: true,
    arrows:true,
    infinite: false,
    speed: 500,
    slidesToShow: props.count !== undefined ? props.count : 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <h2 className="text-center"> {props.title} </h2>
      <Slider {...settings} className="">
        {products.map(product => {
          return (
           <div>
              <div class="card product-slider text-center">
              <img src={`https://z.nooncdn.com/products/tr:n-t_400/${product.image_key}.jpg`} class="card-img-top" alt="..." />
              <div class="card-body">
          <h5 class="card-title">{product.name}</h5>
          <p class="card-text">{product.price}</p>
              </div>
            </div>
           </div>
          )
        })}


      </Slider>
    </div>
  );
}

