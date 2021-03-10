
<script>
//alert("Hello World!");
document.write("Hello World Section!");
console.log("üzenet - debug");

function szamolas() {
    var valtA = document.getElementById("a").value;
    var valtB = document.getElementById("b").value;
    var osszeg = Number(valtA) + Number(valtB);
    document.getElementById("szoveg").innerHTML = osszeg;
}

</script>

