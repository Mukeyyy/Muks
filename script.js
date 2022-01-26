function validationform(){
    var a = document.form["myform"]["eamil"].value;
    var b = document.form["myform"]["password"].value;
    if (a =="" || b == "") {
        alert("All space must be filled");
        return false;
    }
    else{
        alert("login successful");
        return false;
    }
}