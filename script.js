
        const api="https://fakestoreapi.com/products";
       const get_product=async function(){
          const res=await fetch(api);
          const products=await res.json();
         products.forEach(function(productitem){
           product.innerHTML+=`
           <div class="col-12 col-md-4 col-lg-3 mb-2">
           <div class="card d-flex flex-column" style="height: 430px;">
               <img src="${productitem.image}" alt="" class="card-img-top " style="height: 300px;" onmouseover="show_details(event)" onmouseleave="hide_details(event)" id="img_${productitem.id}">
               <div class="default_hide " id=details_${productitem.id}>
                       ${productitem.description}
                       </div>
               <div class="card-footer bg-white">
                   <div>${productitem.title}</div>
                   <div class="d-flex">
                       <span class="flex-fill">${productitem.price+" EGP"}</span>
                       <div class="d-flex align-items-center">
                           <span >${productitem.rating.rate}</span>
                           <i class="fa-regular fa-star text-warning"></i>
                       </div>
                   </div>
                   <div>
                           ${productitem.rating.count>0?"in stock":"out of stock"}
                   </div>
                   <button class="btn my-bg-green text-light">add to cart</button>
               </div>
           </div>
       </div>
           `;
         })
       }
       get_product();
       const show_details=function(event){
               const id=event.target.id;
      const new_id=id.split("_");
      const qoute_id="details"+"_"+ new_id[1];
      const qoute= document.getElementById( qoute_id);
      qoute.classList.add('show');
      qoute.classList.remove('hide');
      qoute.classList.remove('default_hide');
           }
           const hide_details=function(e){
       console.log("noooooooooo");
       const id=e.target.id;
       const new_id=id.split('_');
       const qoute_id="details"+"_"+new_id[1];
       const qoute= document.getElementById( qoute_id);
       qoute.classList.remove('show');
       qoute.classList.add('hide');
       //qoute.classList.add('default_hide')
   } 
   