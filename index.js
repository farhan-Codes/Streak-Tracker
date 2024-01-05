function cardHandler(pg) {
    let rval = Math.floor(Math.random()*284);
    let vperc = (rval/284)*100;
    let bval = Math.abs((vperc*284)/100-284);
    pg.querySelector('.per').innerText=`${Math.round(vperc)}%`;
    pg.querySelector('.vcircle').style.strokeDashoffset=`${bval}px`;
}

let gyp = document.querySelector('#ygc');
let gmp = document.querySelector('#mgc');
let gtp = document.querySelector('#dgc');
let syp = document.querySelector('#ysc');
let smp = document.querySelector('#msc');
let stp = document.querySelector('#dsc');

cardHandler(gyp)
cardHandler(gmp)
cardHandler(gtp)
cardHandler(syp)
cardHandler(smp)
cardHandler(stp)