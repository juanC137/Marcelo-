//SMOOTH QANDO ROLA A PAGINA

const scrollReveal = ScrollReveal({
    origin: 'top', //De onde vai começar a animação no caso TOP
    distance: '30px',
    duration:700, //duração da animação
    reset : true//quando rolar para cima vai ter  animação tambem por causa disso

})

//Nessa parte eu to declarando os objetos que vão receber a animação como no site da empresa estava com seções então #home é uma seção e .image é o objeto que vai receber animação
scrollReveal.reveal(`
#home .botao, 
#home .text,
#about .image,
#about .text,
#services header,
#services .card,
#testimonials header,
#testimonials .testimonials,
#contact .text,
#contact .links,
footer .brand ,
footer .social
`
, {interval:100} )