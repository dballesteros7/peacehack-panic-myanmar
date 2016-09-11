const template = require('./root.html');

class RootController {
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
  }

  onMessageClick() {
    this.$mdSidenav('message-sidenav').open();
  }
}
RootController.$inject = ['$mdSidenav'];


const rootComponent = {
  controller: RootController,
  template
};
export default rootComponent;

