gsap.from(".page1 .circle",{
   scale:0,
    duration:2,
    rotate:360,
    delay:1,
})
gsap.from(".page2 .text",{
     duration:2,
     left:"120%",
     scrollTrigger:{
        trigger: ".page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub:3,
       pin:true,
        
     }
 })