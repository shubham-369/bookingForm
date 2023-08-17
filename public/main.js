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
    axios.get('http://localhost:3333/index')
        .then((response) => {
            const obj = response.data;
            console.log(obj);
            for(let i=0; i<obj.length; i++){
                let li = document.createElement("li");
                li.style.color = 'black';
                li.innerHTML = `${obj[i].name} - ${obj[i].phone} - ${obj[i].email} <a class='btn btn-danger' href="delete/${obj[i].id}">Delete</a>&nbsp;<a class='btn btn-secondary' href="edit/${obj[i].id}">Edit</a><br><br>`;
                div.querySelector('ul').appendChild(li);
            }
        })
        .catch((error) => console.log('error while fetching data : ', error));
    
    form.reset();
});

const div = document.getElementById("user-data");
axios.get('http://localhost:3333/index')
    .then((response) => {
        const obj = response.data;
        for(let i=0; i<obj.length; i++){
            let li = document.createElement("li");
            li.style.color = 'black';
            li.innerHTML = `${obj[i].name} - ${obj[i].phone} - ${obj[i].email} <a class='btn btn-danger' href="delete/${obj[i].id}">Delete</a>&nbsp;<a class='btn btn-secondary' href="edit/${obj[i].id}">Edit</a><br><br>`;
            div.querySelector('ul').appendChild(li);
        }
    })
    .catch((error) => console.log('error while fetching data : ', error));

axios.get('http://localhost:3333/edit')

