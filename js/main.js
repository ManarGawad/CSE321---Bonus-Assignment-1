function change() {
  var title = document.getElementById("book-title").value;
  var subtitle = document.getElementById("book-subtitle").value;
  var author = document.getElementById("book-author").value;
  var color = document.getElementById("book-color").value;
  var publisher = document.getElementById("book-publisher").value;
  var year = document.getElementById("book-year").value;
  document.getElementById("changed-title").innerHTML = title;
  document.getElementById("changed-subtitle").innerHTML = subtitle;
  document.getElementById("changed-author").innerHTML = author;
  document.getElementById("changed-publisher").innerHTML = publisher;
  document.getElementById("changed-year").innerHTML = year;
  document.getElementById("changed-color").style.backgroundColor = color;
}
