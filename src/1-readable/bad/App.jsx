// Inventory
import { useState } from "react";

function inv(){
  const c = 'usd' // currency
  const [i, setI] = useState([ // inventory
    {
      product: 'Flashlight',
      img: '/flashlight.jpg',
      desc: "A really great flashlight",
      price: 100,
      id: 1,
      c: 'usd'
    },
    {
      product: 'Tin can',
      img: '/tin_can.jpg',
      desc: "Pretty much what you would expect from a tin can",
      price: 32,
      id: 2,
      c: 'usd'
    },
    {
      product: 'Cardboard Box',
      img: '/cardboard_box.png',
      desc: "It holds things",
      price: 5,
      id: 3,
      c: 'usd'
    }
  ])

  return (
    <table style={{width: '100%'}}>
    <tbody>
    <tr>
    <th>
      Product
    </th>

    <th>
      Image
    </th>

    <th>
      Description
    </th>

    <th>
      Price
    </th>
    </tr>
      {i.map(function(i, idx) {
        return (
          <tr key = {idx}>
            <td>
              {i.product}
            </td>

            <td>
            <img src={i.img} alt=""/>
            </td>

            <td>
            {i.desc}
            </td>

            <td>
              {i.price}
            </td>
          </tr>
        );
      })}
  </tbody>
  </table>
  );
}

export default inv;
