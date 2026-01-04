function validate(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const error = document.getElementById('error');

  if(!name || !email){
    error.innerText = 'All fields are required';
    return false;
  }
  error.innerText = 'Submitted successfully!';
  return false;
}
