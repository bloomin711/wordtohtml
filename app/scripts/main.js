var mammoth = require("mammoth");

mammoth.convertToHtml({ path:"path/to/document.docx" })
    .then(function(results) {
        "use strict";
        var html = result.value; // The generated HTML
        var messages = result.messages; // Any messages, such as warnings during conversion

        console.log(html); 
        console.log(messages);
    })
    .done();
