(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{10:function(t,e,i){t.exports={item:"ProductItem_item__3xw8I",price:"ProductItem_price__2S560",actions:"ProductItem_actions__16D5U",imgWrap:"ProductItem_imgWrap__3xdV5"}},14:function(t,e,i){t.exports={notification:"Notification_notification__To0i6",error:"Notification_error__2oneQ",success:"Notification_success__3AQjk"}},20:function(t,e,i){t.exports={button:"CartButton_button__3eFW-",badge:"CartButton_badge__3AO0y"}},26:function(t,e,i){t.exports={card:"Card_card__yUQyq"}},27:function(t,e,i){t.exports={header:"MainHeader_header__3nRAB"}},28:function(t,e,i){t.exports={products:"Products_products__3wHlG"}},35:function(t,e,i){},42:function(t,e,i){"use strict";i.r(e);var c=i(23),a=i.n(c),n=(i(35),i(11)),r=i(17),s=i(9),o=i(1),l=i.n(o),u=i(3),d=i(5),m=Object(d.b)({name:"notifications",initialState:{notification:null},reducers:{showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),A=m.actions,j=m.reducer,f=Object(d.b)({name:"cartOperations",initialState:{items:[],totalQuantity:0,totalAmount:0,isChanged:!1},reducers:{addItem:function(t,e){t.totalQuantity++,t.isChanged=!0;var i=e.payload;t.totalAmount=t.totalAmount+i.price;var c=t.items.find((function(t){return t.id===i.id}));c?(c.quantity++,c.totalPrice=c.totalPrice+c.price):t.items.push({id:i.id,title:i.title,price:i.price,quantity:1,totalPrice:i.price})},removeItem:function(t,e){t.totalQuantity--,t.isChanged=!0;var i=e.payload,c=t.items.find((function(t){return t.id===i}));t.totalAmount=t.totalAmount-c.price,1===c.quantity?t.items=t.items.filter((function(t){return t.id!==i})):(c.quantity--,c.totalPrice=c.totalPrice-c.price)},replaceCartItems:function(t,e){t.items=e.payload.items,t.totalQuantity=e.payload.totalQuantity,t.totalAmount=e.payload.totalAmount}}}),h=f.actions,b=f.reducer,p=i(26),O=i.n(p),g=i(0),x=function(t){return Object(g.jsx)("section",{className:"".concat(O.a.card," ").concat(t.className?t.className:""),children:t.children})},y=i(7),C=i.n(y),v=i(6),w=i.n(v),q=function(t){var e=Object(u.b)(),i=t.item,c=i.id,a=i.title,n=i.quantity,r=i.total,s=i.price;return Object(g.jsxs)("li",{className:w.a.item,children:[Object(g.jsxs)("header",{children:[Object(g.jsx)("h3",{children:a}),Object(g.jsxs)("div",{className:w.a.price,children:["\u20b9",r.toFixed(2)," ",Object(g.jsxs)("span",{className:w.a.itemprice,children:["(","\u20b9",s.toFixed(2),"/item)"]})]})]}),Object(g.jsxs)("div",{className:w.a.details,children:[Object(g.jsxs)("div",{className:w.a.quantity,children:["x ",Object(g.jsx)("span",{children:n})]}),Object(g.jsxs)("div",{className:w.a.actions,children:[Object(g.jsx)("button",{onClick:function(){e(h.removeItem(c))},children:"-"}),Object(g.jsx)("button",{onClick:function(){e(h.addItem(t.item))},children:"+"})]})]})]})},N=function(){var t=Object(u.c)((function(t){return t.cartOperations.items})),e=Object(u.c)((function(t){return t.cartOperations.totalAmount}));return Object(g.jsxs)(l.a.Fragment,{children:[Object(g.jsx)("div",{className:C.a.backdrop}),Object(g.jsxs)(x,{className:C.a.cart,children:[Object(g.jsx)("h2",{children:"Your Shopping Cart"}),0===t.length?Object(g.jsxs)("div",{className:C.a.emptyCart,children:[Object(g.jsx)("div",{className:C.a.imgWrap,children:Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"empty cart icon"})}),Object(g.jsx)("p",{children:"Is empty!"})]}):Object(g.jsx)("ul",{children:t.map((function(t){return Object(g.jsx)(q,{item:{id:t.id,title:t.title,quantity:t.quantity,total:t.totalPrice,price:t.price}},t.id)}))}),t.length>0&&Object(g.jsxs)("div",{className:C.a.cartTotal,children:[Object(g.jsx)("span",{children:"Total\xa0\xa0\xa0"}),Object(g.jsxs)("span",{children:["\u20b9",e.toFixed(2),"/-"]})]})]})]})},H=i(20),I=i.n(H),k=Object(d.b)({name:"cartToggle",initialState:{showCart:!1},reducers:{toggleCart:function(t){t.showCart=!t.showCart}}}),B=k.actions,M=k.reducer,Q=function(t){var e=Object(u.c)((function(t){return t.cartOperations.totalQuantity})),i=Object(u.b)();return Object(g.jsxs)("button",{onClick:function(){i(B.toggleCart())},className:I.a.button,children:[Object(g.jsx)("span",{children:"My Cart"}),Object(g.jsx)("span",{className:I.a.badge,children:e})]})},W=i(27),D=i.n(W),R=function(t){return Object(g.jsxs)("header",{className:D.a.header,children:[Object(g.jsx)("h1",{children:"Redux Demo"}),Object(g.jsx)("nav",{children:Object(g.jsx)("ul",{children:Object(g.jsx)("li",{children:Object(g.jsx)(Q,{})})})})]})},P=function(t){return Object(g.jsxs)(o.Fragment,{children:[Object(g.jsx)(R,{}),Object(g.jsx)("main",{children:t.children})]})},T=i(10),U=i.n(T),L=function(t){var e=Object(u.b)(),i=t.title,c=t.price,a=t.description,n=t.id,r=t.imageUrl;return Object(g.jsx)("li",{className:U.a.item,children:Object(g.jsxs)(x,{children:[Object(g.jsxs)("header",{children:[Object(g.jsx)("h3",{children:i}),Object(g.jsxs)("div",{className:U.a.price,children:["\u20b9",c.toFixed(2)]})]}),Object(g.jsx)("div",{className:U.a.imgWrap,children:Object(g.jsx)("img",{src:r,alt:"product image"})}),Object(g.jsx)("p",{children:a}),Object(g.jsx)("div",{className:U.a.actions,children:Object(g.jsx)("button",{onClick:function(){var t={id:n,title:i,price:c};e(h.addItem(t))},children:"Add to Cart"})})]})})},S=i(28),Y=i.n(S),E=[{id:"p1",title:"Casual Shoes",price:999,description:"Casual trendy fashion sneaker shoes for men.",imageUrl:"https://rukminim1.flixcart.com/image/880/1056/l4k7ssw0/shoe/2/x/w/9-casual-sneaker-shoes-and-party-wear-shoes-casuals-for-men-kwik-original-imagffqduz29dcpq.jpeg?q=50"},{id:"p2",title:"Hand Bag",price:749,description:"White shoulder hand bag for women - extra spacious",imageUrl:"https://rukminim1.flixcart.com/image/880/1056/kql8sy80/hand-messenger-bag/l/i/j/women-grey-shoulder-bag-hand-bag-vanity-bag-blz01-hand-held-bag-original-imag4ktcgzmxdkzs.jpeg?q=50"},{id:"p3",title:"Wrist Watch",price:2499,description:"Analog Watch - For Men",imageUrl:"https://rukminim1.flixcart.com/image/880/1056/ktyp8cw0/watch/v/8/m/a1910-ltp-b110m-1avdf-casio-women-original-imag774tprawrgnv.jpeg?q=50"}],X=function(t){return Object(g.jsxs)("section",{className:Y.a.products,children:[Object(g.jsx)("h2",{children:"Add your Favourite Products to Cart"}),Object(g.jsx)("ul",{children:E.map((function(t){return Object(g.jsx)(L,{id:t.id,title:t.title,price:t.price,description:t.description,imageUrl:t.imageUrl},t.id)}))})]})},F=i(14),J=i.n(F),K=function(t){var e="";"error"===t.status&&(e=J.a.error),"success"===t.status&&(e=J.a.success);var i="".concat(J.a.notification," ").concat(e);return Object(g.jsxs)("section",{className:i,children:[Object(g.jsx)("h2",{children:t.title}),Object(g.jsx)("p",{children:t.message})]})},z=!0;var V=function(){var t=Object(u.c)((function(t){return t.cartToggle.showCart})),e=Object(u.c)((function(t){return t.notifications.notification})),i=Object(u.b)(),c=Object(o.useState)(!0),a=Object(s.a)(c,2),l=a[0],d=a[1],m=Object(u.c)((function(t){return t.cartOperations}));return Object(o.useEffect)((function(){var t=function(){var t=Object(r.a)(Object(n.a)().mark((function t(){var e,c;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://react-http-88862-default-rtdb.firebaseio.com/cartInfo.json");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Something went wrong!");case 5:return t.next=7,e.json();case 7:c=t.sent,console.log(c),i(h.replaceCartItems({items:c.items||[],totalQuantity:c.totalQuantity,totalAmount:c.totalAmount}));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().catch((function(t){i(A.showNotification({status:"error",title:"Error",message:t}))}))}),[i]),Object(o.useEffect)((function(){var t=function(){var t=Object(r.a)(Object(n.a)().mark((function t(){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(A.showNotification({status:"pending",title:"Sending...",message:"Sending cart info to database..."})),t.next=3,fetch("https://react-http-88862-default-rtdb.firebaseio.com/cartInfo.json",{method:"PUT",body:JSON.stringify({items:m.items,totalQuantity:m.totalQuantity,totalAmount:m.totalAmount}),headers:{"Content-Type":"application/json"}});case 3:if(t.sent.ok){t.next=6;break}throw new Error("Http request falied!");case 6:i(A.showNotification({status:"success",title:"Success",message:"Cart info was updated successfully!"}));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(!z){m.isChanged&&t().catch((function(t){i(A.showNotification({status:"error",title:"Error",message:t}))}));var e=setTimeout((function(){d(!1)}),5e3);return d(!0),function(){clearTimeout(e)}}z=!1}),[m,i]),Object(g.jsxs)(g.Fragment,{children:[e&&l&&Object(g.jsx)(K,{status:e.status,title:e.title,message:e.message}),Object(g.jsxs)(P,{children:[t&&Object(g.jsx)(N,{}),Object(g.jsx)(X,{})]})]})},G=Object(d.a)({reducer:{cartToggle:M,cartOperations:b,notifications:j}});a.a.createRoot(document.getElementById("root")).render(Object(g.jsx)(u.a,{store:G,children:Object(g.jsx)(V,{})}))},6:function(t,e,i){t.exports={item:"CartItem_item__35BW3",details:"CartItem_details__1_9dN",quantity:"CartItem_quantity__1lJNg",price:"CartItem_price__2zS0e",itemprice:"CartItem_itemprice__UlQvI",actions:"CartItem_actions__B4Vhj"}},7:function(t,e,i){t.exports={cart:"Cart_cart__7p7mu",backdrop:"Cart_backdrop__3AiXl",cartTotal:"Cart_cartTotal__1cXHm",emptyCart:"Cart_emptyCart__2qQFg",imgWrap:"Cart_imgWrap__3T5vw"}}},[[42,1,2]]]);
//# sourceMappingURL=main.0a2fa59b.chunk.js.map