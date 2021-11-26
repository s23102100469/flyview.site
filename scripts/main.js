document.addEventListener('DOMContentLoaded', function(){
    const header = document.querySelector('.header');
    const btn = document.querySelector('.header__button');
    const text = document.querySelector('.main__text');
    const txs = document.querySelectorAll('.text p');
    const cont = document.querySelector('.main__business > .wrapper > .content');
    const plan = document.querySelector('.plan');
    const h2 = document.querySelector('.main__join > h2');
    const txs2 = document.querySelector('.main__join > .content > .text');
    const li = document.querySelectorAll('.header__li > a[href^="#"]');

    for (let i = 0; i < li.length; i++){
        li[i].addEventListener('click', (e) => {
          e.preventDefault();
          header.classList.remove('active');
          let href = li[i].getAttribute('href');
          let target = document.getElementById(href.replace('#', ''));
          const rect = target.getBoundingClientRect().top;
          const offset = window.pageYOffset;
          const position = rect + offset -80;
          window.scrollTo({
            top: position,
            behavior: 'smooth',
          });
        });
    }

    btn.addEventListener('click', () => {
        header.classList.toggle('active');
    })

    window.addEventListener('scroll',() => {
       if(450 < window.scrollY){
            header.classList.add('black');
       } else {
           header.classList.remove('black');
       }
    })


    let cb = function(entries, observer){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('left');
                observer.unobserve(entry.target);
            } 
        });
    }

    const io = new IntersectionObserver(cb);
    io.observe(text);
    txs.forEach((tx) => {
        io.observe(tx);
    })
    io.observe(cont);
    io.observe(plan);
    io.observe(h2);
    io.observe(txs2);
})
