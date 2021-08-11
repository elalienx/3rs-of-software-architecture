import React, { Component } from "react";
import CurrencyConverter from "./currency-converter";
import CurrencySelector from "./CurrencySelector";
import Inventory from "./Inventory";
import Cart from "./Cart";

export default class App extends Component {
  constructor() {
    super();

    // Global Cart, BAD!
    window.cart = [];

    this.inventory = {
      1: {
        product: "Flashlight",
        img: "/flashlight.jpg",
        desc: "A really great flashlight",
        price: 100,
        currency: "usd",
      },
      2: {
        product: "Tin can",
        img: "/tin_can.jpg",
        desc: "Pretty much what you would expect from a tin can",
        price: 32,
        currency: "usd",
      },
      3: {
        product: "Cardboard Box",
        img: "/cardboard_box.png",
        desc: "It holds things",
        price: 5,
        currency: "usd",
      },
    };

    this.currencyConversions = {
      usd: {
        rupee: 66.78,
        yuan: 6.87,
        usd: 1,
      },
    };

    this.state = {
      localCurrency: "usd",
    };

    this.setGlobalCurrency = (currency) => {
      this.setState({
        localCurrency: currency,
      });
    };
  }

  render() {
    return (
      <div>
        <h2>3 Bad</h2>

        <CurrencySelector
          setGlobalCurrency={this.setGlobalCurrency}
          localCurrency={this.state.localCurrency}
        />

        <Inventory
          inventory={this.inventory}
          currencyConverter={new CurrencyConverter(this.currencyConversions)}
          localCurrency={this.state.localCurrency}
        />

        <Cart
          inventory={this.inventory}
          currencyConverter={new CurrencyConverter(this.currencyConversions)}
          localCurrency={this.state.localCurrency}
        />
      </div>
    );
  }
}
