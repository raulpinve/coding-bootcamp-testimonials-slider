
var usersCard = [{
        "id": 1, 
        "username": 'Tanya Sinclair',
        'profesion': 'Ux Enginer', 
        'img': 'image-tanya.jpg',
        'quote': "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future",
    }, {
        "id": 2,
        'username': 'John Tarkpor',
        'profesion': 'Junior Front-end Developer',  
        'img': 'image-john.jpg',
        'quote': "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",  
    }
];

//Capturar el evento del boton
var buttonPressed = document.getElementsByClassName("button-card");
var id = 1;

for(i=0; i < buttonPressed.length; i++){

    buttonPressed[i].addEventListener("click", function(event){
        
        if(event.target.id == "button-left"){
            
            if(id <= 1){
                id = usersCard.length;
            }else{
                id--;
            }

        }else{ 

            if(id >= usersCard.length){
                id = 1;
            }else{
                id++;
            }

        }

        showCardElement(id);

    })

}

function showCardElement(id){
    
    var indexArray = getIndexObject(id);
    
    var cardHeaderProfile = document.getElementById("card-header-profile");
    var cardBodyInfo = document.getElementById("card-body-info");
    var cardBodyUserName = document.getElementById("card-body-user-name");
    var cardBodyUserWork = document.getElementById("card-body-user-work");
    
    cardHeaderProfile.setAttribute("src", "images/" + usersCard[indexArray].img);
    cardBodyInfo.innerHTML = usersCard[indexArray].quote;
    cardBodyUserName.innerHTML = usersCard[indexArray].username;
    cardBodyUserWork.innerHTML = usersCard[indexArray].profesion;
}

function getIndexObject(id){

    for(var indice in usersCard){

        var idArray = usersCard[indice].id;

        if(id == idArray){
            var index = indice;
        }

    }
    return index;
}

