import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Night Treatment Cream Sandalwood & Saffron",
    description:
      "The Forest Essentials Night Treatment Cream Sandalwood & Saffron is a unique Ayurvedic formula that blends the pure essential oils of Sandalwood and Saffron to nourish normal to dry skin. It is blended with Sweet Almond oil, Kokum Butter and antioxidant rich herb infusions, which help repair damaged skin cells, improve the skin's natural elasticity while leaving it radiant. This Ayurvedic night treatment cream has an exceptionally high fatty oil content for extra nourishment.",
    img:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR91SUMJVD3wUG9-sqImhc-lo2xfeBdKpwDCpnCj3ZS3D_aCDNG7vAxxsvouiyKodKz-lpJfEVEjb45KpTB78LItgnvxeh9uYu3h3wgBeKMPxTP6wnkRHz9L5s&usqp=CAE",
    price: 2695
  },

  {
    id: 2,
    name: "A Cat",
    description: "CCO (Chief Cat Officer)",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },

  {
    id: 3,
    name: "Milk",
    description: "Milk for the lactose tollerent",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },

  {
    id: 4,
    name: "Banana",
    description: "I need those carbs",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },

  {
    id: 5,
    name: "Orange",
    description: "Orange are orange",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      cart: [
        {
          id: 4,
          name: "Banana",
          description: "I need those carbs",
          img: "https://tachyons.io/img/avatar_1.jpg",
          price: 100,
          units: 2
        }
      ]
    };
  }

  handleAddFunc(product) {
    const existingProductIndex = this.state.cart.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex >= 0) {
      const cartProducts = this.state.cart.slice();

      const existingProduct = cartProducts[existingProductIndex];

      const updatedUnitsProduct = {
        ...existingProduct,
        units: existingProduct.units + product.units
      };

      cartProducts[existingProductIndex] = updatedUnitsProduct;

      this.setState({
        cart: cartProducts
      });
    } else {
      this.setState({
        cart: [...this.state.cart, product]
      });
    }
  }

  render() {
    return (
      <main className="pa3 pa5-ns flex flex-wrap">
        <ul>
          {this.state.cart.map((c) => (
            <li>
              {c.name} | units {c.units}
            </li>
          ))}
        </ul>

        {products.map((p) => (
          <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} />
        ))}
      </main>
    );
  }
}

render(<App />, document.getElementById("root"));
