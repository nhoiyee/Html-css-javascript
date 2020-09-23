function windowOp(){
        var newWin=window.open("http://wwww.google.com","newWin","width=100,height=100");
        newWin.moveTo(150,200);
        newWindow.close();
        window.close();
    }

function navigatorProp(){
        document.write("<br> appcodeName:" + navigator.appCodeName);
        document.write("<br> appName:" + navigator.appName);
        document.write("<br> platform:" + navigator.platform);
        document.write("<br> cookie is enabled: " + navigator.cookieEnabled);
        document.write("<br> product: " + navigator.product);
}
navigatorProp();

function locationProp(){

    console.log("hreaf of location:" + location.href);
}


