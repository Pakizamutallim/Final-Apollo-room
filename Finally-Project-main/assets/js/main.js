
$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    $('.owl-two').owlCarousel({
        loop:true,
        margin:30,
        nav:false, 
        dots:false,
        stagePadding: 150,
        responsive:{
            0:{
                items:1,
                stagePadding: 0,
            },
            800:{
                items:1,
                // stagePadding: 0,
            },
            1000:{
                items:1
            }
        }
    })



    $('.owl-three').owlCarousel({
        loop:true,
        margin:0,
        nav:false, 
        dots:false, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3 
            },
            1000:{
                items:5
            }
        }
    })
})


const menuBtn = document.querySelector(".menu-bar").addEventListener ("click", ()=>{
    const hidden = document.querySelector(".hidden-menu").style.display = "block"
})

const closeBtn = document.querySelector(".close-btn").addEventListener("click", ()=>{
    const hidden = document.querySelector(".hidden-menu")
    hidden.style.display = "none" 
}) 








// $('menu-bar').click(function(){
//     $('hidden-menu').toggle(1000); 
    
// })





const topRaiting = document.querySelector(".top-raiting")
const bestSelling = document.querySelector(".best-selling")
topRaiting.addEventListener("click", ()=>{
    const featured = document.querySelector(".features")
    console.log(topRaiting.innerHTML);
    // topRaiting.style.display = "flex !important"
    // bestSelling.style.display = "none"
    // featured.style.display = "none"
}) 


bestSelling.addEventListener("click", ()=>{
topRaiting.style.display = "none"
bestSelling.style.display = "flex"
featured.style.display = "none"
}) 





// const text = document.querySelector(".text p"); 
// text.innerHTML = text.innertText.split('').map(
    //     (char, i) =>
    //     `<span style="transform: rotate(${i * 8.3}deg)">${char}</span>`
    // ).join("")
    
    // alert()



    





