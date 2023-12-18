const images = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

const imagesContainer = document.querySelector(".images");

for (let i = 0; i < images.length; i++){
    
    if (i == 0){
        imagesContainer.innerHTML += ` 
            <div class="image active">
                <img src="${images[i]}" alt="">
            </div>
        `;
    }

    else{
        imagesContainer.innerHTML += ` 
            <div class="image">
                <img src="${images[i]}" alt="">
            </div>
        `;
    }

}

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const allItems = document.querySelectorAll(".image")

let currentImage = 0;

prevButton.addEventListener("click", prevSlider);

nextButton.addEventListener("click", nextSlider);

let autoplay = setInterval(nextSlider, 3000);

const stopAutoplayBtn = document.querySelector('.stop-autoplay');

stopAutoplayBtn.addEventListener('click', function(){

    if (autoplay == null){
        autoplay = setInterval(nextSlider, 3000);

        stopAutoplayBtn.innerHTML = 'STOP';
    }

    else{
        clearInterval(autoplay);
        autoplay = null;

        stopAutoplayBtn.innerHTML = 'START';
    }
})


/* FUNZIONI */

function nextSlider(){
    allItems[currentImage].classList.remove("active");

    if (currentImage < (allItems.length - 1)){
        
        currentImage++;
    }

    else if (currentImage == (allItems.length - 1)){

        currentImage = 0;
    }

    allItems[currentImage].classList.add("active");
};

function prevSlider(){
    allItems[currentImage].classList.remove("active");

    if (currentImage > 0){
        
        currentImage--;
    }

    else if (currentImage == 0){

        currentImage = (allItems.length - 1);
    }
   

    allItems[currentImage].classList.add("active");
};

