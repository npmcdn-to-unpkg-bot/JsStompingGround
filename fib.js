
module.exports = {
    test: function() {
        function fib(n,undefined){
            if(fib.cache[n] === undefined)  
                fib.cache[n] = fib(n-1) + fib(n-2);
            return fib.cache[n];
        }
        fib.cache = [0,1,1];
        
        fib(10);
        console.log(fib.cache);
    }
}
