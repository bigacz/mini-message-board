class Message {
  constructor(text, user) {
    this.id = crypto.randomUUID();
    this.added = new Date();
    this.user = user;
    this.text = text;
  }

  getTimeAgo() {
    const currentDate = new Date();

    const miliseconds = this.added.getTime() - currentDate.getTime();
    const days = miliseconds / 1000 / 60 / 60 / 24;

    if (days < 1) {
      return "Today";
    } else if (days < 30) {
      return `${days} ago`;
    } else {
      return "Long time ago";
    }
  }
}

const messages = [
  new Message("Hi there!", "Amando"),
  new Message("Hello World!", "Charles"),
];

function addMessage(text, user) {
  messages.push(new Message(text, user));
}

function getMessage(id) {
  const matchingMessage = messages.find((message) => message.id == id);
  return matchingMessage;
}

function getAllMessages() {
  return messages;
}

export default { addMessage, getMessage, getAllMessages };
