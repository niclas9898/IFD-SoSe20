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
        indexes:["Guten Morgen", "hallo"], // These spoken words will trigger the execution of the command
        action:function(){ // Action to be executed when a index match with spoken word
            artyom.say("Willkommen Ihr Kaffee steht bereit. Reden wir über die gestrigen Zahlen?");
           
        }

    };

    artyom.addCommands(commandHello)

    var Verschleiß = {
        indexes:["wie hoch sind die Kosten für den Verschleiß"], 
        action:function(){ 
            artyom.say("Die Kosten für den Verschleiß liegen bei 4340€");
           
        }

    

    };

    artyom.addCommands(Verschleiß)

    var Produktionszahlen = {
        indexes:["Wie stehen die Produktionszahlen", "Wie viel Stück wurde bisher produziert","Wie hoch sind die Produktionszahlen"], 
        action:function(){ 
            artyom.say("Es wurden bisher 234090 Stück produziert");
           
        }

    

    };

    artyom.addCommands(Produktionszahlen)


    var krank = {
        indexes:["Wie viele Mitarbeiter sind krank", "wie viele Mitarbeiter sind heute krank"], 
        action:function(){ 
            artyom.say("Momentan sind insgesamt 75 Mitarbeiter krank");
           
        }

    

    };

    artyom.addCommands(krank)

    var Ausschuss = {
        indexes:["Wie hoch ist der Ausschuss"], 
        action:function(){ 
            artyom.say("Der Ausschuss liegt bei 700 Stück");
           
        }

    

    };

    artyom.addCommands(Ausschuss)







    var Stück1 = {
        indexes:["Wie hoch sind die Produktionszahlen für Werk 1", "Wie viel wurde in Werk 1 produziert"], 
        action:function(){ 
            artyom.say("In Werk 1 wurden bereits 2543 Stück produziert");
           
        }

    

    };

    artyom.addCommands(Stück1)
    var Stück2 = {
        indexes:["Wie hoch sind die Produktionszahlen für Werk 2", "Wie viel wurde in Werk 2 produziert"], 
        action:function(){ 
            artyom.say("In Werk 2 wurden bereits 5967 Stück produziert");
           
        }

    

    };

    artyom.addCommands(Stück2)
    var Stück3 = {
        indexes:["Wie hoch sind die Produktionszahlen für Werk 3", "Wie viel wurde in Werk 3 produziert"], 
        action:function(){ 
            artyom.say("In Werk 3 wurden bereits 3958 Stück produziert");
           
        }

    

    };

    artyom.addCommands(Stück3)
    var Stück4 = {
        indexes:["Wie hoch sind die Produktionszahlen für Werk 4", "Wie viel wurde in Werk 4 produziert"], 
        action:function(){ 
            artyom.say("In Werk 4 wurden bereits 5734 Stück produziert");
           
        }

    

    };

    artyom.addCommands(Stück4)
                    
        
           

           
    var krank1 = {
        indexes:["Wie viele Mitarbeiter sind in Werk eins krank","wie viele Krankmeldungen gibt es im Werk 1" ,"wie viele Mitarbeiter sind in werk1 krank"], 
        action:function(){ 
            artyom.say("In Werk 1 sind heute 3 Mitarbeiter und Mitarbeiterinnen krank");
           
        }

    

    };

    artyom.addCommands(krank1)
    var krank2 = {
        indexes:["Wie viele Mitarbeiter sind in Werk 2 krank","Wie viele Krankmeldungen gibt es in Werk 2"], 
        action:function(){ 
            artyom.say("In Werk 2 sind heute 2  Mitarbeiter und Mitarbeiterinnen  krank");
           
        }

    

    };

    artyom.addCommands(krank2)
    var krank3 = {
        indexes:["Wie viele Mitarbeiter sind in Werk 3 krank","Wie viele Krankmeldungen gibt es in Werk 3", "wie viele Krankmeldungen gibt es in werk3"], 
        action:function(){ 
            artyom.say("In Werk 3 sind heute 0  Mitarbeiter und Mitarbeiterinnen  krank");
           
        }

    

    };

    artyom.addCommands(krank3)
    var krank4 = {
        indexes:["Wie viele Mitarbeiter sind in Werk 4 krank","wie viele Krankmeldungen gibt es im Werk 4"], 
        action:function(){ 
            artyom.say("In Werk 4 sind heute 70  Mitarbeiter und Mitarbeiterinnen krank. Möchten Sie mehr Infos zu den Krankmeldungen?");
           
        }

    

    };

    artyom.addCommands(krank4)
    var krank41 = {
        indexes:["mehr infos zu den Krankmeldungen"], 
        action:function(){ 
            artyom.say("Der plötzliche Anstieg an Krankmeldungen in Werk 4 ist sehr verdächtig. Bitte verordnen Sie dringend alle Mitarbeiter und Mitarbeiterinnen an COVID-19 Tests durchzuführen");
           
        }

    

    };

    artyom.addCommands(krank41)
   
  

   

           
    var ausschuss1 = {
        indexes:["wie hoch liegt der Ausschuss im Werk 1","wie hoch liegt der Ausschuss in werkeins" ], 
        action:function(){ 
            artyom.say("Der Ausschuss in Werk 1 liegt bei 400 stück");
           
        }

    

    };

    artyom.addCommands(ausschuss1)
    var ausschuss2 = {
        indexes:["Wie hoch liegt der Ausschuss in Werk 2","wie hoch liegt der Ausschuss in werk2"], 
        action:function(){ 
            artyom.say("Der Ausschuss in Werk 2 liegt bei 30 stück");
           
        }

    

    };

    artyom.addCommands(ausschuss2)
    var ausschuss3 = {
        indexes:["Wie hoch liegt der Ausschuss in Werk 3","wie hoch liegt der Ausschuss in werk3"], 
        action:function(){ 
            artyom.say("Der Ausschuss in Werk 3 liegt bei 34 stück");
           
        }

    

    };

    artyom.addCommands(ausschuss3)
    var ausschuss4 = {
        indexes:["wie hoch liegt der Ausschuss im Werk 4","wie hoch liegt der Ausschuss in werk4"], 
        action:function(){ 
            artyom.say("Der Ausschuss in Werk 4 liegt bei 40 stück");
           
        }

    

    };

    artyom.addCommands(ausschuss4)


















    var Verschleiß1 = {
        indexes:["Wie hoch sind die Kosten für den Verschleiß in Werk 1", "Verschleiß Werk 1" ], 
        action:function(){ 
            artyom.say("Die Kosten für den Verschleiß in Werk 1 liegen bei 1700€. Wollen Sie mehr Infos dazu?");
           
        }

    

    };

    artyom.addCommands(Verschleiß1)

    var Verschleiß11 = {
        indexes:["Bitte mehr Infos zum Verschleiß in Werk eins" ], 
        action:function(){ 
            artyom.say("Maschine 4 an Band 12 ist seit gestern defekt. Es wird sich bereits darum gekümmert. Die Produktion wurde eingestellt");
           
        }

    

    };

    artyom.addCommands(Verschleiß11)


    var Verschleiß2 = {
        indexes:["Wie hoch sind die Kosten für den Verschleiß in Werk 2", "Verschleiß Werk 2"], 
        action:function(){ 
            artyom.say("Die Kosten für den Verschleiß in Werk 2 liegen bei 500€");
           
        }

    

    };

    artyom.addCommands(Verschleiß2)
    var Verschleiß3 = {
        indexes:["Wie hoch sind die Kosten für den Verschleiß in Werk 3", "Verschleiß Werk 3"], 
        action:function(){ 
            artyom.say("Die Kosten für den Verschleiß in Werk 3 liegen bei 500€");
           
        }

    

    };

    artyom.addCommands(Verschleiß3)
    var Verschleiß4 = {
        indexes:["Wie hoch sind die Kosten für den Verschleiß in Werk 4", "Verschleiß Werk 4"], 
        action:function(){ 
            artyom.say("Die Kosten für den Verschleiß in Werk 4 liegen bei 500€");
           
        }

    

    };

    artyom.addCommands(Verschleiß4)






    var meldung1 = {
        indexes:["Was sind die wichtigsten Meldungen des Tages"], 
        action:function(){ 
            artyom.say("Der Ausschuss in Werk 1 ist durch einen Fehler in der Maschine gestern deutlich gestiegen, wodurch auch die Kosten für den Verschleiß in Werk 1 über dem Durchschnitt liegen. Die Produktion wurde eingestellt. Fahren wir fort?");
           
        }

    

    };

    artyom.addCommands(meldung1)

    var meldung2 = {
        indexes:[" weiter"], 
        action:function(){ 
            artyom.say("Der plötzliche Anstieg an Krankmeldungen in Werk 4 ist sehr verdächtig. Bitte verordnen Sie dringend alle Mitarbeiter an COVID-19 Tests durchzuführen. Das waren die wichtigsten Meldungen des Tages");
           
        }

    

    };

    artyom.addCommands(meldung2)





    




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