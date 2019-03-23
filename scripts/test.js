    // document.getElementById("input_pi").onblur = function() {
     //   if  (isNaN(this.value)) {
       //     document.write("Введено не число!");
         //   input_pi.focus();
        //} else {
          //  document.write(PiCounter(this.value));
        //}
    //}

    function PiCounter() {
        n_points = document.getElementById("input_pi").value;
        
        if (n_points == "Нахуй" || n_points == "Пошел нахуй" || 
        n_points == "пошел нахуй" || n_points == "иди нахуй" || n_points ==
         "Иди нахуй") {
            window.alert("Сам иди нахуй, пидрила");
        }
            
            else if (isNaN(n_points)) { // ввел не число
                window.alert("Это по-твоему число, еблан?!");
                
            } 
            
            else {    // если ввел число, то
                hits = 0;
                for (i = 0; i < n_points; i++) {
                    x = Math.random();
                    y = Math.random();
                    if((x**2 + y**2) <= 1.0) {
                        hits = hits + 1;
                    }
                }
                result =  4.0 * hits / n_points;
                window.alert("На, Иисус посчитал за тебя число ПИ -  " + result); // выводится число ПИ
            }
        }

    function Square() {
        n_points = document.getElementById("input_square").value;
        hits = 0
        for(i = 0; i < n_points; i++) {
            x = 0 + Math.random() * 1;
            y = 2 + Math.random() * 1;
            if(((x*x + 2) <= y) && (y >= (x + 2))) {
                hits = hits + 1;
            }
        }
        result = Math.sqrt(4.0) * hits / n_points;
        window.alert("Площадь фигуры: " + result);
    }
