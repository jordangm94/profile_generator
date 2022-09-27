const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name, activity, music, favouriteMeal, favouriteFood, favouriteSport, superPower

rl.question('What is your name?', (answer) => {
  name = answer

  rl.question('What is your favourite activity?', (answer) => {
    activity = answer

    rl.question('What do you listen to during that activity?', (answer) => {
      music = answer

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer) => {
        favouriteMeal = answer

        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          favouriteFood = answer

          rl.question("Which sport is your absolute favourite?", (answer) => {
            favouriteSport = answer

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              superPower = answer
    
              console.log(`${name} loves listening to ${music} while partaking in ${activity}, \ndevouring ${favouriteFood} for ${favouriteMeal}, \nprefers ${favouriteSport} over any other sport, \nand is amazing at ${superPower}.`)
    
              rl.close();
        
    
            });
  
            
      
  
          });

          


    

        });
  

      });

      
    });
  });

});