/* Stub JS file for your tinychat app! */

$(document).ready(function () {
  
    // Stub AJAX call that demos getting the fixture data
  $.getJSON('/fixtures/fakedata.json', function (data) {
    console.log('success')

    console.log(data)
  }).done(function (data) {
    console.log('another success message ', data)
        data = data;
    messagesData(data)
  }).fail(function () {
    console.error('error')
  }).always(function () {
    console.info('complete')
  })

  function messagesData (data) {
    var messagesTemplate = $('#messages-template').html()
// debugger
    var compiledTemp = Handlebars.compile(messagesTemplate)

    var generatedMessagesHtml = compiledTemp(data)

    var messagesContainer = $('#media')

    messagesContainer.html(generatedMessagesHtml)
  }

  console.log('outside ajax call')

  $('button').on('click', function (event) {
    event.preventDefault()

    console.log('button pressed ', event)

    // $(".media-heading").html = "test"
  })

  function cancellEditMesg () {
    $input.attr('value', '')

    $editBoxContainer.remove()
  }

  function submitEditMesg () {
    var value = $input.val()
    cancellEditMesg()
    $targetParagraph.html(value)
// debugger;
    console.log('submit edit mesg function', event.target.parent)
  }

  function handleEditMessageAction () {
    console.log('cancel edit message button ', event)

    var $target = $(event.target)

    if ($target.attr('id') === 'cancel-edit-mesg') {
      console.log('cancell edit message button')

      cancellEditMesg()
    }
    else if ($target.attr('id') === 'submit-edit-mesg') {
      console.log('submit edit message button ')
      submitEditMesg()
    }

    console.log('cancel edit message button ', $target.attr('id'))
  }

  function editMessage () {
    event.preventDefault()

    console.log('edit message ', $(event.target).text())

    // $targetParagraph = $(event.target.parentElement)
    $targetParagraph = $(event.target)

    var message = $(event.target).text()

    message = message.trim()

    var $editBoxContainerParent = $(event.target).parent()

    $input.val(message)

    // showEditBox()
//     debugger
    $editBoxContainer.append($input)
    // $("#media").append($editBoxContainer)
    $editBoxContainerParent.append($editBoxContainer)
  }

  $('.media').on('click', 'div.media-body > p', editMessage)

  $('.media').on('click', 'div.edit-mesg-container button', handleEditMessageAction)

  function newMessageTemplate(args){

    var messagesTemplate = $('#new-message-template').html()

// debugger
    var compiledTemp = Handlebars.compile(messagesTemplate)

    var generatedMessagesHtml = compiledTemp(newMesg.message)

    var messagesContainer = $('.media')
    messagesContainer.append(generatedMessagesHtml)
  }

  


  $("#submit-mesg").on('click', function(){
      
      newMesg.message.content = $("#message").val()
      newMesg.message.timestamp = Date.now()
      newMesg.message.author = "Annonymous"

    //   newMessageTemplate(newMesg)
// debugger
newMessageTemplate()
    //   $editBoxContainerParent.append(`<p>newMesgText</p>`)
      console.log("new mesg box ", newMesg)
  })


  var $editBoxContainerParent = $('div.media-body')

  var $editBoxContainer = $(`<div class="edit-mesg-container">

    <button id="cancel-edit-mesg" type="submit" class="btn btn-danger">Cancel</button>
    <button id="submit-edit-mesg" type="submit" class="btn btn-success">Submit</button>
</div>`)

  var $input = $('<input type="text" id="editMessage" value="" >')
  var data
  var $targetParagraph
  
  var newMesg = {
      message: {

      }
  }

  console.log('app.js load', loadMessages.load())
})
