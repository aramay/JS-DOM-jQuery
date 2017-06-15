var loadMessages = (function () {

   function test () {
      console.log("load messages")
   }

   return {
      load: test
   }
})()

// var x = loadMessages()
// console.log(loadMessages)
$(document).ready(loadMessages.load)