$(document).ready(function(){

$("#submit").on("click",function(event){
    event.preventDefault();
debugger;
    var newBurger = {
        burger_name: $("#addBurger [name=burgers]").val(),
    };
    if (newBurger.burger_name === "")
    {
        alert("Please enter burger name");
    }
    else
    {
        console.log(newBurger);
        $.ajax("/burgers", {
            type: "POST",
            data: {burger : newBurger}
        })
        .then(function () {
            console.log("Added new burger");
            // location.reload();
        })
    }
});
    console.log("hi am in index ");
})