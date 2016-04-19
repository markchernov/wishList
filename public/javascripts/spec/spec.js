/*

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhrMethod = function (method, url, callback) {
    console.log('INSIDE XHR METHOD');
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.onreadystatechange = function () {
        console.log('READY STATE CHANGE');
        if (xhr.readyState === 4) {
            console.log('Have a response');
            console.log(xhr.responseText);
            callback(xhr.responseText);
        } else {
            console.log('State: ' + xhr.readyState + ' Status: ' +
                xhr.status);
        }

    };



    xhr.send();

};

var myCallBack = function (response) {
    globalVar = response;

    console.log("This is my globalVar inside callback: ");
    console.log(globalVar);
};



describe('should make a real AJAX request', function () {


    beforeEach(function (done) {


       xhrMethod('GET', 'http://localhost:8787/ping/ping', myCallBack);
       


        // Invoke the special done callback
        done();
    });




*/



/*


    it('is async', function (done) {



        setTimeout(function () {

            xhrMethod('GET', 'http://localhost:8787/ping/ping', myCallBack);


            console.log("This is my globalVar inside setTimeout: ");
            console.log(globalVar);


            expect(globalVar).not.toBeUndefined();
            expect(globalVar).toBe('Pong');

            done();

        }, 5000);
    });
});

*/
