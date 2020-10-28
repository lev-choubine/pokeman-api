fetch('https://api.github.com/users/lev-choubine')
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