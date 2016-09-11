const template = require('./messages.html');


class MessageController {
  constructor(messageService) {
    this.messageService = messageService;
    this.messages = [];
    this.loadingMessages = true;
    this.messageService.getMessages().then((messages) => {
      this.messages = messages;
      this.loadingMessages = false;
    })
  }


}

MessageController.$inject = ['messageService'];

const messagesComponent = {
  controller: MessageController,
  template
};
export default messagesComponent;
