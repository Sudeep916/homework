function fetchData(callBack){
    setTimeout(()=>{
        console.log("Data Fetched");
        const data ={ id:1 , name: 'john'};
        callBack(data);

    },1000);
}
fetchData((data)=>{
    console.log("data received:",data);
})