const container = document.querySelector('.container');

fetch(' https://pokeapi.co/api/v2/pokemon/mewtwo').
then(response => {
    if (response.ok){
    
        return response.json();
    
    }
})
.then(pokemon => {
    // console.log(pokemon);
    console.log(pokemon.abilities[0].ability.name);
    const mewTwo  = {
        ability: pokemon.abilities[0].ability.name,
        height: pokemon.height,
        weight: pokemon.weight,
        name: pokemon.name,
        move: pokemon.moves[5].move.name,
        picture: pokemon.sprites.other['official-artwork']['front_default'], 
        purchaseLink: 'https://www.ebay.com/i/333115686977?chn=ps'
        
    }

    const mewTwoCard = makePokemonCard(mewTwo);
    console.log(mewTwoCard);
    container.appendChild(mewTwoCard);
    
}).catch(error => {
    console.log(error)
});

 function makePokemonCard(pokemon) {
     //create a div element, add a class, add styl
     const card = document.createElement('div');
     card.classList.add('card');
     card.style.width= '18rem';
       
         //create an image src tag, add a class, add alt
         const image = document.createElement('img');
         image.classList.add('card-img-top');
         image.setAttribute('src', pokemon.picture);
         image.setAttribute('alt', `This is ${pokemon.name}`);
         //Append the image to the card div
     card.appendChild(image);   
         //create a div element, add class
              const cardBory = document.createElement('div');
              cardBory.classList.add('card-body');
               //Create H5 element, ass class, add text

     const nameElement = document.createElement('h5');
     nameElement.classList.add('card-title');
     nameElement.textContent=pokemon.name;          
               // Create P tag, add class, add text
     const heightWeight = document.createElement('p');
     heightWeight.classList.add('card-text');
     heightWeight.textContent =`Height: ${pokemon.height}, Weight: ${pokemon.weight}`; 
      const move = document.createElement('p');
     move.classList.add('card-text');
     move.textContent =`move: ${pokemon.move};`
     const ability = document.createElement('p');
     ability.classList.add('card-text');
     ability.textContent =`ability: ${pokemon.ability}`;

               // Create a tagm add 2 classm add href, add text
               const purchaseLink = document.createElement('a');
               purchaseLink.classList.add('btn','btn-primary');
               purchaseLink.setAttribute('href', pokemon.purchaseLink);
               purchaseLink.textContent = `Buy ${pokemon.name} card`
               // Append to card-boy div
               cardBory.appendChild(nameElement);
               cardBory.appendChild(heightWeight);
               cardBory.appendChild(move);
               cardBory.appendChild(ability);
               cardBory.appendChild(purchaseLink);

               card.appendChild(cardBory);

               return card;
               
        // Append card-body div to card

   // Append card div to container div
         
 }
{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}