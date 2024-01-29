
const urlParams= new URLSearchParams(window.location.search);
const id =urlParams.get('id');
axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`).then(function(response){
    const data = response.data;
   
    const {title,image_url,ingredients}=data.recipe;
    document.querySelector(".title").textContent=title;
    document.querySelector("img").src=image_url;
    document.querySelector(".ingredients").innerHTML= ingredients.map(function(ele){
        return`
        <li>
        ${ele}
        </li>`;
    
    } ).join('');
    
    
})

