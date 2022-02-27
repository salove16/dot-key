
let arr = [

    {imgUrl:"https://bit.ly/33Ig1FO", name:"VITAMIN C+E SUPER BRIGHT MOISTURIZER", price:"595.00"},
    {imgUrl:"https://bit.ly/3h2LwNO", name:"NIGHT RESET RETINOL + CERAMIDE TREATMENT CREAM", price:"897.00"},
    {imgUrl:"https://bit.ly/3p4ECMg", name:"CICA CALMING NIGHT GEL WITH NIACINAMIDE", price:"595.00"},
    {imgUrl:"https://bit.ly/3v803QE", name:"WATERMELON SUPERGLOW MATTE MOISTURIZER", price:"595.00"},
    {imgUrl:"https://bit.ly/3IdSziO", name:"72HR HYDRATION GEL + PROBIOTICS", price:"707.00"},
    {imgUrl:"https://bit.ly/35ga2sj", name:"AVOCADO SMOOTHIE DAY CREAM SPF 20", price:"845.00"},
    {imgUrl:"https://bit.ly/3sYip3N", name:"DAY & NIGHT CARE COMBO", price:"1,161.00"},
    {imgUrl:"https://bit.ly/3h8RdtH", name:"HAND CREAM + SANITIZER, LAVENDER", price:"395.00"},
    {imgUrl:"https://bit.ly/3BDsffs", name:"FOOT CREAM + DEODORIZER, MINT", price:"395.00"},
    {imgUrl:"https://bit.ly/3v5lUbp", name:"HAND CREAM + SANITIZER, ROSE", price:"395.00"},
    {imgUrl:"https://bit.ly/3BE23kT", name:"HAND CREAM + SANITIZER, MANDARIN", price:"395.00"},
    
    ];


import data from '../scripts/main.js';

let parent = document.querySelector("#three");
data(parent, arr);

import footer from '../components/footer.js';

document.querySelector("#footer").innerHTML = footer();

import filter_sorting from '../components/filter.js';

document.querySelector("#filter_sorting").innerHTML = filter_sorting();

document.querySelector("#select_product").onchange = ()=>{
    // console.log(1)

}

document.querySelector("#select_featured").onchange = ()=>{
    //  console.log(1)
   if(document.querySelector("#select_featured").value == "LTH"){
    let filteredarr = arr.sort(function (a,b){
        return (+a.price - +b.price);
    });
    // console.log(filteredarr);
    data(parent, filteredarr);
   }

   if(document.querySelector("#select_featured").value == "HTL"){
    let filteredarr = arr.sort(function (a,b){
        return (+b.price - +a.price);
    });
    //  console.log(filteredarr);
    data(parent, filteredarr);
   }

   if(document.querySelector("#select_featured").value == "ATZ"){
    let filteredarr = arr.sort(function (a,b){
        if(a.name > b.name){
            return 1;
        }
        if (b.name > a.name) {
            return -1;
        }
        return 0;
    });
    //  console.log(filteredarr);
    data(parent, filteredarr);
   }

   if(document.querySelector("#select_featured").value == "ZTA"){
    let filteredarr = arr.sort(function (a,b){
        if(a.name > b.name){
            return -1;
        }
        if (b.name > a.name) {
            return 1;
        }
        return 0;
    });
    //   console.log(filteredarr);
    data(parent, filteredarr);
   }
    


}