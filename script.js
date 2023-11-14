window.onload = build;

const myArray = ['PTI' , 'MQM' , 'PPP' , 'TLP'];
const message = document.getElementById('message');
const addpolitition = document.getElementById('addNew');
const parties = document.getElementById('addPolititionParty');
const output = document.getElementById('output');

addpolitition.onclick = function() {
    const newPolitition = parties.value;
    adder(newPolitition , myArray.length , 0);
    myArray.push(newPolitition);
}

function build() {
    myArray.forEach((item , index) => {
        adder(item , index , 0);
    });
}

function adder(name , index , counter) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.classList.add('box');
    td1.textContent = index + 1;
    const td2 = document.createElement('td');
    td2.textContent = name;
    const td3 = document.createElement('td');
    td3.textContent = counter;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.onclick = function() {
        console.log(tr.lastChild);
        let val = Number(tr.lastChild.textContent);
        val++;
        tr.lastChild.textContent = val;
    }
    output.appendChild(tr);
}


