//Chooses a random component
const selectComponent = componentArray => componentArray[Math.floor(Math.random() * componentArray.length)];

//Selects a random component for each chunk and returns the concatenated string as a message
const generateMessage = componentArrays => {
    let message = '';
    for (const array of componentArrays) {
        message += selectComponent(array)
    }
    return message;
};

//Initialize a 2D array to store all components for each chunk
const messageComponents = [['Oh my, ', "It's terrible,", "I can't believe it, ", "Stop, "], ['the oven ', 'your mother ', 'the train ', 'the goverment '], 
['is on fire.', 'is here.', 'has crashed.', 'is attacking.']];

//Log the final message to the console
console.log(generateMessage(messageComponents));