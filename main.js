
      axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
        .then(function (response) {
            const data = response.data;
            const recipes=data.recipes;

          document.querySelector(".products").innerHTML = recipes.map(function (recipe) {
            return`
        <div>
        <h2> ${recipe.title}</h2>
        <img src="${recipe.image_url}"/>
        <a href="details.html?id=${recipe.recipe_id}">details </a>
       
        </div>

        `;
          }).join('');
        })
       

 
 