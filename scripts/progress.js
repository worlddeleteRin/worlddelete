

function move() {
    var elem = document.getElementById("myBar"); 
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
          width++; 
          elem.style.width = width + '%'; 
          elem.innerHTML = width * 1 + '%';
          if (width < 30) {
              elem.style.background = "red";
          }
          if (width > 30 && width < 70) {
              elem.style.background = "yellow";
          }
          if (width > 70) {
              elem.style.background = "green";
          }
        }
    }
  }

  function Progress() {
    bar = document.getElementById("myBar2");
        var width = bar.style.width;
        //window.alert(parseFloat(width));
        if (width >= 100) {
            width = 0;
        } else {
            width = width +  10;
            bar.style.width = width + '%';
            bar.innerHTML = width * 1 + '%';
        }
  }