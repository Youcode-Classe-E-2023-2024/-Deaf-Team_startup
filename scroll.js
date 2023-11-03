const scrollToTop = () => {
    const c = window.scrollY;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      console.log('c')
      window.scrollTo(0, c - c / 4);
    }
    
  };
  
  const scroll = document.querySelector(".scroll");
  
  window.addEventListener("scroll", function() {
    var scrollPos = window.scrollY;
  
    if (scrollPos > 700) {
      scroll.style.display = "block";
    } else {
      scroll.style.display = "none";
    }
  });
  
  
    scroll.addEventListener('click', () => {
      scrollToTop();
    });
  
  