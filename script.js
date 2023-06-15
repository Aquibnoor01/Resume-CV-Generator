function addNewWEField(){
    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add('weField')
    newNode.classList.add("mt-2");
    newNode.setAttribute("row", 3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we"); 
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add('eqField')
    newNode.classList.add("mt-2");
    newNode.setAttribute("row", 3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aq"); 
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);

}

// Generating CV
function GenerateCV(){
    let nameField=document.getElementById("nameField").value; 
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField; 

    // contact details
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    // email details
    document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;

    // adress details
    document.getElementById("adressT").innerHTML=document.getElementById("adressField").value;

    //link details
    document.getElementById("linkedinT").innerHTML=document.getElementById("LinkField").value;

    document.getElementById("githubT").innerHTML=document.getElementById("gitField ").value;

    // Career profile details
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    // Work experience details
    let was=document.getElementsByClassName("weField")
    let str="";
    for(let e of was)
    {
        str=str+`<li> ${e.value}</li>`
    }
    document.getElementById("weT").innerHTML=str;


    let aqs=document.getElementsByClassName("aqField")
    let str1="";
    for(let e of aqs)
    {
        str=str+`<li> ${e.value}</li>`
    }
    document.getElementById("aqT").innerHTML=str1;

    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block";
}
//Print cv
function printCV(){
    window.print();
}