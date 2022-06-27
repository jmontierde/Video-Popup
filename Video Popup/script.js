const btnEl = document.querySelector(".btn-video");
const videoTrailerEl = document.querySelector(".video-trailer");
const closeVideo = document.querySelector(".close-video")
const videoEl = document.querySelector("video");
btnEl.addEventListener("click", ()=>{
      videoTrailerEl.classList.remove("active");
      videoTrailerEl.style.display = "block";
});

videoEl.addEventListener("mouseover", () =>{
            closeVideo.style.visibility = "visible";
});


videoEl.addEventListener("mouseleave", () =>{{
     closeVideo.style.visibility = "hidden"

      
}})



closeVideo.addEventListener("click", ()=>{
      videoTrailerEl.classList.add("active");

      videoTrailerEl.style.display = "none";
      videoEl.pause();
      videoEl.currentTime = 0;

});