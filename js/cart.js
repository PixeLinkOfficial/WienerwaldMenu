export let cart=JSON.parse(localStorage.getItem("cart"));

if(!cart)
{
    cart=[
    {
        productid:1,
        quantity:1
    }
    ,
    {
        productid:2,
        quantity:2
    }
];
}


export function savetolocals(){
    localStorage.setItem("cart",JSON.stringify(cart));
}

export function removeFun(pi){
    let newcart=[];
    cart.forEach((item2)=>{
        if(item2.productid!=pi)
        {
            newcart.push(item2);
        }
            
    });
    console.log(newcart)
    cart=newcart;
    savetolocals();
}

export function incFun(pi){
    cart.forEach((item2)=>{
        if(item2.productid==pi)
        {
            item2.quantity+=1;
            localStorage.setItem("cart",JSON.stringify(cart));
        }
            
    });
    console.log(cart)
    
}

export function deccFun(pi){
    cart.forEach((item2)=>{
        if(item2.productid==pi)
        {
            item2.quantity-=1;
            localStorage.setItem("cart",JSON.stringify(cart));
        }
            
    });
    console.log(cart)
    
}