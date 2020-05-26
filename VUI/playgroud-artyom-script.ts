declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands({
        indexes: ["Hallo *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Name: " + wildcard);
        }
    });

    var commandHello = {
        indexes:["hello","good morning","hey"], // These spoken words will trigger the execution of the command
        action:function(){ // Action to be executed when a index match with spoken word
            artyom.say("Hey buddy ! How are you today?");
        }
    };
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    
});