var tl = gsap.timeline()

tl.from("#em",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.5
})
tl.from(".links",{
    y:-30,
    opacity:0,
    duration:0.5,
})
tl.from(".main",{
    y:20,
    opacity:0
})
tl.from(".skills-section",{
    y:20,
    opacity:0
})