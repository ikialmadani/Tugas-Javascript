function tambah(opr){
    //tangkap id form
    let frm = document.getElementById('calcForm');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    let tampil = frm.hasil,
    total;
    if (isNaN(a1) || isNaN(a2)) {
        alert('input wajib angka!');
        return;
    }
    switch (opr) {
        case '+': total = a1 + a2; break;
        case '-': total = a1 - a2; break;
        case '*': total = a1 * a2; break;
        case '/': total = a1 / a2; break;
        case '^': total = Math.pow(a1, a2); break;
    }
    console.log(total)
    tampil.value = total;
}