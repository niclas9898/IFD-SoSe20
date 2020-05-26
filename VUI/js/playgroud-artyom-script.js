window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });


    var commandHello = {
        indexes:["hello","good morning","hey"], // These spoken words will trigger the execution of the command
        action:function(){ // Action to be executed when a index match with spoken word
            artyom.say("Hey buddy ! How are you today?");
           
        }

    };

    artyom.addCommands(commandHello)

    var myGroup = [
        {
            description:"If my database contains the name of a person say something",
            smart:true, // a Smart command allow you to use wildcard in order to retrieve words that the user should say
            // Ways to trigger the command with the voice
            indexes:["Weißt du wer * ist?"],
            // Do something when the commands is triggered
            action:function(i,wildcard){
                var database = ["Niclas, Sophia"];
    
                //If the command "is xxx a good person" is triggered do, else
                if(i == 2){
                    if(database.indexOf(wildcard.trim())){
                        artyom.say("I'm a machine, I dont know what is a feeling");
                    }else{
                        artyom.say("I don't know who is " + wildcard + " and i cannot say if is a good person");
                    }
                }else{
                    if(database.indexOf(wildcard.trim())){
                        artyom.say("Of course i know who is "+ wildcard + ". A really good person");
                    }else{
                        artyom.say("My database is not big enough, I don't know who is " + wildcard);
                    }
                }
            }
        },
        {
            indexes:["What time is it","Is too late"],
            action:function(i){ // var i returns the index of the recognized command in the previous array
                if(i == 0){
                    aFunctionThatSaysTheTime(new Date());
                }else if(i == 1){
                    artyom.say("Never is too late to do something my friend !");
                }
            }
        }
    ];
    
    artyom.addCommands(myGroup); 

   



    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map