function log(mesg) {
  $("<p>" ,{text: mesg}).prependTo("#log")
}


$("#elem, #elem2").draggable({
//   helper: function () {
//     return $("<div> draggable </div>").addClass("green")
//   }
});


$("#drop").droppable({
  activeClass: "green",
  hoverClass: "goldenrod",
  tolerance: "touch",
  
  drop: function(){
    var drop = $(this)
    
    $(this).droppable("disable");
    setTimeout(function(){
      drop.droppable("enable")
    }, 3000)
  }
  
})

$("#elem").bind("dragstart drag dragstop", function (event, ui){
  
  //log("started")
  //log(event.type)
})