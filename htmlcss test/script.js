const messages = [
    "It's just a button",
    "Are you doubting me?",
    "Just think about it!",
    "If you say so",
    "Ok fine, I will stop asking",
    "a button"
];

const messages1 = [
    "There's nothing to learn about",
    "Learn More"
];

const messages2 = [
    "I told you it's just a button",
    "Are you really clicking it again?",
    "Another button"
]

let messageIndex = 0;
let messageIndex1 = 0;
let messageIndex2 = 0;

function handleClick(button) {
    button.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

function handleClick1(button) {
    button.textContent = messages1[messageIndex1];
    messageIndex1 = (messageIndex1 + 1) % messages1.length;
}

function handleClick2(button) {
    button.textContent = messages2[messageIndex2];
    messageIndex2 = (messageIndex2 + 1) % messages2.length;
}