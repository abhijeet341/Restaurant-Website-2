var vcart=document.querySelector('#vcart');
var vtotal=document.querySelector('#vtotal');

function addVeg(vid)
{
    vegId1='#v'+vid;
    var name=document.querySelector(vegId1).innerHTML;
    
    var radio='veg'+ vid;
    var pri= document.getElementsByName(radio);
    var price;
    if(pri[0].checked)
    {
        price=pri[0].value;
    }
    else return;
    var orders=JSON.parse(localStorage.getItem('orders'));
    var total=localStorage.getItem('total');
    var cartSize=orders.length;
    
    // saving item and total in local Storage.
    orders[cartSize]=[name,price];
    localStorage.setItem('orders',JSON.stringify(orders));
    // total=0;  Hurry
    total=Number(total)+Number(price);
    localStorage.setItem('total',total);

    // Updating number of items in shopping cart.
    var cart=document.querySelector("#cart");
    cart.innerHTML=orders.length;

    butto='<button class="del" onclick="removeveg(' + cartSize + ')">x</button>';
    vtotal.innerHTML='Total: Rs ' + total;
    vcart.innerHTML+='<li>'+ name +' '+ ': Rs '+ price + ' '+ butto + '</li>';
    
}

function vshoppingCart()
{
    var orders=JSON.parse(localStorage.getItem('orders'));
    var total=localStorage.getItem('total');
    var cartSize=orders.length;
    vcart.innerHTML='';
    for(let i=0;i<cartSize;i++)
    {
        butto='<button class="del" onclick="removeveg(' + i + ')">x</button>';
        vcart.innerHTML+='<li>'+ orders[i][0]+' '+orders[i][1] + ' '+ butto+ '</li>';
    }
    vtotal.innerHTML='Total: Rs ' + total;
}

vshoppingCart();

function removeveg(n)
{
    var orders=JSON.parse(localStorage.getItem('orders'));
    var total=localStorage.getItem('total');
    total=Number(total)-Number(orders[n][1]);
    orders.splice(n,1);

    // var cart=document.querySelector("#cart");
    // cart.innerHTML=orders.length;
    
    localStorage.setItem('orders',JSON.stringify(orders));
    localStorage.setItem('total',total);
    vshoppingCart();
}