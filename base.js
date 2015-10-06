
var calc = new Vue({
  el: '#calc',
  template: '<li v-repeat="q">{{question}} = <input type="text" v-model="input" lazy number><input type="submit" v-on="click: onClick"></li>',
  replace: true,
  data: {
    q: [{ question: '1 + 2', answer: '3' }]
  },
  methods: {
    onClick: function () {
      console.log(this.q[0].input + '===' +  this.q[0].answer);
      if ( this.q[0].input == this.q[0].answer ) {
        var qlist = [];
        var ans = 0;
        for (var i = 0; i < getRandomInt(2, 5); i++) {
          qlist[i] = getRandomInt(1, 10);
          ans += qlist[i];
        }
        this.q.unshift({ question: qlist.join(" + "), answer: ans });
      }
    }
  }
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
