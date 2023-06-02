let AfficheLivre = document.querySelector("livre");

AfficheLivre.addEventListener("click", () =>{

    const voile = document.createElement("div");
    const modale = document.createElement("div");
    const croix = document.createElement("div");
    const imgModale = document.createElement("img");

    voile.id = "voile";
    modale.id ="modale";
    croix.id = "croix";
    imgModale.id = "imgModale";


    document.body.appendChild(voile);
    document.body.appendChild(modale);

    voile.textContent = "Apparition du voile";
    croix.textContent = "X"
    imgModale.setAttribute("src", "./src/Illustration(1).png");
    modale.append(croix, imgModale);

    croix.addEventListener("click", ()=>{

        voile.remove();
        modale.remove();
    })
});