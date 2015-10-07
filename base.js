
var calc = new Vue({
  el: '#calc',
  template: '<li v-repeat="q">{{question}} = <input type="text" v-model="input" lazy number><input type="submit" v-on="click: onClick"> {{judgement}}</li>',
  replace: true,
  data: {
    q: [{ question: '1 + 2', answer: '3' , judgement: '' }]
  },
  methods: {
    onClick: function () {
      if ( this.q[0].input == this.q[0].answer ) {
        this.q[0].judgement = "せいかい！";
        var qlist = [];
        var ans = 0;
        for (var i = 0; i < getRandomInt(2, 5); i++) {
          qlist[i] = getRandomInt(1, 10);
          ans += qlist[i];
        }
        this.q.unshift({ question: qlist.join(" + "), answer: ans , judgement: '' });
      }else{
        this.q[0].judgement = "ちがうよ";
      }
    }
  }
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
