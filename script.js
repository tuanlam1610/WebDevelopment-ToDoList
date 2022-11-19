var dataList = [];
const storageKey = 'dataList';

function loadTask(){
    var tempList = localStorage.getItem(storageKey)
    if (tempList.length <= 2) return
    tempList = tempList.slice(1, tempList.length - 1)
    dataList = tempList.split(',')
    for (itr in dataList){
        dataList[itr] = dataList[itr].slice(1, dataList[itr].length - 1)
        const ul = document.querySelector("main ul.list-task")
        const newtask = document.createElement('li');
        newtask.className = 'list-group-item';
        newtask.innerHTML = dataList[itr] + '<i class="fa-solid fa-pen left-2nd hover-yellow" onclick="edit(this)"></i><i class="fa-regular fa-circle-xmark left-1st hover-red" onclick="deleteThis(this)"></i>'
        ul.insertAdjacentElement('beforeend',newtask)
    }
    
}

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
    dataList.push(e.parentElement.children[0].value)
    e.parentElement.children[0].value = ""
    ul.insertAdjacentElement('beforeend',newtask)
    localStorage.setItem(storageKey,JSON.stringify(dataList))
}

function press(action, element){
    action.preventDefault();
    if(action.key === 'Enter' ){
        if (element.className === 'edittask'){
            confirmEdit(element)
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

function edit(e){
    e.parentElement.innerHTML = '<input type="text" name="edittask" id="edittask" class="edittask" value="'+ e.parentElement.innerText +'" placeholder ="'+ e.parentElement.innerText +'" onkeyup="press(event,this)"><i class="fa-regular fa-circle-check left-2nd hover-green" onclick="confirmEdit(this)" style="font-size: 24px"></i><i class="fa-regular fa-circle-xmark left-1st hover-red" onclick="closeEdit(this)"></i>';
}

function closeEdit(closeEdit){
    closeEdit.parentElement.innerHTML = closeEdit.parentElement.children[0].placeholder + '<i class="fa-solid fa-pen left-2nd hover-yellow" onclick="edit(this)"></i><i class="fa-regular fa-circle-xmark left-1st hover-red" onclick="deleteThis(this)"></i>'
}

function confirmEdit(confirm){
    const pos = dataList.indexOf(confirm.parentElement.children[0].placeholder)
    dataList[pos] = confirm.parentElement.children[0].value
    localStorage.setItem(storageKey, JSON.stringify(dataList))
    confirm.parentElement.innerHTML = confirm.parentElement.children[0].value + '<i class="fa-solid fa-pen left-2nd hover-yellow" onclick="edit(this)"></i><i class="fa-regular fa-circle-xmark left-1st hover-red" onclick="deleteThis(this)"></i>'
}

function deleteThis(e){
    const pos = dataList.indexOf(e.parentElement.innerText);
    dataList.splice(pos,1)
    e.parentElement.remove();
    localStorage.setItem(storageKey, JSON.stringify(dataList))
}

function deleteAll(e){
    e.parentElement.children[2].innerHTML = '<li class="list-group-item list-group-item-primary"><h2>List task</h2></li>'
    dataList = [];
    localStorage.setItem(storageKey, JSON.stringify(dataList))
}