function log(mesg) {
  $("<p>" ,{text: mesg}).prependTo("#log")
}


$("#elem").draggable({
  helper: function () {
    return $("<div> draggable </div>").addClass("green")
  }
});


$("#drop").droppable({
  activeClass: "green"
})

$("#elem").bind("dragstart drag dragstop", function (event, ui){
  
  //log("started")
  //log(event.type)
})

