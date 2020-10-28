fetch('https://api.spacexdata.com/v3/capsules/C102')
.then(response => {

    console.log(response);
    return response.json();  
})
.then(data =>{
    console.log(data);

})
.catch(error =>{
    console.log(error)
});

fetch('https://api.spacexdata.com/v3/capsules/C104')
.then(response => {

    console.log(response);
    return response.json();  
})
.then(data =>{
    console.log(data);

})
.catch(error =>{
    console.log(error)
});

fetch('https://api.spacexdata.com/v3/capsules/C106')
.then(response => {

    console.log(response);
    return response.json();  
})
.then(data =>{
    console.log(data);

})
.catch(error =>{
    console.log(error)
});