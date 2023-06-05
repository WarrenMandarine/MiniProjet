let afficheLivre = document.querySelector(".Livre");

afficheLivre.addEventListener("click", ()=>{
 

    //création
    const voile = document.createElement("div");
    const modale = document.createElement("div");
    const croix = document.createElement("div");
    const imgModale = document.createElement("img");

    //ajout id
    voile.id = "voile";
    modale.id ="modale";
    croix.id = "croix";
    imgModale.id = "imgModale";

// inject element
    document.body.appendChild(voile);
    document.body.appendChild(modale);

    //ajout données dans l'élément
    croix.textContent = "X"
    imgModale.setAttribute("src", "./src/Illustration(1).png");
    modale.append(croix, imgModale);

    let datas = afficheLivre.dataset;
    for(key in datas){
        console.log(datas[key]);
        const parag = document.createElement("p");
        parag.textContent = datas[key];
        
        modale.appendChild(parag);
    }


    croix.addEventListener("click", ()=>{

        voile.remove();
        modale.remove();
    })
});


