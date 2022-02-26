import {navbar,navcar} from "../components/navbar.js";
let nav_img= document.querySelector(".black_nav");
nav_img.innerHTML=navbar();


let x=0;
navcar(x);
import { whitenav } from "../components/whitenav.js";
let whiteNav = document.querySelector(".white_nav");
whiteNav.innerHTML=whitenav();

// ---------------------------------navbar ends here---------------------------------
import touch from "../components/touch.js";
let touchslide=document.querySelector("#touch_sld");
touchslide.innerHTML=touch();

import reviews from "../components/touchslider.js";
 let customer = document.querySelector("#customer_reviews");
 customer.innerHTML=reviews();
// -----------------------footer-------------------------------------------------------------------
//  let ft = document.querySelector("bottom");
import footer from "../components/footer.js";
let ft = document.querySelector("#footer");
ft.innerHTML=footer();
 