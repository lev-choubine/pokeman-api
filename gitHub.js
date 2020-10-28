const container = document.querySelector('.container');


fetch('https://api.github.com/users/lev-choubine')
.then(response => {

    
    return response.json();  
})
.then(data =>{
    
    const levObj = {
        bio: data.bio,
        username: data.login,
        name: data.name
    }
    console.log(levObj);

    const newElement =document.createElement('p');
    newElement.textContent = levObj.name;

    container.appendChild(newElement);
})
.catch(error =>{
    console.log(error)
});


