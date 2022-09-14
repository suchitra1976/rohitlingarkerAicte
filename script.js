

document.getElementById('submitButton').addEventListener('click',onSubmit);


function yesNo(bol){
    if (bol){
        return 'Yes';
    }else{
        return 'No';
    }
}
function initial(){
    if (localStorage['tableData']){
        table_content=document.getElementById('table_body');
        table_content.innerHTML=localStorage['tableData'];
        
    }else{
        localStorage.setItem('tableData','');
    }
}

function validateDob(dob){
   //validation
const dt= new Date();
let ty=dt.getFullYear();
let tm=dt.getMonth();
let td=dt.getDate();

let by=Number(dob.slice(0,4));
let bm=Number(dob.slice(5,7));
let bd=Number(dob.slice(8,11));
console.log(dob);
console.log(by+' '+bm+bd);

if (bm<tm){
    age=ty-by;
}else if (bm==tm){
    if (bd<=td){
        age=ty-by
    }else{
        age=ty-by-1
    }
}else{
    age=ty-by-1
}

if (age>=18 && age<=55){
    return true;
}else{
    return false;
}
    
    
}

function updateTable(filtered_data){
    let table_content=document.getElementById('table_body');
    table_content.innerHTML+=filtered_data;
    let prev=localStorage['tableData'];
    localStorage.setItem('tableData',prev+filtered_data)
}

function onSubmit(event){
event.preventDefault();
let nam=document.getElementById('name').value.toString() ;
let email=document.getElementById('email').value.toString();
let password=document.getElementById('password').value.toString();
let dob=document.getElementById('dob').value.toString();




if (validateDob(dob)){


let accepted_terms=yesNo(document.getElementsByName('accepted_terms')[0].checked);
let combined=[nam,email,password,dob,accepted_terms]
let filtered_data='<tr><td>'+combined.join('</td><td>')+'</td></tr>'
console.log(filtered_data);
updateTable(filtered_data);
}
}

window.initial();