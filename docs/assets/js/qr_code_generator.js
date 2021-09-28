function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
docReady(function() {
    var qrcode = new QRCode("qrcode");

    function makeCode() {
        var elText = document.getElementById("text");

        if (!elText.value) {
            elText.focus();
            return;
        }

        qrcode.makeCode(elText.value);
        imgData = $("div#qrcode img").attr("src");
        console.log(imgData);
        newLink = document.createElement("a");
        newLink.href = imgData;
        newLink.download = "qrcode.png";
        $("div#qrcode img").wrap(newLink);
    }

    makeCode();

    $("#text").on("blur", function () {
        makeCode();
    }).on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });
    $("button#submit").click(function () {
        makeCode;
    });
})