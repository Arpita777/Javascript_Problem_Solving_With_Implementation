function rateLimit(fn,limit,interval){
    const timestamps = [];

    return function(...args){
        let now = Date.now();
        while(timestamps.length && now - timestamps[0] >= interval){
            timestamps.shift();
        }
        if(timestamps.length < limit){
            timestamps.push(now);
            return fn.apply(this,args);
        }
        console.log("Rate limit exceeded");
    }
}

const api = () => {
    console.log("API called")
}

const limitedAPI = rateLimit(api,3,5000);
limitedAPI();
limitedAPI();
limitedAPI();
limitedAPI();
limitedAPI();
limitedAPI();