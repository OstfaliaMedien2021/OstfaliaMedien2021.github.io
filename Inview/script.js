inView('.someSelector')
    .on('enter', el => {
        el.style.opacity = 1;
        console.log(el.style.opacity);
    })
    .on('exit', el => {
        el.style.opacity = 0.5;
        console.log(el.style.opacity);
    });

