function add(e){
    if (e.parentElement.children[0].value === "")
    {
        alert("You have to input task's name!");
        return;
    }
    const ul = document.querySelector("main ul.list-task")
    const newtask = document.createElement('li');
    newtask.className = 'list-group-item';
    newtask.innerHTML = e.parentElement.children[0].value + '<i class="fa-solid fa-pen left-2nd hover-yellow" onclick="edit(this)"></i><i class="fa-regular fa-circle-xmark left-1st hover-red" onclick="deleteThis(this)"></i>'
    e.parentElement.children[0].value = ""
    ul.insertAdjacentElement('beforeend',newtask)
}

function press(action, element){
    action.preventDefault();
    if(action.key === 'Enter' ){
        if (element.className === 'edittask'){
            closeEdit(element)
        }
        else{
            add(element)
        }
    }
}

function search(){
    let searchValue = document.getElementById('search');
    searchValue = searchValue.value.toUpperCase();
    let li = document.getElementsByClassName('list-group-item');
    for(var i = 1; i < li.length; i++){
        if (li[i].innerText.toUpperCase().search(searchValue) != -1)
            li[i].style.display = "";
        else li[i].style.display = "none"; 
    }
}