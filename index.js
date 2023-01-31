let texts = document.getElementsByClassName('anim-text')
let textsGP =  document.getElementById('anim-text-container')

let services = document.querySelectorAll('.service')
let serviceTitle = document.querySelector('.title')

let header =  document.getElementById('header')

let body = document.querySelector('body')

let clientList = document.querySelectorAll('.client')


let bodytl = gsap.timeline({
    scrollTrigger : {
        trigger : '.client-container',
        start : '90% bottom',
        toggleActions : 'play none none reset'
}
})

bodytl.to(body ,{ backgroundColor : '#000' , color: '#FFF'} )
bodytl.to('.borderChange', { borderColor: 'white'} , '<')



gsap.to('.client' , {flexGrow : '1' , duration: 2 , scrollTrigger : {
    trigger: '.client-container',
    start: 'bottom bottom',
}})


let landtl = gsap.timeline()

landtl.set(header , {opacity : 0})
landtl.set(texts, {yPercent : 100})
landtl.to(header, {opacity: 1 , duration : 2})
landtl.to(texts , {yPercent : 0 })
landtl.to(textsGP , {marginTop : 0})


gsap.to(services , {opacity: 1 , stagger : .5 , scrollTrigger :{
        trigger: '.service-trigger',
        start: 'top bottom',
        end: 'top 30%',
        scrub: true,
        once: true,
}})

gsap.to(serviceTitle, {position: 'relative', top : '100%', yPercent: -100 ,duration: 2 , scrollTrigger : {
    trigger: '.service-trigger',
    start: 'top bottom',
    end: 'top 30%',
    scrub: true,
}}, )
