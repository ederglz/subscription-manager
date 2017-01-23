function fetchArray(key) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return [];
}
function saveArray(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
/*eslint-disable */
new Vue({
/*eslint-enable */
  el: '#manager',
  data: {
    sub: {name: '', price: '', date: '', img: ''},
    subs: fetchArray('my-subscriptions') || [],
    error: false
  },
  ready: function() {
    this.fetchSubs();
    this.$watch('my-subscriptions', function(value) {
      saveArray('my-subscriptions', value);
    });
  },
  methods: {
    fetchSubs: function() {
      var subs = [];
      this.$set('subs', subs);
    },
    addSub: function() {
      if (this.sub.name && this.sub.price && this.sub.date) {
        this.error = false;
        this.subs.push(this.sub);
        this.sub = {name: '', price: '', date: '', img: ''};
      } else {
        this.error = true;
      }
    },
    deleteEvent: function(index) {
      if (confirm('Are you sure you want to delete this Subscription?')) {
        this.subs.splice(index, 1);
      }
    }
  }
});