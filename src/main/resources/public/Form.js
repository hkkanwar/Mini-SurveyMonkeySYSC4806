/**
 * File handles all SPA actions by the Form
 */

$(document).ready(function () {
    $("#dropdown").change(function () {
        var selectedOption = $(this).val();
        var form = $("#myForm");
        var dynamicInput = $("#dynamicInput");

        // Remove any existing dynamic input elements
        dynamicInput.empty();

        if (selectedOption === "NumberField" || selectedOption === "TextField") {
            $("#mcOptionsContainer").hide(); //to ensure that second dropdown is hidden
            var inputField = $("<input>").attr({
                type: "text",
                name: "dynamicInput",
                placeholder: "Enter your answer"
            });
            dynamicInput.append(inputField);
        } else if (selectedOption === "MC") {
            $("#mcOptionsContainer").show();

            $("#mcOptionsDropdown").change(function () {
                var selectedOption = $(this).val();
                dynamicInput.empty();
                for (var i = 1; i <= selectedOption; i++) {
                    var radioBtn = $("<input>").attr({
                        type: "radio",
                        name: "dynamicInput",
                        placeholder: "Enter mc text"
                    });
                    var labelInput = $("<input>").attr({
                        type: "text",
                        placeholder: "Option text"
                    });
                    dynamicInput.append(radioBtn).append(labelInput).append("<br>");
                }
            })

            }
        })
    });

