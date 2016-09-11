class MessageService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getMessages() {
    return $q.when([

    ]);
  }
}
MessageService.$inject = ['$http', '$q'];
