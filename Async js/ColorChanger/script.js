const randomColor  = function (){
		const hexVal = "0123456789ABCDEF"
		let color ="#";
		for (let i = 0; i < 6; i++) {
				// console.log(Math.floor(Math.random()*16));
				color = color + hexVal[Math.floor(Math.random()*16)];
				

			/*  step1 : color = #
				step2 : Given specific length and values to generate random numbers
				step3 : Hex code size of any Color is 6
				step4 : So keep adding the random number from hexVal till 6==6 with #.
				step5 : At last return the final generated HexCode  */
	   }

	   return color;
	}

     

	/* randomColor : console.log(randomColor());
	----------------------------------------------*/
      

      /* step1 : first Select the button 
         step2 : Then  add event on start and stop reference
         step3 : After targeting the button give give definition here calling randonColor function
         step4 : after clicking the stop button it stops generating colors  */

	const body = document.querySelector('body');
	let intervalId;

	const start = function (){
		 body.style.backgroundColor = randomColor();   //preventing to create new interval

         
	}

	document.querySelector('#start').addEventListener('click', ()=>{
		if(!intervalId){  
          intervalId = setInterval(start, 200);  
		}
	})



    // Issue is defined below for runinng multiple interval***
	// Method 1   : Inside the event function and passing directly 

	   document.querySelector('#stop').addEventListener('click', ()=>{
       clearInterval(intervalId);
       intervalId =  null;   //  we need to give null because its important and overriding the adding interval each time
	})



    /*Method 2   : Taking another function and calling inside the addEvent function
	    const stopChanging = function () {
		clearInterval(intervalId);
        intervalId =  null;
	}
    document.querySelector('#stop').addEventListener('click', stopChanging);*/
	




    /* Potential Issue : 
    --------------------

    In the above code we have seen how we can set intervals and clear intervals but somewhere we face some kind of problem that is - Running Multiple Intervals simultaneously

        Meaning
        --------
        Clicking the "Start" button multiple times without stopping the previous interval will result in multiple intervals running simultaneously. This will cause the background color to change  more frequently and unpredictably.


    Solution : Adding an if Condition 
    ---------------------------------
        To prevent creating multiple intervals, you can add an if condition to check if intervalId is already set. This way, a new interval will only be created if there isn't an existing one running.

           1.  Previous interval has to be null or undefined then only new interval will apply
           2.  Therefore we have to check the if condition that if (!intervalId) then run the strat
           3.  If intervalId has a value (an interval is already running), this condition prevents creating another interval.

        conclusion : By adding this condition, the code ensures that only one interval runs at any time, preventing multiple intervals from being created and causing issues. */
