function deleteThis(e){
    console.log(e)
    e.parentElement.remove();
}

function deleteAll(e){
    e.parentElement.children[2].innerHTML = '<li class="list-group-item list-group-item-primary"><h2>List task</h2></li>'
}