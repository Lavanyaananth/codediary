onload = function(){
	console.log("vue it is ");

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
