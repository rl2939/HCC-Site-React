//this method is for accesting the data as the url
const proxy = "http://solace.ist.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/";
//const proxy = "http://people.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/";

// endpoint is the url I want to hit - ex: "about/"
async function getData(endpoint){
    //go get the data with the base and the endpoint
    const result = await fetch(`${proxy}${endpoint}`);
    //return it (but turn it to JSON first)
    return await result.json();
}

export default getData;