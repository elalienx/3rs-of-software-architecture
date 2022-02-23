/**
 * Note: 
 * This file is exluded from Prettier on purpose to compare the lack of formatting.
 * To see the difference, create a new branch and remove Project.jsx from .prettierignore
 */

// Project
function Pr(){
  const c = 'usd' // currency
  const i =[ // inventory
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
  ]

  return (
    <>
    <h2>1 Bad</h2>
    <p>Global currency: {c}</p>

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
  </>
  );
}

export default Inv;
