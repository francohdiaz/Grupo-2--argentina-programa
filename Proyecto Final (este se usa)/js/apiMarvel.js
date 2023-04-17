/*let listado = [];

const consultarListado = async () =>{
    const datos = await fetch("https://www.freetogame.com/api/games?platform=pc");
    const datosJason = await datos.json();
    return datosJason;
}

const consultarDatos = async () =>{
    const listado = await consultarListado();
    console.log(listado.data);
}*/

const marvel = {
    render:()=> {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=3f47d0914d6f663f75bd0a7275cb7a4c&hash=b5ae85f07562573e01616e47dafb4fce';
        const container = document.querySelector("#marvel-row");
        let contentHTML = "";


        // Documentacion sobre la funcion "fetch" y ".then" -- https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            //console.log(json, 'RES.JSON')
            for(const comic of json.data.results){
                let urlComic = comic.urls[0].url;
                contentHTML += `
                <div class="col-md-4">
                    <a href="${urlComic}" target="_blank">
                        <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${comic.title}</h3>
                </div>`;
            }
            container.innerHTML = contentHTML;
        })
    }
};
marvel.render();