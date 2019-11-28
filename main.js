const http = require("http");


const api_key = "51c92360";
let url = "http://api.mockaroo.com/api/types?key=" + api_key;


// fetch(url).then((result)=>{
//     console.log(result);
// }).catch((err)=>{throw err})

http.get("http://example.com",res=>{
    console.log(res.headers);

    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
    //   console.log(data);
      body += data;
    });
    res.on("end", () => {
    //   body = JSON.parse(body);
      console.log(body);
    });
})