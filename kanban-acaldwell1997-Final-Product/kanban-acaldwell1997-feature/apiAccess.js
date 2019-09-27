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
    //if there is an h1 tag, then it will proceed to the loop
    if (locationSection) {
        //just in case, it will clear the variable of anything setting it to empty string
        var locations = '';
        var locations2 = '';
        var locations3 = '';

        //loop through as many times as there is data

            for (var i = 0; i < data[0].items.length; i++) {


                locations += '<article>';
                locations += '<h3>' + data[0].items[i].title + '</h3>';
                locations += '<p>' + data[0].items[i].description + '</p>';
                locations += '<p>' + data[0].items[i].dueDate + '</p>';
                //close the article tag
                locations += '</article>';


            }


        for (i = 0; i < data[1].items.length; i++) {


            locations2 += '<article>';
            locations2 += '<h3>' + data[1].items[i].title + '</h3>';
            locations2+= '<p>' + data[1].items[i].description + '</p>';
            locations2 += '<p>' + data[1].items[i].dueDate + '</p>';
            //close the article tag
            locations2 += '</article>';


        }


        for (i = 0; i < data[2].items.length; i++) {


            locations3 += '<article>';
            locations3 += '<h3>' + data[2].items[i].title + '</h3>';
            locations3 += '<p>' + data[2].items[i].description + '</p>';
            locations3 += '<p>' + data[2].items[i].dueDate + '</p>';
            //close the article tag
            locations3 += '</article>';


        }
            //the data will be inserted after the end of the h1 tag
            locationSection.querySelector('#sectionOne').insertAdjacentHTML('beforeend', locations);
            locationSection.querySelector('#sectionTwo').insertAdjacentHTML('beforeend', locations2);
            locationSection.querySelector('#sectionThree').insertAdjacentHTML('beforeend', locations3);
        }

}

function addTask(event) {

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

                const data ={
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

                fetch('https://caldwell-alexis.glitch.me/api/lists?accessToken=5b1064585f4ab8706d275f90', config);

					var y = document.getElementById("flex");
					var z = document.getElementById("addForm");
					y.style.display = "flex";
					z.style.display = "none";   
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

	var addButtons = document.querySelectorAll('section button');
    for (var i = 0; i < addButtons.length; i++){
            addButtons[i].addEventListener('click', addTask);
    }
	
	var coloredButton = document.querySelectorAll('#colorChoice fieldset button');
    for (var i = 0; i < coloredButton.length; i++){
        coloredButton[i].addEventListener('click', colorChanged);
    }
	

//xhr will get the information from the url and will not send anything to that url
xhr.open('GET', 'https://caldwell-alexis.glitch.me/api/lists?accessToken=5b1064585f4ab8706d275f90', true);
xhr.send(null);
