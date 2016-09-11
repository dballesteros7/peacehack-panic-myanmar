class MessageService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getMessages() {
    return $q.when([
      {
        img: 'https://pbs.twimg.com/media/BqyHXLkCQAEE2hf.jpg',
        text: 'reader will be distracted by the readable content of a page when looking at  web page editors now use Lorem Ipsum as their default model text, and a search',
        notify: 'me',
        blocked: false,
      },
      {
        img: 'https://pbs.twimg.com/media/BqyHXLkCQAEE2hf.jpg',
        text: 'reader will be distracted by the readable content of a page when looking at  web page editors now use Lorem Ipsum as their default model text, and a search',
        notify: 'allerts',
        blocked: false,
      }
    ]);
  }
}
MessageService.$inject = ['$http', '$q'];

export default MessageService;
