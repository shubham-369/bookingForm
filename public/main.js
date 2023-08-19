
const fid = document.getElementById('id');
const u_name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

const form = document.getElementById("Form")
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const jsondata = {};
    formData.forEach((value, key) => {
        jsondata[key] = value;
    });

    try{
        await axios.post('/product', jsondata)

    }
    catch(error) {
        console.log('error while post request',error);
    }

    const div = document.getElementById("user-data");
    div.querySelector('ul').innerHTML = '';
    axios.get('http://localhost:3333/form')
        .then((response) => {
            const obj = response.data;
            for(let i=0; i<obj.length; i++){
                let li = document.createElement("li");
                li.style.color = 'black';
                li.innerHTML = `${obj[i].name} - ${obj[i].phone} - ${obj[i].email} <a class='btn btn-danger' href="delete/${obj[i].id}">Delete</a>&nbsp;<button class='btn btn-secondary edit' data-id="${obj[i].id}">Edit</button><br><br>`;
                div.querySelector('ul').appendChild(li);
            }
        })
        .catch((error) => console.log('error while fetching data : ', error));
    
    form.reset();
});

const div = document.getElementById("user-data");
axios.get('http://localhost:3333/form')
    .then((response) => {
        const obj = response.data;
        for(let i=0; i<obj.length; i++){
            let li = document.createElement("li");
            li.style.color = 'black';
            li.innerHTML = `${obj[i].name} - ${obj[i].phone} - ${obj[i].email} <a class='btn btn-danger' href="delete/${obj[i].id}">Delete</a>&nbsp;<button class='btn btn-secondary edit' data-id="${obj[i].id}">Edit</button><br><br>`;
            div.querySelector('ul').appendChild(li);
        }
    })
    .catch((error) => console.log('error while fetching data : ', error));

function listdata(list){
    const arr = list.split('-');
    const l = arr[arr.length-1];
    arr.pop();
    const categ = l.split(' ');
    arr.push(categ[1]); 
    return arr;
}

div.addEventListener('click', (e) => {
    if(e.target.classList.contains('edit')){
        const id = e.target.getAttribute('data-id');
        const text = e.target.parentElement.textContent;
        fid.value = id;
        u_name.value = listdata(text)[0];
        phone.value = parseInt(listdata(text)[1]);
        email.value = listdata(text)[2];
    }
});