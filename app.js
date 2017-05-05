/*eslint-disable */
new Vue({
/*eslint-enable */
  el: '#manager',
  data: {
    sub: {name: '', price: '', date: '', img: ''},
    subs: [],
    error: false
  },
  mounted: function() {
    this.subs = this.emptyObejct(this.fetchArray('subs')) ? [] : this.fetchArray('subs');
  },
  watch: {
    subs: function() {
      this.saveArray('subs', this.subs || []);
    }
  },
  methods: {
    fetchArray: function(key) {
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
      }
    },
    emptyObejct: function(obj) {
      return Object.keys(obj).length === 0 && obj.constructor === Object;
    },
    saveArray: function(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
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