
describe("Testing real-world async calls with beforeEach and invoking the special done callback in the promise's done callback and using the promise's return data", function () {
    var returnedJSON = {};

    beforeEach(function (done) {
        $.getJSON("http://data.colorado.gov/resource/4ykn-tg5h.json?entityStatus=Good%20Standing&principalZipCode=80130")
        .done(function (result) {
            returnedJSON = result;

            // Invoke the special done callback
            done();
        });
    });

    it("Should have returned JSON if the async call has completed", function () {
        expect(returnedJSON).not.toEqual({});
        expect(returnedJSON).not.toBeUndefined();
    });

});