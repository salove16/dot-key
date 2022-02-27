

let data = (parent, filterarr) =>{
 parent.innerHTML = "";
    filterarr.map ((items)=>{

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = items.imgUrl;

        let rating = Math.floor(Math.random() * (6 - 2) + 2);;
        let bag = "";
        for(let i=0; i<Math.floor(rating); i++){
            bag += "★";
        }

        let heart = document.createElement("p")
        heart.textContent = "♡";
        heart.style.display = "inline-block"
        heart.style.marginLeft = "60%"
        heart.style.fontSize = "25px"

        let name = document.createElement("h4");
        name.textContent = items.name;

        let price = document.createElement("h6");
        price.textContent = `Rs. ${items.price}`;

        let btn = document.createElement("button");
        btn.textContent = "ADD TO CART";
        btn.onclick=()=>{
            alert("Your item added successfully!")
        }

        div.append(img, bag, rating, heart, name, price, btn);

        parent.append(div);
    });
}

export default data;

