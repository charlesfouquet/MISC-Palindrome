// ================================ VERSION AVEC JQUERY EVENT LISTENER
$("#test").on("click", function(event) {
    event.preventDefault()

    var word = $("#word").val().toLowerCase();
    var reversed = $("#word").val().toLowerCase().split("").reverse().toString().replaceAll(",","");

    if (word == reversed) {
        $("#result").text(word+" est bien un palindrome").css({
            "backgroundColor":"rgb(179, 226, 185)",
            "color":"green",
            "border":"1px solid rgb(123, 206, 136)",
            "borderRadius":"5px",
            "padding":"20px"
        });
    } else {
        $("#result").text(word+" n'est pas un palindrome").css({
            "backgroundColor":"rgb(250, 167, 167)",
            "color":"rgb(146, 2, 2)",
            "border":"1px solid rgb(230, 131, 131)",
            "borderRadius":"5px",
            "padding":"20px"
        });
    }
})

// ================================ VERSION AVEC ONSUBMIT DANS LE FORMULAIRE
// function palindromeTest(event) {
//     event.preventDefault()

//     var word = $("#word").val().toLowerCase();
//     var reversed = $("#word").val().toLowerCase().split("").reverse().toString().replaceAll(",","");

//     if (word == reversed) {
//         $("#result").text(word+" est bien un palindrome").css({
//             "backgroundColor":"rgb(179, 226, 185)",
//             "color":"green",
//             "border":"1px solid rgb(123, 206, 136)",
//             "borderRadius":"5px",
//             "padding":"20px"
//         });
//     } else {
//         $("#result").text(word+" n'est pas un palindrome").css({
//             "backgroundColor":"rgb(250, 167, 167)",
//             "color":"rgb(146, 2, 2)",
//             "border":"1px solid rgb(230, 131, 131)",
//             "borderRadius":"5px",
//             "padding":"20px"
//         });
//     }
// }