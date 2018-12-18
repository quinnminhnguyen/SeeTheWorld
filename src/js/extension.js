const SUCCESS = "SUCCESS";

function sendMessage() {
    console.log("Parsing Page")
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            message: "ACTIVATE"
        }, function(response) {
            if (response && response.message == SUCCESS) {
                $("#activate").text("loaded");
            }
        });
    });
    $("#activate").prop("disabled", true);
    $("#activate").text("loading");
}

console.log("Loaded extension")

$("#activate").click(sendMessage);