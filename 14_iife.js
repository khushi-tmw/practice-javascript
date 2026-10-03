// Immediately Invoked Function Expression (IIFE)
// Global scope ke pollution ko hatane ke liye

// NAMED IIFE
(function chai (){
    console.log('DB CONNECTED');
    
})(); // => {} IMMEDIATE INVOKE AND ; TO END


(function code () {
    console.log('DB CONNECTED 2');
    
})();

// UNNAMED IFFE
( (name) => {
    console.log('DB CONNECTED 2');
    
})('khushi')
