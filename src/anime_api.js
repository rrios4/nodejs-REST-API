const base_url = "https://api.jikan.moe/v3"

function searchAnime(event){
    event.preventDefault();
    const form = new FormData(this);
    const query = form.get("animeName");
    console.log(query);

    fetch(`${base_url}/search/anime?q=${query}&page=1`)
    .then(res => res.json())
    .then(updateDOM)
    .then(data=>console.log(data))
    .catch(err => console.warn(err.message));
}

function updateDOM(data){

    const searchResults = document.getElementById('searchResults');

    searchResults.innerHTML = data.results
    //.sort((a,b)=>a.episodes-b.episodes)
    .map(anime => {
        return `
            <div class="card" style="width: 18rem; padding: 1rem;">
                <img class="card-img-top" src="${anime.image_url}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${anime.title}</h5>
                  <p>${anime.synopsis}</p>
                  <a href="${anime.url}" class="btn btn-primary">Learn More</a>
                </div>
              </div>
        `
    }).join(" ");
}

function pageLoaded(){
    const form = document.getElementById('searchForm');
    form.addEventListener("submit", searchAnime)
}
//window.addEventListener("load", pageLoaded);

module.exports = pageLoaded,searchAnime;