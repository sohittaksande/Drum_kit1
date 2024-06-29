



/*for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",ControlBtn);
    
    function ControlBtn(){
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
        
    }
    }*/

    //making all sounds to perticular button


    var no_of_btn=document.querySelectorAll(".drum").length;
    for(var i=0;i<no_of_btn;i++){
        
        document.querySelectorAll(".drum")[i].addEventListener("click",  ControlBtn);

        function ControlBtn(){
           
            var buttonInnerHTML=this.innerHTML;
             key_sound(buttonInnerHTML);
             buttonAnimation(buttonInnerHTML);
        }
         
    }

    document.addEventListener("keypress",function(event){

       key_sound(event.key)

       buttonAnimation(event.key);
    })

    function key_sound(key){

        switch(key){

            case "w": 
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

            case "a":
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break;

            case "s":
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                break;

            case "d":
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                break;

            case "j":
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                break;

            case "k":
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                break;

            case "l":
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                break;

            default:console.log(buttonSound);
         }
    }

 function buttonAnimation(current_key){

    var Active_btn=document.querySelector("."+current_key);

   Active_btn.classList.add("pressed");

   setTimeout(function(){
    Active_btn.classList.remove("pressed");

   });

 }