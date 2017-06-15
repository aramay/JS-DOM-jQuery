$(document).ready(function(){

    var $modal = $("[rel='js-modal']");

    $("[rel='js-controls1']").on("click", "[rel *= 'js-']", function(event){

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        var url = $(event.target).attr("href");

        $.ajax(url, {dateType: "text"}).then(function(contents){
            // console.log(contents);
            $modal.html(contents).show();
        });

    });




});
