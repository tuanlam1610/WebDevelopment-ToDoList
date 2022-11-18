// let pen = document.querySelectorAll('.fa-pen')
// let closeEdit;

// pen.forEach((item,index) => {
//     item.addEventListener('click',e => edit(e,index))
// })

// const edit =(e,index) =>{
//     e.preventDefault();
//     let textValue ='';
//     console.log(index)
//     textValue = pen[index].parentElement.innerHTML
//     pen[index].parentElement.innerHTML = '<input type="text" name="newtask" id="edittask" class="newtask" placeholder="Add new task..." required></i><i class="fa-solid fa-xmark left close"></i>';
//     closeEdit = document.querySelectorAll('.close')
//     console.log(closeEdit)

//     closeEdit.forEach((item,index) => {
//         item.addEventListener('click',e => closeInput(e,index))
//     })
    
//     const closeInput =(e,index) =>{
//         e.preventDefault();
//         closeEdit[index].parentElement.innerHTML = textValue;
//     }
// }
let textValue;
function edit(e){
    console.log(e)
    textValue = e
    console.log(textValue);
    e.parentElement.innerHTML = '<input type="text" name="newtask" id="edittask" class="newtask" placeholder="Edit task..." required></i><i class="fa-solid fa-xmark left close" onclick="closeEdit(this)"></i>';
}

function closeEdit(closeE){
    console.log(closeE)
    document.replaceChild(closeE,textValue);
}

