let Lista = [
    'Produto',
    'Pen drive USB 16 GB',
    'Monitor LCD 24 polegadas',
    'Microfone USB',

    'Preço em 2010',
    '50,00',
    '1200,00',
    '200,00',

    'Preço em 2020',
    '60,00',
    '1600,00',
    '300,00',

    'Variação',
    '20%',
    '33%',
    '50%',
]


function criarElementos(){
    table = document.createElement('table');

    tr_01 = document.createElement('tr');
    tr_02 = document.createElement('tr');
    tr_03 = document.createElement('tr');
    tr_04 = document.createElement('tr');

    th_01 = document.createElement('th');
    th_02 = document.createElement('th');
    th_03 = document.createElement('th');
    th_04 = document.createElement('th');

    td_01 = document.createElement('td');
    td_02 = document.createElement('td');
    td_03 = document.createElement('td');

    td_04 = document.createElement('td');
    td_05 = document.createElement('td');
    td_06 = document.createElement('td');

    td_07 = document.createElement('td');
    td_08 = document.createElement('td');
    td_09 = document.createElement('td');

    td_10 = document.createElement('td');
    td_11 = document.createElement('td');
    td_12 = document.createElement('td');

    table.appendChild(tr_01);
    table.appendChild(tr_02);
    table.appendChild(tr_03);
    table.appendChild(tr_04);

    tr_01.appendChild(th_01);
    tr_01.appendChild(th_02);
    tr_01.appendChild(th_03);
    tr_01.appendChild(th_04);

    tr_02.appendChild(td_01);
    tr_02.appendChild(td_02);
    tr_02.appendChild(td_03);
    tr_02.appendChild(td_04);

    tr_03.appendChild(td_05);
    tr_03.appendChild(td_06);
    tr_03.appendChild(td_07);
    tr_03.appendChild(td_08);

    tr_04.appendChild(td_09);
    tr_04.appendChild(td_10);
    tr_04.appendChild(td_11);
    tr_04.appendChild(td_12);

    th_01.innerText = Lista[0];
    th_02.innerText = Lista[4];
    th_03.innerText = Lista[8];
    th_04.innerText = Lista[12];

    td_01.innerText = Lista[1];
    td_05.innerText = Lista[2];
    td_09.innerText = Lista[3];
    
    td_02.innerText = Lista[5];
    td_06.innerText = Lista[6];
    td_10.innerText = Lista[7];

    td_03.innerText = Lista[9];
    td_07.innerText = Lista[10];
    td_11.innerText = Lista[11];
    
    td_04.innerText = Lista[13];
    td_08.innerText = Lista[14];
    td_12.innerText = Lista[15];

    var div = document.getElementById('app');
    div.append(table);
}

criarElementos();
