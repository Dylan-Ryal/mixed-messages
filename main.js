const selectComponent = componentArray => componentArray[Math.floor(Math.random() * componentArray.length)];

const generateMessage = componentArrays => {
    let message = '';
    for (const array of componentArrays) {
        message += selectComponent(array)
    }
    return message;
};

const messageComponents = [['Oh my, ', "It's terrible,", "I can't believe it, ", "Stop, "], ['the oven ', 'your mother ', 'the train ', 'the goverment '], 
['is on fire.', 'is here.', 'has crashed.', 'is attacking.']];

console.log(generateMessage(messageComponents));