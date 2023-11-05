window.addEventListener("load", function () {
  typeWriter();
});

function openDropDown(dropDownId, interval = 200) {
  var dropDown = document.getElementById(dropDownId);

  dropDown.animate({ opacity: [0, 0.95] }, interval).onfinish = function () {
    dropDown.style.display = "block";
  };
}

function closeDropDown(dropDownId, interval = 200) {
  var dropDown = document.getElementById(dropDownId);

  dropDown.animate({ opacity: [0.95, 0] }, interval).onfinish = function () {
    dropDown.style.display = "none";
  };
}

function openDrawer(drawerId, interval = 200) {
  "Opens Drawer and edits carrot by Id";
  var drawer = document.getElementById("drawer-" + drawerId);
  var carrot = document.getElementById("carrot-" + drawerId);
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
        if (ifr.getAttribute("data-src")) {
          ifr.src = "";
        }
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

  for (ifr of iFrames) {
    if (ifr.getAttribute("data-src")) {
      ifr.src = ifr.getAttribute("data-src");
    }
  }
}

function hoverDrawer(
  drawerId,
  colArray = ["col-1-", "col-2-", "col-3-"],
  interval = 200
) {
  for (colId of colArray) {
    var column = document.getElementById(colId + drawerId);

    // if (drawerId != "1") {
    //   // column.style.borderTop = "1px solid rgba(242, 242, 242, 0.45)";
    //   // column.style.marginTop = "-1px";
    // }
    column.animate(
      { background: "rgba(255, 255, 255, 0.30)" },
      interval
    ).onfinish = function () {
      for (colId of colArray) {
        var columnTest = document.getElementById(colId + drawerId);
        columnTest.style.background = "rgba(255, 255, 255, 0.30)";
      }
    };
  }
}

function unhoverDrawer(
  drawerId,
  colArray = ["col-1-", "col-2-", "col-3-"],
  interval = 200
) {
  for (colId of colArray) {
    var column = document.getElementById(colId + drawerId);
    // if (drawerId != "1") {
    //   // column.style.borderTop = "none";
    //   column.style.marginTop = "0px";
    // }
    column.animate({ background: "none" }, interval).onfinish = function () {
      for (colId of colArray) {
        var columnTest = document.getElementById(colId + drawerId);
        columnTest.style.background = "none";
      }
    };
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

function typeWriter() {
  const stringArray = [
    "'m a runner.",
    " love walking around Boston.",
    "'m a biker.",
    // " listen to lots of music.",
    "'m a sailor.",
    " ride trains.",
    // " like SQL.",
    "'m a gamer.",
    `'m a "dunkie junkie."`,
    "'m a dog person.",
  ];

  new TypeIt("#typewriter", {
    strings: stringArray,
    speed: 150,
    deleteSpeed: 50,
    // speed: 150,
    loop: true,
    waitUntilVisible: true,
    breakLines: false,
    nextStringDelay: [2000, 500],
  }).go();
}
