onload = function(){
	console.log("vue it is ");
	console.log("dummy commit");

var app = new Vue({
  el: '#app',
  data: {
  	message: 'go to hell',
    condition: true,
    conditionnot: false
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

}
