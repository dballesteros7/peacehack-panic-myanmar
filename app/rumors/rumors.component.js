const template = require('./rumors.html');
import './rumors.css';

class RumorController {
  constructor(rumorService, $mdSidenav) {
    this.rumorService = rumorService;
    this.$mdSidenav = $mdSidenav;

    this.loadingRumors = true;
    this.rumors = null;
    this.rumorService.getRumors().then(rumors => {
      this.rumors = [...rumors];
      this.sortRumors();
      this.loadingRumors = false;
    });
  }

  sortRumors() {
    this.rumors = this.rumors.sort((rumorA, rumorB) =>
        (rumorB.upvotes - rumorB.downvotes) -
        (rumorA.upvotes - rumorA.downvotes)
    );
  }

  showChat() {
    this.$mdSidenav('message-sidenav').toggle();
  }

  upvote(rumor) {
    switch (rumor.localState) {
      case 'upvoted':
        return;
      case 'downvoted':
        rumor.downvotes--;
        rumor.upvotes++;
        rumor.localState = 'upvoted';
        break;
      default:
        rumor.upvotes++;
        rumor.localState = 'upvoted';
        break;
    }
    this.sortRumors();
  }

  downvote(rumor) {
    switch (rumor.localState) {
      case 'downvoted':
        return;
      case 'upvoted':
        rumor.upvotes--;
        rumor.downvotes++;
        rumor.localState = 'downvoted';
        break;
      default:
        rumor.downvotes++;
        rumor.localState = 'downvoted';
        break;
    }
    this.sortRumors();
  }
}
RumorController.$inject = ['rumorService', '$mdSidenav'];


const rumorsComponent = {
  controller: RumorController,
  template
};
export default rumorsComponent;
