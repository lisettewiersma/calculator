function insert(num) {
    document.form.textview.value = document.form.textview.value + num
}

function equal(){
    var exp =  document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }

}

function clean() {
    document.form.textview.value =  ""
}

function c() {
    var inputold =  document.form.textview.value;
    var inputnew = inputold.substr(0, inputold.length-1);
    document.form.textview.value = inputnew;
}