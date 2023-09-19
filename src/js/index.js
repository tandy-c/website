window.addEventListener("load", function () {
  typeWriter();
});

function openDrawer(drawer_id, interval = 250, iframeSources = "") {
  "Opens Drawer and edits carrot by Id";
  var drawer = document.getElementById("drawer-" + drawer_id);
  var carrot = document.getElementById("carrot-" + drawer_id);
  var iFrames = drawer.getElementsByTagName("iframe");
  var iframeSources = iframeSources.split(",");

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

function hoverDrawer(
  rowId,
  colArray = ["col-1-", "col-2-", "col-3-"],
  interval = 250
) {
  for (colId of colArray) {
    var column = document.getElementById(colId + rowId);

    // if (rowId != "1") {
    //   // column.style.borderTop = "1px solid rgba(242, 242, 242, 0.45)";
    //   // column.style.marginTop = "-1px";
    // }
    column.animate(
      { background: "rgba(255, 255, 255, 0.25)" },
      interval
    ).onfinish = function () {
      for (colId of colArray) {
        var columnTest = document.getElementById(colId + rowId);
        columnTest.style.background = "rgba(255, 255, 255, 0.25)";
      }
    };
  }
}

function unhoverDrawer(
  rowId,
  colArray = ["col-1-", "col-2-", "col-3-"],
  interval = 250
) {
  for (colId of colArray) {
    var column = document.getElementById(colId + rowId);
    // if (rowId != "1") {
    //   // column.style.borderTop = "none";
    //   column.style.marginTop = "0px";
    // }
    column.animate({ background: "none" }, interval).onfinish = function () {
      for (colId of colArray) {
        var columnTest = document.getElementById(colId + rowId);
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
    // " ride trains.",
    " love walking around Boston.",

    "'m a biker.",
    // " listen to lots of music.",
    "'m a sailor.",
    " like SQL.",
    "'m a gamer.",
    "...",
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
    nextStringDelay: [2500, 500],
  }).go();
}
