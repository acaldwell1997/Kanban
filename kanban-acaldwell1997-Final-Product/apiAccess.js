/*const url = 'https://caldwell-alexis.glitch.me/api/lists?accessToken=5b1064585f4ab8706d275f90';

const option = {
    method: 'GET'
};







fetch(url, option)
    .then(response => {
        if(respnse.ok){
            return response.json()
} else {
            throw response
}
})
.then(data => {
    console.log(data)
})
    .catch(err => {
        console.log(err)
})





const para = document.createElement('p');
para.textContent = "This uses create element." + data.name + "is "

*/



var xhr = new XMLHttpRequest();
//on load, the api will be reached and the data will be parsed as json
xhr.onload = function () {
    //sets the returned data as JSON and stores it in the data variable
    var data = JSON.parse(xhr.responseText);

    var locationSection = document.querySelector('#flex');
    if (locationSection) {
        var locations = '';

        //loop through as many times as there is data

            for (var i = 0; i < data.length; i++) {
	
				var k = i+1;
				locations += '<section> <div class="taskHeader"> <h2>' + data[i].title + '</h2> <button value="'+k+'"> Add task </button></div>';
				for(var j = 0; j < data[i].items.length; j++){
                locations += '<article>';
                locations += '<h3>' + data[i].items[j].title + '</h3>';
                locations += '<p>' + data[i].items[j].description + '</p>';
                locations += '<p>' + data[i].items[j].dueDate + '</p>';
                locations += '</article>';
				}
				locations += '</section>';
				
            }
            locationSection.insertAdjacentHTML('beforeend', locations);
        }
			var addButtons = document.querySelectorAll('.taskHeader button');
    for (var i = 0; i < addButtons.length; i++){
            addButtons[i].addEventListener('click', addTask);
    }
	
		let bannerColor = localStorage.getItem("color");
		document.querySelector('header').style.backgroundColor = bannerColor;
}





function addTask(event) {

	var identity = event.target.value;
    var x = document.getElementById("addForm");
    var y = document.getElementById("flex");
    x.style.display = "block";
	y.style.display = "none";
    
    var locationSection = document.querySelector('form');

    if(locationSection){


        function validateForm() {

            var form = document.querySelector('form');
            var fields = form.querySelectorAll('.required');
			

            var valid = true;

            //loops through each of the form variables that has the class of required
            for (var i = 0; i < fields.length; i++){
                //if the input field does not contain a value, valid is set to false
                if(!fields[i].value){
                    valid = false;
                }
            }
            //if valid remains true, the disabled class is removed
            if(valid == true){
                var submit = form.querySelector('[type=submit]');
                submit.removeAttribute('class');
            }
        }


        function validateRequired(event) {
            //variables to store where the error took place
            var target = event.target;
            //message to display when an error takes place

            if(!target.value.length){
                //puts the error html before the end of the error class
                if(!target.querySelector('.error')){
                    target.className += " error";
                }
            }
            //if there is no error, removes the error class
            else{

                target.classList.remove("error");
            }
        }

//adds event listeners to the required fields
        var requiredFields = document.querySelectorAll('input.required');
        for (var i = 0; i < requiredFields.length; i++){
            requiredFields[i].addEventListener('input', validateForm);
            requiredFields[i].addEventListener('blur', validateRequired);
        }



        function send(event) {
            event.preventDefault();
            //makes sure its not disabled
            var target = event.target;
            var disabled = target.classList.contains('disabled');
            //if its not disabled, show the message
            if(disabled === false){

                var titleData = document.getElementById("titleText").value;
                var desc = document.getElementById("descript").value;
                var due = document.getElementById("due").value;
				
				if(!due){
					due = null;
				}
				
                const data ={
					listId: identity,
                    title: titleData,
                    description: desc,
                    dueDate: due		
					
                };

                const config = {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers:{
                        'content-type': 'application/json'
                    }
                };

                fetch('https://caldwell-alexis.glitch.me/api/items?accessToken=5b1064585f4ab8706d275f90', config);
				
				
				
				
				    var locationSection2 = document.querySelectorAll('section');
    if (locationSection2[identity-1]) {
        var locations2 = '';

                locations2 += '<article>';
                locations2 += '<h3>' + titleData + '</h3>';
                locations2 += '<p>' + desc + '</p>';
                locations2 += '<p>' + due + '</p>';
                locations2 += '</article>';
				
				locations2 += '</section>';
				
	}
            locationSection2[identity-1].insertAdjacentHTML('beforeend', locations2);
				
				
				
					var x = document.getElementById("addForm");
					var y = document.getElementById("flex");
					x.style.display = "none";
					y.style.display = "flex";   
					
            }
        }


        function clear(event) {
            var removeClass = document.getElementsByClassName("error");
            for (var y = 0; y < removeClass.length; y++) {
                removeClass[y].classList.remove("error");
            }

        }



//adds a click event listener to the submit button
        var submit = document.querySelector('button#addSubmit');
        var reset = document.querySelector('[type=reset]');
        submit.addEventListener('click', send);
        reset.addEventListener('click', clear);

    }


}







var banner = document.querySelector("header");
var oriColor = banner.style.backgroundColor;


function changeColor(event) {
			
    var x = document.getElementById("colorChanger");
    var y = document.getElementById("flex");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "flex";
		banner.style.backgroundColor = oriColor;
    } else {
        x.style.display = "block";
		y.style.display = "none";
    }
}

    function colorChanged(event) {
		oriColor = banner.style.backgroundColor;
        var target = event.target;
        var bgColor = target.style.backgroundColor;
		banner.style.backgroundColor = bgColor;
    }
	
function changeColorAccept(event) {
	event.preventDefault();
	localStorage.setItem("color", banner.style.backgroundColor);
    var x = document.getElementById("colorChanger");
    var y = document.getElementById("flex");
    x.style.display = "none";
    y.style.display = "flex"; 
}


	




function cancel(event) {
    var x = document.getElementById("colorChanger");
    var y = document.getElementById("flex");
	var z = document.getElementById("addForm");
    x.style.display = "none";
    y.style.display = "flex";
	z.style.display = "none";   
	banner.style.backgroundColor = oriColor;	
}



// EVENT LISTENERS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


	var cancelButton = document.querySelectorAll('.cancel');
    for (var i = 0; i < cancelButton.length; i++){
        cancelButton[i].addEventListener('click', cancel);
    }
	
	var colorButton = document.querySelector("header button");
	colorButton.addEventListener("click", changeColor);

	var colorButtonSubmit = document.querySelector("button#colorSubmit");
	colorButtonSubmit.addEventListener("click", changeColorAccept);


	
	var coloredButton = document.querySelectorAll('#colorChoice fieldset button');
    for (var i = 0; i < coloredButton.length; i++){
        coloredButton[i].addEventListener('click', colorChanged);
    }
	

//xhr will get the information from the url and will not send anything to that url
xhr.open('GET', 'https://caldwell-alexis.glitch.me/api/lists?accessToken=5b1064585f4ab8706d275f90', true);
xhr.send(null);
