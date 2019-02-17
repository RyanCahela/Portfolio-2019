(function heroAnimation(){
    var heroContainer = document.querySelector('.about-me__hero-box__container');
    var heroBoxArray = Array.from(document.querySelectorAll('.about-me__hero-box'));
    
    heroBoxArray.forEach(function fadeOut(item,index) {
        let multiplyer = index + 1;

        let timer = setTimeout(function timer() {
            item.classList.add('about-me__hero-box__fadeout')
            console.log(index);
            console.log(heroBoxArray.length);
            if(multiplyer === heroBoxArray.length) {
                heroBoxArray.forEach(resetFadeOutAnimation);
                heroBoxArray.forEach(fadeOut);
            }
        }, 3000 * multiplyer );
    });

    function resetFadeOutAnimation(item) {
        item.classList.remove('about-me__hero-box__fadeout');
    }


    function runFadeOutAnimation(item,index) {
        let multiplyer = index + 1;

        let timer = setTimeout(function timer() {
            item.classList.toggle('about-me__hero-box__fadeout')
            console.log(index);
            console.log(heroBoxArray.length);
            if(multiplyer === heroBoxArray.length) {
                console.log('animation done');
                runFadeOutAnimation();
            }
        }, 3000 * multiplyer );
    }



    console.log(heroBoxArray);



})();