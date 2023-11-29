function addrowFamily(){


    var MyTable=document.getElementById("FamilyDetails");
    var tableHeight=MyTable.rows.length;
    var tablewidth=MyTable.rows[0].cells.length;
    // alert(tableHeight)
    // alert(tablewidth)
var newrow=MyTable.insertRow(tableHeight)
// var w=MyTable.rows[0].cells[0].innerHTML

// alert(w)

var fmemberCell=newrow.insertCell(0);
fmemberCell.innerHTML=`<select id="fmemberSelect" style="font-size:10px">
    <option selected disabled>Select</option>
    <option style='width:100px;font-size:10px;margin:1;padding;2px;height:20px'>Father</option>
    <option style='width:100px;font-size:10px;margin:1;padding;2px;height:20px'>Mother</option>
    <option style='width:100px;font-size:10px;margin:1;padding;2px;height:20px'>Spouse</option>
    <option style='width:100px;font-size:10px;margin:1;padding;2px;height:20px'>Child</option>   
</select>`

var fName=newrow.insertCell(1);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(2);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(3);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(4);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(5);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(6);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(7);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px'></input>"

var fName=newrow.insertCell(8);
fName.innerHTML="<button  onClick='removerow(this)' style='width:30px;font-size:10px;margin:0;padding:1px;height:20px;color:red;'>X</button>"

}
//===================================================================================

function addrowedu(){


    var MyTable=document.getElementById("EducationalDetails");
    var tableHeight=MyTable.rows.length;
    var tablewidth=MyTable.rows[0].cells.length;
    // alert(tableHeight)
    // alert(tablewidth)
var newrow=MyTable.insertRow(tableHeight)
// var w=MyTable.rows[0].cells[0].innerHTML

// alert(w)

var fmemberCell=newrow.insertCell(0);
fmemberCell.innerHTML=`<select id="fmemberSelect" style="font-size:10px">
    <option selected disabled>Select</option>
    <option style='width:100px;font-size:10px;margin:1;padding;2px;height:20px'>UG</option>
    <option style='width:100px;font-size:10px;margin:1;padding;2px;height:20px'>PG</option>
    <option style='width:100px;font-size:10px;margin:1;padding;2px;height:20px'>Deloma</option>
    <option style='width:100px;font-size:10px;margin:1;padding;2px;height:20px'>HSC</option>
    <option style='width:100px;font-size:10px;margin:1;padding;2px;height:20px'>SSLC</option>   
</select>`

var fName=newrow.insertCell(1);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(2);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(3);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(4);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(5);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(6);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(7);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px'></input>"

var fName=newrow.insertCell(8);
fName.innerHTML="<button  onClick='removerow(this)' style='width:30px;font-size:10px;margin:0;padding:1px;height:20px;color:red;'>X</button>"

}
//====================================================================================
function addroworkWexp(){


    var MyTable=document.getElementById("WorkExperience");
    var tableHeight=MyTable.rows.length;
    var tablewidth=MyTable.rows[0].cells.length;
    // alert(tableHeight)
    // alert(tablewidth)
var newrow=MyTable.insertRow(tableHeight)
// var w=MyTable.rows[0].cells[0].innerHTML

// alert(w)

var fmemberCell=newrow.insertCell(0);
fmemberCell.innerHTML="<input type='date' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(1);
fName.innerHTML="<input type='date' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(2);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(3);
fName.innerHTML="<input type='number' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(4);
fName.innerHTML="<textarea style='width:200px;font-size:10px;margin:0;padding;1px;height:20px''></textarea>"

var fName=newrow.insertCell(5);
fName.innerHTML="<input type='text' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px''></input>"

var fName=newrow.insertCell(6);
fName.innerHTML="<textarea style='width:200px;font-size:10px;margin:0;padding;1px;height:20px''></textarea>"

var fName=newrow.insertCell(7);
fName.innerHTML="<input type='number' style='width:100px;font-size:10px;margin:0;padding;1px;height:20px'></input>"

var fName=newrow.insertCell(8);
fName.innerHTML="<button  onClick='removerow(this)' style='width:30px;font-size:10px;margin:0;padding:1px;height:20px;color:red;'>X</button>"

}
//=================================================================================
function removerow(obj){
    var row = obj.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
//============================================================
function readWs(){
    const xlsx = require("xlsx");
    // Load the Excel file
    const workbook = xlsx.readFile("example.xlsx");    
    // Get the first worksheet in the workbook
    const sheet = workbook.Sheets[workbook.SheetNames[0]];    
    // Convert the worksheet data to a JSON object
    const data = xlsx.utils.sheet_to_json(sheet);    
    // Log the JSON data
    console.log(data);
    
}