import './root.css';
import RumorCreatorController from './rumors/rumor-creator.controller';
const template = require('./root.html');
const dialogTemplate = require('./rumors/rumor-creator.html');

class RootController {
  constructor($mdSidenav, $mdDialog) {
    this.$mdSidenav = $mdSidenav;
    this.$mdDialog = $mdDialog;
  }

  onMessageClick() {
    this.$mdSidenav('message-sidenav').open();
  }

  openCreateDialog(evt) {
    this.$mdDialog.show({
      template: dialogTemplate,
      controller: RumorCreatorController,
      controllerAs: '$ctrl',
      targetEvent: evt
    })
  }
}
RootController.$inject = ['$mdSidenav', '$mdDialog'];

const rootComponent = {
  controller: RootController,
  template
};
export default rootComponent;

