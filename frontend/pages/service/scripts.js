$(function() {
    
    var menu =$(".menu");
    var hamburgur =$(".hamburgur");
    var line = $(".line");
    var menuOpen;

    function openMenu(){
        menu.css("left", "0px");
        line.css("background","#fff");
        menuOpen = true;
    }

    function closeMenu(){
        menu.css("left", "-320px");
        line.css("background", "#bcad90");
        menuOpen = false;
    }

    function toggleMenu(){
        if(menuOpen){
            closeMenu();
        }
        else{
            openMenu();
        }
    
    }

    hamburgur.on({
        mouseenter: function(){
            openMenu();
        }
    });

    menu.on({
        mouseleave: function(){
            closeMenu();
        } 
    });

    hamburgur.on({
        click: function(){
            toggleMenu();
        }
    });
});

