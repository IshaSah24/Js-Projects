const buttons = document.querySelectorAll(".button");
        const body = document.querySelector("body");

          buttons.forEach(function(button) {
          button.addEventListener("click", function(e) {
          // e.target refers to the element that triggered the event
            if (e.target.id === "grey") {
             body.style.backgroundColor=e.target.id;
            }
            else if (e.target.id=== "blue"){
            	body.style.backgroundColor = "lightblue";
            } 
             else if (e.target.id=== "white"){
            	body.style.backgroundColor = "white";
            } 
            else if (e.target.id=== "yellow"){
            	body.style.backgroundColor = "yellow";
            }
        });

      });


    	