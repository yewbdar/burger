$(document).ready(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();

        if ($("#addBurger [name=burgers]").val() === "") {

            alert("Please insert burger name");
            return;
        }
        else {
            var newBurger = {
                burger_name: $("#addBurger [name=burgers]").val().trim(),
            };

            console.log(newBurger);
            $.ajax("/burgers", {
                type: "POST",
                data: { burger: newBurger }
            })
                .then(function () {
                    console.log("Added new burger");
                    location.reload();
                })

        }
    });

    $(".devoBurger").on("click", function (event) {
        var id = $(this).data("burgerid");
        $.ajax("/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log("Updated id ", id);
            });
        location.reload();
    });
})