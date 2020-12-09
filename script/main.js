let o1 = "Rock";
let o2 = "Paper";
let o3 = "Scissors";


let resultado = function( user , pc ){
    if( user != pc){

        if(user == o1 && pc == o3){

            console.log("The user won with " + o1);
        }
        if(user == o2 && pc == o1){

            console.log("The user won with " + o2);
        }
        if(user == o3 && pc == o2){

            console.log("The user won with " + o3);
        }
        else{
            console.log(`The pc winner`);
        }

    }
     else if (user == pc ){
        console.log(`Tie`);
    }

   

};
resultado(o1, o3);
