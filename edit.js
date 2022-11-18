function edit(e){
    e.parentElement.innerHTML = '<input type="text" name="edittask" id="edittask" class="edittask" value="'+ e.parentElement.innerText +'" onkeyup="press(event,this)"><i class="fa-regular fa-circle-check left-1st hover-green" onclick="closeEdit(this)"></i>';
}

function closeEdit(closeE){
    closeE.parentElement.innerHTML = closeE.parentElement.children[0].value + '<i class="fa-solid fa-pen left-2nd hover-yellow" onclick="edit(this)"></i><i class="fa-regular fa-circle-xmark left-1st hover-red" onclick="deleteThis(this)"></i>'
}

