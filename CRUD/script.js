const form = document.getElementById('form')
const table= document.getElementById('table')
const tbody=table.getElementsByTagName('tbody')[0]

const NameInput=document.getElementById('Name')
const EmailInput=document.getElementById('Email')
const RoleInput=document.getElementById('Role')
var selectedRow=null;
form.onsubmit= (e)=>{e.preventDefault();handleSubmit(form)}


function readForm()
{
    var formData={}
    formData['id']=table.rows.length
    formData['name']=NameInput.value;
    formData['email']=EmailInput.value
    formData['role']=RoleInput.value
    return formData
}


function handleSubmit(form)
{  
    var formData=readForm()
    

    if(formData['name']&&formData['name']!=="")
    if(selectedRow==null)
    insertRecord(formData)
    else
    editSelectedRow(formData)
    
    form.reset()
  
}



function insertRecord(data)
{
    
    var newRow=tbody.insertRow(table.length)
    newRow.id=data.id
    var cell1= newRow.insertCell(0)
    cell1.innerHTML=table.rows.length
    
    var cell2= newRow.insertCell(1)
    cell2.innerHTML=data.name;
    cell2.className="name"

    var cell3= newRow.insertCell(2)
    cell3.innerHTML=data.email;
    cell3.className="email"

    var cell4= newRow.insertCell(3)
    cell4.innerHTML=data.role;
    cell4.className="role"

    var cell5 = newRow.insertCell(4)
    cell5.innerHTML=`<span onclick="editRow(this)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                        <span onclick="deleteRow(this)"><i class="fa fa-trash-o" aria-hidden="true"></i></span>`
    


}


function editRow(td)
{
    var row= td.parentElement.parentElement
    var selectedRowIndex= parseInt(row.firstElementChild.innerHTML)
    console.log(row.firstElementChild.innerHTML)
    selectedRow= document.querySelector(`#table tr[id='${selectedRowIndex}']`)

    NameInput.value=selectedRow.cells[1].innerHTML
    EmailInput.value=selectedRow.cells[2].innerHTML
    RoleInput.value=selectedRow.cells[3].innerHTML
    

}

function editSelectedRow(formData)
{
    console.log(selectedRow.cells[1]);
    selectedRow.cells[1].innerHTML= formData.name
    selectedRow.cells[2].innerHTML= formData.email
    selectedRow.cells[3].innerHTML= formData.role
    selectedRow=null;

    
}

function deleteRow(td)
{
 
    var row = td.parentNode.parentNode.rowIndex;
  table.deleteRow(row);
}