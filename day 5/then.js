function fetchData(callBack){
    setTimeout(()=>{
        console.log("Data Fetched");
        const data ={ id:1 , name: 'john'};
        callBack(data);

    },1000);
}
fetchData(data)

fetchData
.then((data)=>{
    console.log('Data Recieved',data);
    return data.id;
})
.then((id)=>{
    console.log('ID',id);
})
.catch