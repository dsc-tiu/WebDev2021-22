var form = document.getElementById('form');
const table= document.getElementById('table')

const NameInput= document.getElementById('name')
const EmailInput= document.getElementById('email')
const RoleInput= document.getElementById('role')
var tbody = document.getElementsByTagName('tbody')[0]
var selectedRow=null;


form.onsubmit=(e)=>
{
    e.preventDefault()
    var formData= readForm()
    if(selectedRow==null)
    insertRecord(formData)
    else
    updateRow(formData)

    form.reset()
    
}

function readForm()
{
    var formData={}
    formData["id"] = table.rows.length
    formData["name"]= NameInput.value
    formData["email"]= EmailInput.value
    formData["role"]= RoleInput.value    
    return formData
}

function insertRecord(data)
{
 var newRow= tbody.insertRow(table.length)
 newRow.id=data.id
 var cell0= newRow.insertCell(0)
 var cell1= newRow.insertCell(1)
 var cell2= newRow.insertCell(2)
 var cell3= newRow.insertCell(3)
 var cell4= newRow.insertCell(4)

 cell0.innerHTML= data.id
 cell1.innerHTML= data.name
 cell2.innerHTML=data.email
 cell3.innerHTML= data.role
 cell4.innerHTML=` <span onclick="editRow(this)" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
 
 <span onclick="deleteRow(this)"><i class="fa fa-trash"  aria-hidden="true"></i></span>`

}

function editRow(td)
{
var row= td.parentElement.parentElement
selectedRow= row
console.log(selectedRow)
NameInput.value= row.cells[1].innerHTML
EmailInput.value=row.cells[2].innerHTML
RoleInput.value= row.cells[3].innerHTML
}



function updateRow(data)
{
selectedRow.cells[1].innerHTML= data.name
selectedRow.cells[2].innerHTML= data.email
selectedRow.cells[3].innerHTML= data.role
selectedRow=null
}


function deleteRow(td)
{
var row= td.parentNode.parentNode.rowIndex;
// console.log(td.parentNode.parentNode.rowIndex)
table.deleteRow(row);
}