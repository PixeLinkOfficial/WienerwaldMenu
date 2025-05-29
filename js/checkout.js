import {cart,removeFun,incFun,deccFun ,savetolocals} from "./cart.js";

//2
let dataCart=[
    {
        id:1,
        name: 'Cheese Burger',
        price: 5500
    },
    {
        id:2,
        name:'Classic Burger',
        price:5000
    },
    {
        id:3,
        name: 'Double Burger',
        price:7000
    },
    {
        id:4,
        name: 'Zinger Burger'
        ,price:5000
    },
    {
        id:5,
        name: 'Steak Burger'
        ,price:7000
    },
    {
        id:6,
        name: 'Zinger Barbecue Burger'
        ,price:6000
    },
    {
        id:7,
        name: 'Twister Zinger'
        ,price:5000
    },
    {
        id:8,
        name: 'Cheese Zinger'
        ,price:5500
    },
    {
        id:9,
        name: 'Meat Fahita'
        ,price:5000
    },
    {
        id:10,
        name: 'Chicken Fahita'
        ,price:4000
    },
    {
        id:11,
        name: 'Wienerwald Shawarma'
        ,price:4000
    },
    {
        id:12,
        name: 'Pizza Habel Daher'
        ,price:10000
    },
    {
        id:13,
        name: 'Pizza Margherita'
        ,price:7000
    },
    {
        id:14,
        name: 'Pizza Vegetables'
        ,price:7500
    },
    {
        id:15,
        name: 'Pizza Meat'
        ,price:9000
    },
    {
        id:16,
        name: 'Pizza Chicken'
        ,price:9000
    },
    {
        id:17,
        name: 'Pizza Tuna'
        ,price:7000
    },
    {
        id:18,
        name: 'Pizza Mixed'
        ,price:10000
    },
    {
        id:19,
        name: 'Pizza Pepperoni'
        ,price:8000
    },
    {
        id:20,
        name: 'Pizza Wienerwald'
        ,price:12000
    },
    {
        id:21,
        name: 'chicken tender'
        ,price:8000
    },
    {
        id:22,
        name: 'Boneless chicken'
        ,price:8000
    },
    {
        id:23,
        name: 'chicken thighs'
        ,price:8000
    },
    {
        id:24,
        name: 'chicken escalope'
        ,price:7500
    },
    {
        id:25,
        name: 'Classic Savor'
        ,price:22000
    },
    {
        id:26,
        name: 'Wienerwald meal'
        ,price:25000
    },
    {
        id:27,
        name: 'Pizza house'
        ,price:16000
    },
    {
        id:28,
        name: 'Classic Rizo'
        ,price:5000
    },
    {
        id:29,
        name: 'Rizo with cheese'
        ,price:6000
    },
    {
        id:30,
        name: 'Smoked Rizo'
        ,price:6000
    },
    {
        id:31,
        name: 'Chicken salad'
        ,price:5000
    },
    {
        id:32,
        name: 'Chicken Steak'
        ,price:7000
    },
    {
        id:33,
        name: 'Chicken & Rice'
        ,price:7000
    },
    {
        id:34,
        name: 'kids meal 1'
        ,price:5000
    },
    {
        id:35,
        name: 'kids meal 2'
        ,price:5000
    },
    {
        id:36,
        name: 'kids meal 3'
        ,price:5000
    },
    {
        id:37,
        name: 'Appetisers medium'
        ,price:2000
    },
    {
        id:38,
        name: 'Appetisers large'
        ,price:3000
    },
    {
        id:39,
        name: 'French fries'
        ,price:1500
    },
    {
        id:40,
        name: 'wedges fries'
        ,price:2000
    },
    {
        id:41,
        name: 'cheese sticks'
        ,price:3000
    },
    {
        id:42,
        name: 'Wienerwald sauce'
        ,price:250
    },
    {
        id:43,
        name: 'Barbeque sauce'
        ,price:500
    },
    {
        id:44,
        name: 'Cheddar sauce'
        ,price:500
    },
    {
        id:45,
        name: 'Pepsi'
        ,price:1000
    },
    {
        id:46,
        name: 'Tea'
        ,price:1000 
    },
    {
        id:47,
        name: 'Americano'
        ,price:4000 
    },
    {
        id:48,
        name: 'Cappuccino'
        ,price:4000 
    },
    {
        id:49,
        name: 'Espresso single'
        ,price:3000 
    },
    {
        id:50,
        name: 'Espresso double'
        ,price:4000 
    },
    {
        id:51,
        name: 'Turkish Coffee'
        ,price:3000 
    },
    {
        id:52,
        name: 'Hot Chocolate'
        ,price:3000 
    },
    {
        id:53,
        name: 'Iced Latte'
        ,price:5000 
    },
    {
        id:54,
        name: 'Iced Mocha'
        ,price:5000 
    }
  ];


//2
  //
  
  let htmlsum=``; // Initialize htmlsum as an empty string
  let totp=0;
  cart.forEach((cartitem) => {
      let matching;
  
      dataCart.forEach((product) => {
          if (product.id == cartitem.productid)
              matching = product;
      });
  
      if (matching) {
          htmlsum +=
          `
              <div class="l${matching.id}" id="xsmdiv"><div class="xsmdiv1"><div class="js-khalaf"><button class="js-max" data-es-id=${matching.id}><img src="img/plusicon.png" class="xsmm3"></button><button class="js-min" ><img src="img/minusicon.png" class="xsmm3"></button></div><p class="xmm1">${cartitem.quantity}</p> <p class="xmm2">${matching.name}</p> </div> <div class="pricet">${(matching.price*cartitem.quantity).toLocaleString()} IQD</div> </div>
          `;
          totp+=matching.price*cartitem.quantity;
          if (!isNaN(totp)) { // Check if 'totp' is a valid number
            document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
        } else {
            console.error('Error: Invalid total price value.');
        }
      }
  });
//end of 2

  
  document.querySelector('.checkitems').innerHTML = htmlsum;
  console.log(cart);
  console.log(htmlsum);
//3
  document.querySelector('.checkitems').addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'js-del-it'
    if (event.target && event.target.closest('.js-del-it')) {
        let button = event.target.closest('.js-del-it');
        let but = button.dataset.esId;
        let but2 = button.dataset.priSub;
        let but3 = Number(button.dataset.priDell);

        console.log(but);
        removeFun(but); // Assuming this function removes the item from cart array or whatever your data model is.
        document.querySelector(`.l${but}`).remove(); // Remove the item from the display

        totp -= Number(but2); // Subtract the item's price from the total
        document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: ${totp.toLocaleString()} IQD</div>`;

        // Update the cart count in localStorage
        let myVariable = localStorage.getItem('countcart');
        myVariable = parseInt(myVariable) - but3;
        localStorage.setItem('countcart', myVariable);
    }
});



  //end of 3
  

  //
  // Attach event listener for 'click' on the parent element
document.querySelector('.checkitems').addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'js-max'
    if (event.target && event.target.closest('.js-max')) {
        let elcon = event.target.closest('.js-max').dataset.esId;
        let htmsummax = '';
        totp = 0; // Reset total price each time to calculate it properly

        // Loop through cart items
        cart.forEach((cartitem) => {
            let matching;
            
            // Find the matching product from the dataCart
            dataCart.forEach((product) => {
                if (product.id == cartitem.productid) {
                    matching = product;
                }
            });

            // If product found, increment quantity and rebuild the HTML for cart item
            if (matching) {
                if (matching.id == elcon) {
                 // Increment the quantity of the clicked item
                    incFun(elcon);
                }

                htmsummax += `
                    <div class="l${matching.id}" id="xsmdiv">
                        <div class="xsmdiv1">
                            <div class="js-khalaf">
                            <button class="js-max" data-es-id=${matching.id}>
                                <img src="img/plusicon.png" class="xsmm3">
                            </button>
                            <button class="js-min">
                                <img src="img/minusicon.png" class="xsmm3">
                            </button>
                            </div>
                            <p class="xmm1">${cartitem.quantity}</p> 
                            <p class="xmm2">${matching.name}</p>
                           
                        </div> 
                        <div class="pricet">${(matching.price * cartitem.quantity).toLocaleString()} IQD</div>
                    </div>
                `;

                // Update total price
                totp += matching.price * cartitem.quantity;
            }
        });

        // Update the cart display with the new content
        document.querySelector('.checkitems').innerHTML = htmsummax;

        // Update the total price display
        if (!isNaN(totp)) {
            document.querySelector('.hiawi').innerHTML = `<div class"hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
        } else {
            console.error('Error: Invalid total price value.');
        }
    }
});

  



let isClickedOnce = false;
// Attach event listener for 'click' on the parent element
document.querySelector('.checkitems').addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'js-min'
    if (event.target && event.target.closest('.js-min')) {
        let elcon2 = event.target.closest('.js-min').dataset.esId;
        let htmsummin = ''; // Renamed variable
        totp = 0; // Reset total price each time to calculate it properly

        // Loop through cart items
        cart.forEach((cartitem) => {
            let matching;
            
            // Find the matching product from the dataCart
            dataCart.forEach((product) => {
                if (product.id == cartitem.productid) {
                    matching = product;
                }
            });

            // If product found, decrement quantity and rebuild the HTML for cart item
            if (matching) {
                if (matching.id == elcon2) {
                    if (cartitem.quantity == 1) {
                        removeFun(elcon2);
                        window.location.reload(true);
                        document.querySelector(`.l${elcon2}`).remove(); // Remove the item from the DOM
                        removeFun(elcon2);
                        if(cart.length === 0) {
                            const button123 = document.querySelector('.butex2');
                            button123.click();
                        }
                        document.querySelector(`.l${elcon2}`).remove();
                        removeFun(elcon2);
                        document.querySelector(`.l${elcon2}`).remove();
                        
                    } else if (cartitem.quantity > 1) {
                        // Decrement the quantity if greater than 1
                        deccFun(elcon2); // Decrement the quantity
                    }
                }
                totp += matching.price * cartitem.quantity;

                htmsummin += `
                    <div class="l${matching.id}" id="xsmdiv">
                        <div class="xsmdiv1">
                            <div class="js-khalaf">
                                <button class="js-max" data-es-id=${matching.id}>
                                    <img src="img/plusicon.png" class="xsmm3">
                                </button>
                                <button class="js-min" data-es-id=${matching.id}>
                                    <img src="img/minusicon.png" class="xsmm3">
                                </button>
                            </div>
                            <p class="xmm1">${cartitem.quantity}</p> 
                            <p class="xmm2">${matching.name}</p>
                        </div> 
                        <div class="pricet">${(matching.price * cartitem.quantity).toLocaleString()} IQD</div>
                    </div>
                `;

                // Update total price
                
                if (!isNaN(totp)) {
                    document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
                }
            }
        });

        // Update the cart display with the new content
        document.querySelector('.checkitems').innerHTML = htmsummin;

        // Update the total price display
        if (!isNaN(totp)) {
            document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
        }
    }
});









  document.querySelector('.butex2').addEventListener('click',()=>{
    document.querySelector('.checkitems').innerHTML='';
    cart.length=0;
    document.querySelector('.hiawi').innerHTML='';
    savetolocals();
    let c123=0;
    localStorage.setItem("countcart",c123.toString());
  });

  
  
//

