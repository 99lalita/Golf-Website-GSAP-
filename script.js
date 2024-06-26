

var cursorPointer = document.querySelector("#cursor");
var mainBody = document.querySelector("#main");

gsap.to("#nav", {
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
});

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})



// mainBody.addEventListener("mouseenter",function() {
//     // palyBtn.style.opacity = 1;
//     // palyBtn.style.scale = 1;
//     gsap.to(cursorPointer, {
//         scale:1,
//         opacity:1
//     })
// })

// mainBody.addEventListener("mouseleave", function() {
//     // palyBtn.style.opacity = 0;
//     // palyBtn.style.scale = 0;
//     gsap.to(cursorPointer, {
//         scale:0,
//         opacity:0
//     })
// })

// mainBody.addEventListener("mousemove", function (dets) {
//     gsap.to(cursorPointer, {
//       left: dets.x - 80,
//       top: dets.y - 70,
//     });
//   });

var cursorPointer = document.querySelector("#cursor");
var blurPointer = document.querySelector("#blur")
var navBar = document.querySelector("#nav")


document.addEventListener("mousemove",function(dets) {
    cursorPointer.style.left = dets.x +30+"px";
    cursorPointer.style.top = dets.y +"px";
    blurPointer.style.left = dets.x - 200 + "px";
    blurPointer.style.top = dets.y - 200 + "px";
})


var h4 = document.querySelectorAll("#nav h4")
h4.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        cursorPointer.style.scale= 3
        cursorPointer.style.border = "1px solid #fff"
        cursorPointer.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function() {
        cursorPointer.style.scale=1
        cursorPointer.style.border = "0px solid #95c11e"
        cursorPointer.style.backgroundColor = "#95c11e"
    })
})

gsap.from()