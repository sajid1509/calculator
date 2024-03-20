function addin()
{
    var a = parseInt(document.getElementById("inpu1").value);
    var b = parseInt(document.getElementById("inpu2").value);
    document.getElementById("res").textContent = a+b;
    document.getElementById("kk").textContent = "+";
}
function subs()
{
    var a = parseInt(document.getElementById("inpu1").value);
    var b = parseInt(document.getElementById("inpu2").value);
    document.getElementById("res").textContent = a-b;
    document.getElementById("kk").textContent = "-";
}
function multi()
{
    var a = parseInt(document.getElementById("inpu1").value);
    var b = parseInt(document.getElementById("inpu2").value);
    document.getElementById("res").textContent = a*b;
    document.getElementById("kk").textContent = "*";
}
function divi()
{
    var a = parseInt(document.getElementById("inpu1").value);
    var b = parseInt(document.getElementById("inpu2").value);
    document.getElementById("res").textContent = a/b;
    document.getElementById("kk").textContent = "/";
}