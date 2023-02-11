let url = "https://crudcrud.com/api/000620fb92734c63b0deaeac9cbcbf92";

let list = document.getElementById('items');

showData();

function createListItem(name, email, number) {
  let li = document.createElement('li');
  let deletebtn = document.createElement('Button');
  let Editbtn = document.createElement('Button');
  li.appendChild(deletebtn);
  li.appendChild(Editbtn);
  li.innerHTML = `${name} - ${email} - ${number}`
  return li;
}

function showData() {
  axios.get(url + '/userdata')
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        list.appendChild(createListItem(response.data[i].name, response.data[i].email, response.data[i].number));
      }
    })
    .catch((error) => console.log(error));
}


let btn = document.getElementById('submitbtn');
btn.addEventListener('click', (e) => {
  let obj = {
    name: '',
    email: '',
    number: ''
  }

  obj.name = document.getElementById('NameInput').value;
  obj.email = document.getElementById('EmailInput').value;
  obj.number = document.getElementById('contactInput').value;

  axios.post(url + '/userdata', obj)
    .then(response => {
      list.appendChild(createListItem(response.data.name, response.data.email, response.data.number));
    })
    .catch((error) => console.log(error));
});
