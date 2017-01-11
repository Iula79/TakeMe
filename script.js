$( document ).ready(function() {
    //showing the rest of the things to do
    $("#clickme").click(function() {
        $(".to_do_next").show();
    });
    //linking germany image
    $("#germany").click(function(){
        $(".germany").html("<img src='images/koln-germany.jpg'>");
    });
    // append this text to the div with class Italy
    //<p class="italy">You have seen Italy already</p>
});
