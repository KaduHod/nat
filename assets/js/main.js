
const blocos = document.getElementsByClassName('bloco');

const fotos = () => {
    const album = [];
    let cont = 1;
    while (cont < 12) {
        album.push(`oi${cont}.jpeg`)
        cont++;
    }
    return album;
}
const albumFotos = {
    setPhotos : () => {
        const container = document.getElementById('container-fotos')
        fotos().forEach( foto => container.innerHTML+= albumFotos.divFoto({foto}) )
    },
    divFoto : ({foto}) => {
        return `
            <div class="photo" style="background-image:url(/assets/nosso-album/${foto});">

            </div>
        `
    }
}
albumFotos.setPhotos()