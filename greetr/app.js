(function() {

    $('#run').on('click', function () {
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var lang = $("#lang").find('option:selected').val();
        var formal = $("#formality").find('option:selected').val() === "formal" ? "formal" : null;

        var obj = G$(firstname, lastname, lang);

        obj.printGreeting('#greeting', formal);
    });

})();

