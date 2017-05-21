$(document).ready(function(event) {
    // process the form
    $("form#data").submit(function(event) {
        event.preventDefault()
        var formData = new FormData(this);
        
        // process the form
        $.ajax({
            type        : 'POST',
            url         : $(this).attr("action"), // the url where we want to POST
            contentType: false,
            processData: false,
            data        : formData, // our data object
            dataType    : 'json' // what type of data do we expect back from the server
        
            
        }).done(function(data) { // using the done promise callback

            // log data to the console so we can see
            alert("File size: "+data["size"]+' bytes');

            // here we will handle errors and validation messages
        });
        
    });
});
