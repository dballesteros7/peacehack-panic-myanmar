class MessageService {
  constructor($http, $q) {
    this.$http = $http;
  }

  getMessages() {
    return this.$http({
      method: 'GET',
      url: 'https://fde42075.ngrok.io/api/messages'
    }).then(httpData => httpData.data);
  }
}
MessageService.$inject = ['$http', '$q'];

export default MessageService;
