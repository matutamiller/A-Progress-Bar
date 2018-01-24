//Progress bar is filling for a user-set interval of time

function userProgress(time){
	var start = 0;
	var time = Math.round(time*1000/100);                             // interval converted to seconds
	var progressElement = document.getElementById("user-progress");   // element progress bar
	var progressNum = document.getElementById('progress-num');
	var intervalId = setInterval(function(){                          //assign setInterval
		if (start > 100){
            clearInterval(intervalId);
            userProgressCallBack();                                   // a callback
		}
		else {
		  progressElement.value = start;
		  progressNum.innerHTML = start + "%";
	    }
		start++;
	}, time);
}

function userProgressCallBack() {
	
	document.querySelector('.hidden-block').style.display = "block";   // a callback code
}

userProgress(5);                                                       // progress set in seconds