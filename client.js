console.log('Here are all the available people:', people);


$(document).ready(onReady);

function onReady() {
    console.log('Hello from Jquery');
    
    //append divs for all in people
    appendPeople();
    pickRandomPerson();
}

   
function appendPeople() {
        people.forEach(function(person){    // for each loop
            console.log('person',person.name);
            $('#gitHubPeople').append(`<li> 
                    <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
                     </li>`
                     );
        })
        
    }

function pickRandomPerson(){
   let randomNum = randomNumber(0,people.length - 1);
   console.log('random number',randomNum);
   $('#person').append(people[randomNum].name);
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
    
}
