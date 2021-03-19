var n=1;
var x=0;

//for condensed code use
var n_string=["fname","sname","date","Vaxadmin","pvax"];
var storageOb=[];

function condensed_formsub(){
	var AddRown=document.getElementById('tbl');
	var NewRow=AddRown.insertRow(1);
	var temp=[];
	for (let i=0;i<n_string.length;i++){
		temp[i]=document.getElementById(n_string[i]).value;
		NewRow.insertCell(i).innerHTML=temp[i];
	}
	storageOb[x]=temp;
	n++;
	x++;
	return false;
}
