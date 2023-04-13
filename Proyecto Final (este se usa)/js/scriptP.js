let preveiwContainer = document.querySelector('.productos-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
let cabeceraNav = document.querySelector('.cabecera');
let ocultarNav = cabeceraNav.querySelector('.nav');



document.querySelectorAll('.productoos-container .producto').forEach(producto => {
    producto.onclick = () => {
        preveiwContainer.style.display = 'flex';
        cabeceraNav.style.display = 'none';
        let name = producto.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});



previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
        cabeceraNav.style.display = 'flex';
    };
});
