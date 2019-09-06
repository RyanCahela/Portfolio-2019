(function heroAnimation(){
    var heroBox = document.querySelector('.about-me__hero-box');
    var heroStyleList = [{
        textContent: 'Design',
        classes: 'green-bg'
    },
    {
        textContent: 'CSS',
        classes: 'purp-bg'
    },
    {
        textContent: 'Javascript',
        classes: 'yellow-bg'
    },
    {
        textContent: 'React',
        classes: 'red-bg'
    },
    {
        textContent: 'UX',
        classes: 'pink-bg'
    },
    {
        textContent: 'Animations',
        classes: 'orange-bg'
    }];


    let currentStyleListIndex = 1;

    
    let interval = setInterval(function morphElement(){
        if(currentStyleListIndex > 0){
            heroBox.classList.remove(heroStyleList[currentStyleListIndex - 1].classes);
        }
        if(currentStyleListIndex === heroStyleList.length) {
            currentStyleListIndex = 0;
        }
        heroBox.textContent = heroStyleList[currentStyleListIndex].textContent;
        heroBox.classList.add(heroStyleList[currentStyleListIndex].classes);
        currentStyleListIndex++;      
    }, 3000);
})();

(function scrollIntoViewInit() {
  //enables scroll on nav click animation
  
  let projectsLink = document.querySelector('a[data-scroll-id="projects"]');
  let contactLink = document.querySelector('a[data-scroll-id="contact"]');
  let projectsSection = document.querySelector('#projects');
  let contactSection = document.querySelector("#contact");

  projectsLink.addEventListener('click', function(e) {
    e.preventDefault();
    projectsSection.scrollIntoView({
      behavior: 'smooth'
    });
  });

  contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    contactSection.scrollIntoView({
      behavior: 'smooth'
    });
  });

})();