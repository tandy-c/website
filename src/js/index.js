window.addEventListener("load", function () {
  // titleOnLoad();
});

function openDrawer(
  drawer_id,
  interval = 250,
  iframeSources = ["https://mbtamapper.com/commuter_rail/"]
) {
  "Opens Drawer and edits carrot by Id";
  var drawer = document.getElementById("drawer-" + drawer_id);
  var carrot = document.getElementById("carrot-" + drawer_id);
  var iFrames = drawer.getElementsByTagName("iframe");

  if (drawer.style.display == "") {
    drawer.animate({ opacity: [1, 0] }, interval).onfinish = function () {
      drawer.style.display = "none";
    };
    carrot.animate({ transform: "rotate(0deg)" }, interval / 2).onfinish =
      function () {
        carrot.style.transform = "rotate(0deg)";
      };

    for (ifr of iFrames) {
      ifr.animate({ opacity: [1, 0] }, interval).onfinish = function () {
        ifr.src = "";
      };
    }
    return;
  }
  carrot.animate({ transform: "rotate(180deg)" }, interval / 2).onfinish =
    function () {
      carrot.style.transform = "rotate(180deg)";
    };
  drawer.animate({ opacity: [0, 1] }, interval);
  drawer.style.display = "";

  for (i = 0; i < iFrames.length; i++) {
    iFrames[i].src = iframeSources[i];
  }
}

function titleOnLoad(interval = 500) {
  var image = document.getElementById("titleImage");
  var title = document.getElementById("titleCard");

  for (_element of [image, title]) {
    _element.style.display = "none";
  }

  image.style.transform = "translateX(1600px)";
  title.style.transform = "translateX(-1600px)";

  image.animate(
    { transform: "translateX(0px)", opacity: [0, 1] },
    interval
  ).onfinish = function () {
    image.style.transform = "translateX(0px)";
  };
  title.animate(
    { transform: "translateX(0px)", opacity: [0, 1] },
    interval
  ).onfinish = function () {
    title.style.transform = "translateX(0px)";
  };

  for (_element of [image, title]) {
    _element.style.display = "";
  }
}

function hoverImage(image_id, interval = 250) {
  var image = document.getElementById(image_id);
  // image.style.visibility = "hidden";
  image.animate({ transform: "scale(1.1)" }, interval).onfinish = function () {
    image.style.transform = "scale(1.1)";
  };
}

function unhoverImage(image_id, interval = 250) {
  var image = document.getElementById(image_id);
  // image.style.visibility = "hidden";
  image.animate({ transform: "scale(1)" }, interval).onfinish = function () {
    image.style.transform = "scale(1)";
  };
}
// function loadHiddenIframes(span_id) {
//   var span = document.getElementById(span_id);
//   var iframes = span.getElementsByTagName("iframe");
//   for (f of iframes) {
//     f.src = iframe.dataset.src;
//   }
// }

// $(".hidden_element").show(function () {
//   // Find the iframes within our newly-visible element
//   $(this)
//     .find("iframe")
//     .prop("src", function () {
//       // Set their src attribute to the value of data-src
//       return $(this).data("src");
//     });
// });
