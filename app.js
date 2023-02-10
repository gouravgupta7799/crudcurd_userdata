
let btn = document.getElementById('submitbtn');

obj = {
  name: '',
  email: '',
  number: ''
}
btn.addEventListener('click', (e) => {

  let Name = document.getElementById('NameInput');
  let Email = document.getElementById('EmailInput');
  let Number = document.getElementById('contactInput');

  obj.name = Name.value;
  obj.email = Email.value;
  obj.number = Number.value;

  axios.post('https://crudcrud.com/api/65cc70f8032a4c8c8d18547a4470a874/userdata', obj)

    .then((response) => showData(response))
    .catch((error) => console.log(error));
});

function showData(Response) {
  let list = document.getElementById('items');
  let li = document.createElement('li');
  let deletebtn = document.createElement('button');
  let Editbtn = document.createElement('Button');
  li.appendChild(deletebtn);
  li.appendChild(Editbtn);
  data = Response.data
  li.innerHTML = `${data.name} - ${data.email} - ${data.number}`
  list.appendChild(li);
}