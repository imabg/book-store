class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
  addBooList(){
    const list = document.getElementById('book-list');
    const tr = document.createElement('tr');
    tr.innerHTML =
    `<td>${this.title}</td>
    <td>${this.author}</td>
    <td>${this.isbn}</td>
    <td><a href = '#' class = 'delete'>x</a></td>`;
    list.appendChild(tr);
  }
  succesMsg(text){
    const constainer = document.querySelector('.container');
    const msg = document.createElement('div');
    const form = document.getElementById('book-form');
    msg.className = 'sucess';
    msg.appendChild(document.createTextNode(text));
    constainer.insertBefore(msg, form);
    setTimeout(function(){
      document.querySelector('.sucess').remove();
    }, 2000);
  }
  errorMsg(text){
    const constainer = document.querySelector('.container');
    const msg = document.createElement('div');
    const form = document.getElementById('book-form');
    msg.className = 'error';
    msg.appendChild(document.createTextNode(text));
    constainer.insertBefore(msg, form);
    setTimeout(function(){
      document.querySelector('.error').remove();
    }, 2000);
  }
  removeButton(){
    const btn = document.getElementById('book-list');
    btn.addEventListener('click', function(e){
      e.preventDefault();

      if(e.target.className === 'delete'){
        e.target.parentElement.parentElement.remove();
        //console.log(e.target.className);
      }
    });
  }
  clearField(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}


// IDEA: Event Listener
document.getElementById('book-form').addEventListener('submit', function(e){
  e.preventDefault();
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  const book = new Book(title, author, isbn);
  if(title !== '' || author !== '' || isbn !== ''){
    book.addBooList();
    book.succesMsg('Successfully Added');
    book.clearField();
    book.removeButton();
  } else {
    book.errorMsg('Please Fill all the Fields');
  }
});
