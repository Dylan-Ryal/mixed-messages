const selectComponent = components => components[Math.floor(Math.random() * components.length)];

const messageComponents = [['Oh my,', 'The horror,', "I can't believe it,"], ['the oven', 'your mother', 'the train'], ['is on fire.', 'is here.', 'has crashed.']];

console.log(selectComponent(messageComponents[0]));