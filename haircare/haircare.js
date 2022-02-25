let background1_data = [{
    icon: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/12x.png?v=1643031632",
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/girl_1.png?v=1643013901",
    title: "CONTROL HAIRFALL"
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/dand.png?v=1643031643",
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/girl_3.png?v=1643013978",
    title: "SCALP CARE"
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/88.png?v=1643031666",
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/girl_2_5f178ee9-cbb6-4d93-81fe-248206564305.png?v=1643014000",
    title: "REPAIR DAMAGE"
  }]

  let items = [{
    image: "//cdn.shopify.com/s/files/1/0361/8553/8692/products/1.png?v=1642746025",
    rating: "4.9/5",
    name: "Moringa & Argan Hair Fall Control Shampoo",
    price: "Rs: 695.00",
    discounted_price: "Rs: 625.00"
  },
  {
    image: "//cdn.shopify.com/s/files/1/0361/8553/8692/products/1_b737be29-1463-49be-993d-f501174f5ed6.png?v=1642747503",
    rating: "5.0/5",
    name: "Pea Peptide Strengthening Moringa & Argan Hair Mask",
    price: "Rs: 645.00",
    discounted_price: "Rs: 580.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_ad531b5f-96d9-45c9-a81e-53cb3371c56c.png?v=1642749296",
    rating: "5.0/5",
    name: "Pea Peptide + Cysteine Hair Volumising Serum",
    price: "Rs: 745.00",
    discounted_price: "Rs: 633.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_7af0a876-4de1-4ca4-8fb9-431f10bed3d4.png?v=1643623502",
    rating: "5.0/5",
    name: "AHA Exfoliation Apple Cider Hair & Scalp Scrub",
    price: "Rs: 745.00",
    discounted_price: "Rs: 633.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_a157d397-fbd5-4712-9cf0-7a788decafcd.png?v=1642746829",
    rating: "5.0/5",
    name: "Quinoa Protein & Olive Damage Repair Shampoo",
    price: "Rs: 695.00",
    discounted_price: "Rs: 590.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_a157d397-fbd5-4712-9cf0-7a788decafcd.png?v=1642746829",
    rating: "50/5",
    name: "Hyaluronic Hydrating Quinoa Protein & Olive Hair Mask",
    price: "Rs: 645.00",
    discounted_price: "Rs: 580.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1b863967-15e3-4a22-877d-870a4a542b34.png?v=1642748601",
    rating: "5.0/5",
    name: "Hyaluronic + Ceramide Hair Treatment Serum",
    price: "Rs: 745.00",
    discounted_price: "Rs: 670.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_7.jpg?v=1643096418",
    rating: "5.0/5",
    name: "Ditch the Damage Combo",
    price: "Rs: 2,085.00",
    discounted_price: "Rs: 1,772.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_6_44a76a9c-93bc-4179-a6f8-bc5f0794ee05.jpg?v=1643096708",
    rating: "5.0/5",
    name: "Care & Repair Power Combo",
    price: "Rs: 1,340.00",
    discounted_price: "Rs: 1,206.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_6.jpg?v=1643115129",
    rating: "5.0/5",
    name: "Hairfall Farewell Combo",
    price: "Rs: 2,085.00",
    discounted_price: "Rs: 1,772.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_6.jpg?v=1643115129",
    rating: "5.0/5",
    name: "Strong & Shiny Hair Combo",
    price: "Rs: 1,340.00",
    discounted_price: "Rs: 1,206.00"
  },];



  let append_background1 = document.getElementById("background1")

  background1_data.forEach(el => {
    let div = document.createElement("div")

    let div1 = document.createElement("div")
    div1.setAttribute("class", "slide-slicker")
    let div2 = document.createElement("div")
    div2.setAttribute("class", "hair-icon")
    let div3 = document.createElement("div")
    div3.setAttribute("class", "hair-image")
    let div4 = document.createElement("div")
    div4.setAttribute("class", "hair-text")
    let icon = document.createElement("img")
    icon.src = el.icon
    div2.append(icon)
    let image = document.createElement("img")
    image.src = el.image
    div3.append(image)
    let title = document.createElement("p")
    title.textContent = el.title
    div4.append(title)
    div1.append(div2, div3, div4)
    div.append(div1)
    append_background1.append(div)
  })





//   let product_display_grid = document.getElementById("hair-items-product")
//   items.forEach(el => {
//     let div = document.createElement("div")
//     div.setAttribute("class","inner-grid-div")
//     let div_box = document.createElement("div")
// div_box.setAttribute("class","div-box")

//     let imageDiv = document.createElement("div")
//     imageDiv.setAttribute("class", "imagediv")
    
//     let img=document.createElement("img")
//     img.src=el.image
    
//     let discountDiv=document.createElement("div")

//     discountDiv.setAttribute("class", "discountdiv")
//     let offer=document.createElement("p")
//     offer.textContent="save 10%"
//     discountDiv.append(offer)
//     imageDiv.append(discountDiv,img)
//     let rateDiv = document.createElement("div")
//      let rate=document.createElement("P")
//      rate.textContent=el.rating

//     let nameDiv = document.createElement("div")
//     let name=document.createElement("h4")
//     name.textContent=el.name
//     nameDiv.append(name)
//     let priceDiv = document.createElement("div")
//     priceDiv.setAttribute("calss","price-div")
//     let price=document.createElement("del")
//     price.textContent=el.price
//     let discountPrice=document.createElement("h5")
//     discountPrice.textContent=el.discounted_price
//     priceDiv.append(price,discountPrice)
//     let adddiv = document.createElement("div")
//     let addCartButton=document.createElement("button")


//     addCartButton.textContent="Add To Cart"
//     adddiv.append(addCartButton)

//     div_box.append(imageDiv,rateDiv,nameDiv,priceDiv,adddiv)
//     div.append(div_box)
//     product_display_grid.append(div)
//   })

// function createProductCard(data,parent){
//     data.map((elem)=>{
//         let mainDiv = document.createElement("div");
//         mainDiv.id="mainDiv";
//         let imgDiv = document.createElement("img");
//         imgDiv.src=elem.prodImgUrl[0];
//         let saveDiv = document.createElement("div");
//         saveDiv.textContent = "SAVE 10%";
//         saveDiv.id="saveDiv";
//         let star =  document.createElement("i");
//         star.setAttribute("class","fa-solid fa-star")
//         let max = 4.0;
//         let min = 4.0;
//         let value = Math.random() * (max - min + 1) + min;
//         value = value.toFixed(1);
//         let rating =  document.createElement("span");
//         rating.textContent = ` ${value}/5 `;
//         rating.id ="rating";
//         let review =  document.createElement("span");
//         review.id = "review";
//         review.textContent = `(${elem.review})`
//         let nameDiv = document.createElement("div");
//         nameDiv.textContent = elem.DispName;
//         nameDiv.id = "nameDiv";
//         let subNameDiv = document.createElement("div");
//         subNameDiv.textContent = elem.dNameSub;
//         subNameDiv.id = "subNameDiv";
//         let mainPrice = document.createElement("div");
//         mainPrice.id="mainPrice";
//         let discount = elem.price-(elem.price/10);
//         let priceDiv = document.createElement("div");
//         priceDiv.textContent = `RS: ${elem.price} `;
//         priceDiv.style.textDecoration = "line-through"
//         let discountSpan = document.createElement("div");
//         discountSpan.textContent = ` RS: ${discount}`;
//         mainPrice.append(priceDiv,discountSpan)
//         let cart = document.createElement("button");
//         cart.textContent = "ADD TO CART";
//         cart.id = "Addcart";
//         mainDiv.append(imgDiv,saveDiv,star,rating,review,nameDiv,subNameDiv,mainPrice,cart)
//         parent.append(mainDiv);
//     });
// }


let product_data=[{
    DispName: "Moringa & Argan Hair Fall Control Shampoo",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:695.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1.png?v=1642746025",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Pea Peptide Strengthening Moringa & Argan Hair Mask",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:645.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "//cdn.shopify.com/s/files/1/0361/8553/8692/products/1_b737be29-1463-49be-993d-f501174f5ed6.png?v=1642747503",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Pea Peptide + Cysteine Hair Volumising Serum",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:745.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_ad531b5f-96d9-45c9-a81e-53cb3371c56c.png?v=1642749296",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "AHA Exfoliation Apple Cider Hair & Scalp Scrub",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:745.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_7af0a876-4de1-4ca4-8fb9-431f10bed3d4.png?v=1643623502",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Quinoa Protein & Olive Damage Repair Shampoo",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:695.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_a157d397-fbd5-4712-9cf0-7a788decafcd.png?v=1642746829",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Hyaluronic Hydrating Quinoa Protein & Olive Hair Mask",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:645.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_5068fbb4-12c3-46df-aa0c-03e340c3b99c.png?v=1642747897",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Hyaluronic + Ceramide Hair Treatment Serum",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:745.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1b863967-15e3-4a22-877d-870a4a542b34.png?v=1642748601",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Ditch the Damage Combo",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:2085.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_7.jpg?v=1643096418",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Care & Repair Power Combo",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:1340.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_6_44a76a9c-93bc-4179-a6f8-bc5f0794ee05.jpg?v=1643096708",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Hairfall Farewell Combo",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:2085.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_5.jpg?v=1643113374",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Strong & Shiny Hair Combo",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:1340.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_6.jpg?v=1643115129",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },]
