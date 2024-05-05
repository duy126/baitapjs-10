function renderdsnv(){
    var contentHTML = "";
    for ( var i = 0; i < dsnv.length;i++){
        var nv = dsnv[i]
        contentHTML += `
        <tr> <td>${nv.taiKhoan}</td>
        <td>${nv.hoVaTen}</td>
        <td>$${nv.email}</td>
        <td>${nv.day}</td>
        <td>${nv.chucVu()}</td>
        <td>${nv.tongLuong()}</td>
        <td>${nv.loaiNhanVien()}</td>
        <td><button onclick="xoaNv(${nv.taiKhoan})" class="btn btn-danger">xóa</button>
        <button onclick="suaNv(${nv.taiKhoan})" data-toggle="modal" data-target="#myModal" class="btn btn-primary">sửa</button></td></tr>
        `
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
function layThongTinTuForm(){
    var taiKhoan =  document.getElementById("tknv").value;
    var  hoVaTen =  document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var  password= document.getElementById("password").value;
    var  day= document.getElementById("datepicker").value;
    var  luongCB= document.getElementById("luongCB").value*1;
    var giolam= document.getElementById("gioLam").value*1;
    var idChucVu= document.getElementById("chucvu").value*1;
    var sv = new NhanVien(taiKhoan,hoVaTen,email,password,day,luongCB,giolam,idChucVu);
   console.log("🐧🐧🐧 ~ nhanVien ~ dsnv:", dsnv)
return sv;
}
function upLocalStorage(){
    var dataJSON = JSON.stringify(dsnv);
    localStorage.setItem("dsnv",dataJSON)
}
function renderJSONtoArray(){
    for(var i = 0; i< dsnv.length;i++){
        var newDSNV = dsnv[i];
        var nv = new NhanVien(newDSNV.taiKhoan,newDSNV.hoVaTen,newDSNV.email,newDSNV.password,newDSNV.day,newDSNV.luongCB,newDSNV.gioLam,newDSNV.idChucVu);
        dsnv[i] = nv;
    }
}
function validation(nv){
    var istrue = kiemTraRong(nv.taiKhoan,"tbTKNV") && kiemTraSo(nv.taiKhoan,"tbTKNV") && kiemTraLenght(nv.taiKhoan,"tbTKNV",4,6)
    istrue &= kiemTraRong(nv.hoVaTen,"tbTen") && kiemTraTen(nv.hoVaTen,"tbTen");
    istrue &= kiemTraRong(nv.email,"tbEmail") && kiemTraEmail(nv.email,"tbEmail");
    istrue &= kiemTraRong(nv.password,"tbMatKhau") && kiemTraLenght(nv.password,"tbMatKhau",6,10) && kiemTraMatKhau(nv.password,"tbMatKhau")
    istrue &= kiemTraRong(nv.day,"tbNgay");
    istrue &= kiemTraRongChoSo(nv.luongCB,"tbLuongCB") && kiemTraLuong(nv.luongCB,"tbLuongCB",1000000,20000000)
    istrue &= kiemTraRongChoSo(nv.gioLam,"tbGiolam") && kiemTraGioLam(nv.gioLam,"tbGiolam",80,200)
    istrue &= kiemTraRongChoChucVu(nv.idChucVu,"tbChucVu");
    return istrue;
}