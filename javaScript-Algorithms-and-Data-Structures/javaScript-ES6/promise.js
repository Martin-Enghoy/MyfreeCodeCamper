// A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously.
//
// A promise has three states: pending, fulfilled, and rejected. 
// The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. 
// The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, 
// and reject is used when you want it to fail.
//
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
        //  When resolve is fulfilled, do this action 
        makeServerRequest.then(result => {
            console.log(result);
        });
    } else {
        reject("Data not received");
        makeServerRequest.then(result => {
            console.log(result);
        });
    }
});
