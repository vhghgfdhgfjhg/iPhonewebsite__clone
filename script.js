// var tl = WebGLSampler.timeline({
//             scrollTrigger: {
//                 trigger : '.body',
//                 markers:true,
//                 scroller:"body",
//                 start:"top 50%",
//                 end:"top 0%",
//                 scrub:4
//             }
// })

// tl.to(".video",{

// })

var video = document.querySelector(".videocont")
var video1 = document.querySelector("video")

video.addEventListener("mousemove",function(){
    video.style.width = "1350px";
    video.style.transition = " all 10s linear"
    video.style.borderRadius = "20px"
    video1.style.borderRadius = "40px"
})

video.addEventListener("mouseleave",function(){
    video.style.width = "100%";
    video.style.transition = " all 10s linear"
    video1.style.borderRadius = "0px"
})


