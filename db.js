const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function addMessage(text, user) {
  messages.push({
    id: crypto.randomUUID(),
    date: new Date(),
    text,
    user,
  });
}

function getMessage(id) {
  const matchingMessage = messages.find((message) => message.id == id);
  return matchingMessage;
}

function getAllMessages() {
  return messages;
}

export default { addMessage, getMessage, getAllMessages };
