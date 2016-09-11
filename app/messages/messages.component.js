const template = require('./messages.html');


class MessageController {
  constructor(messageService) {
    this.messageService = messageService;
    this.messages = [];
    this.loadingMessages = false;
    this.messageService.getMessages().then((messages) => {
      console.log(messages);
      this.messages = messages;
    })
  }


}

MessageController.$inject = ['messageService'];

const messagesComponent = {
  controller: MessageController,
  template
};
export default messagesComponent;
