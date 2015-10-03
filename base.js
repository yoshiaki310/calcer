
var calc = new Vue({
  el: '#calc',
  data: {
    q: [{ question: '1 + 2', answer: '3', done: false }]
  },
  methods: {
    onClick: function () {
      if (this.q[0].done === false) {
        this.q[0].done = true;
      } else {
        var qlist = [];
        var ans = 0;
        for (var i = 0; i < getRandomInt(2, 5); i++) {
          qlist[i] = getRandomInt(1, 10);
          ans += qlist[i];
        }
        this.q.unshift({ question: qlist.join(" + "), answer: ans, done: false });
      }
    }
  }
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
