window.addEventListener('load', function () {
    titleOnLoad();
});

function openDrawer(drawer_id, interval = 250) {
    "Opens Drawer and edits carrot by Id"
    var drawer = document.getElementById("drawer-" + drawer_id);
    var carrot = document.getElementById("carrot-" + drawer_id);
        
    if (drawer.style.display == "") {
        drawer.animate({opacity: [1, 0]}, interval).onfinish = function() {
            drawer.style.display = "none";
        }
        // drawer.style.display = "none";
        carrot.animate({transform: "rotate(0deg)"}, interval).onfinish = function() {
            carrot.style.transform = "rotate(0deg)";
        }
        // carrot.style.transform = "rotate(0deg)";
        return;
    }
    // carrot.style.transform = "rotate(180deg)";
    carrot.animate({transform: "rotate(180deg)"}, interval).onfinish = function() {
        carrot.style.transform = "rotate(180deg)";
    }
    // carrot.style.transform = "rotate(180deg)";
    drawer.animate({opacity: [0, 1]}, interval)
    drawer.style.display = "";
}

function titleOnLoad(interval = 500){
    var image = document.getElementById("titleImage");
    var title = document.getElementById("titleCard");

    for (_element of [image, title]) {
        _element.style.display = "none";
    }
    
    image.style.transform = "translateX(1600px)";
    title.style.transform = "translateX(-1600px)";
    
    image.animate({transform: "translateX(0px)", opacity: [0, 1]}, interval).onfinish = function() {
        image.style.transform = "translateX(0px)";
    }
    title.animate({transform: "translateX(0px)", opacity: [0, 1]}, interval).onfinish = function() {
        title.style.transform = "translateX(0px)";
    }

    for (_element of [image, title]) {
        _element.style.display = "";
    }

}

