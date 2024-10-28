document.getElementById('form-comentario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;

    const novaDiv = document.createElement('div');
    novaDiv.className = 'comentario';
    novaDiv.innerHTML = `<strong>${nome}</strong><p>${comentario}</p>`;

    document.getElementById('lista-comentarios').appendChild(novaDiv);
    this.reset();
});