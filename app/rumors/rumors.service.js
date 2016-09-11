class RumorService {

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;

    this.rumors = [
      {
        name: 'issueNoMore',
        headline: 'no more issues',
        description: 't is a long established fact that its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of le',
        img: 'https://pbs.twimg.com/media/BqyHXLkCQAEE2hf.jpg',
        upvotes: 2,
        downvotes: 10
      },
      {
        name: 'allGood',
        headline: 'space doge',
        description: 'a reader will be distracted by the readable content of a page when looking at  web page editors now use Lorem Ipsum as their default model text, and a search for  w',
        img: 'http://3.bp.blogspot.com/-QqheUg055tQ/Uf8wD31JGgI/AAAAAAAAMeI/ofX2pHN2SNA/s1600/4063_o_laika.jpg',
        upvotes: 5,
        downvotes: 3
      },
      {
        name: 'rainbowDoge',
        headline: 'dogs are rainbow',
        description: 'tters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages andill uncover many web sites still in their infancy. tters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages andill uncover many web sites still in their infancy. ',
        img: 'https://s-media-cache-ak0.pinimg.com/564x/41/22/b8/4122b85abfaaf6b2b607dda5fe4d4d23.jpg',
        upvotes: 1,
        downvotes: 0
      },
    ];
    this.listeners = [];
  }

  getRumors() {
    return this.$q.when(this.rumors);
  }

  registerRumor(rumor) {
    this.rumors.push({
      headline: rumor.title,
      description: rumor.description,
      img: rumor.link,
      upvotes: 0,
      downvotes: 0
    });
    this.listeners.forEach(listener => listener());
  }

  addListener(listener) {
    this.listeners.push(listener);
  }
}
RumorService.$inject = ['$http', '$q'];
export default RumorService;
