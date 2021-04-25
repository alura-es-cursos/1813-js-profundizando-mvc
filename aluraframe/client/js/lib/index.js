const campos = [
    document.querySelector('#fecha'),
    document.querySelector('#cantidad'),
    document.querySelector('#valor')
];

document.querySelector('.form').addEventListener('submit',function(event){
    const tr = document.createElement('tr');
    const tbody = document.querySelector('table tbody');

    event.preventDefault();
    campos.forEach(function(campo){
        const td = document.createElement('td');
        td.textContent = campo.value;

        tr.appendChild(td);
    });

    const tdTotal = document.createElement('td');
    tdTotal.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdTotal);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});