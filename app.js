(function(){

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

    //Navbar animation on pageload
    $('#navbar').removeClass('vert-off').addClass('vert-on');

    //page visability toggle events
    const togglePage = id => {
        if($(id).hasClass("not-vis")){
            $(id).removeClass("not-vis").addClass("vis");
        }
        else if ($(id).hasClass("vis")){
            $(id).removeClass("vis").addClass("not-vis");
        }
        
    };

    //this function uses the name tag within html elements in the dom to activate
    //js events to manipulate the dom
    $( document ).on( "click", ( event ) => {
        const name = event.target.getAttribute('name');
        togglePage(`#${name}`);
      });

    //

    
    const scrollTrigger = (el) => {

        const observer = new IntersectionObserver(function(entries) {
            console.log(entries);

                togglePage(el);
        }, { threshold: [0.4] });
        
        observer.observe(document.querySelector(el));

    };
    
    scrollTrigger('#about-me');
    scrollTrigger('#my-media');

})();

