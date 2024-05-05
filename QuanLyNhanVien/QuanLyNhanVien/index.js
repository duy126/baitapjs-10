// start resolve
var dsnv = []
var dataJSON = localStorage.getItem("dsnv");
if(dataJSON !== null){
    dsnv = localStorage.getItem("dsnv");
    dsnv = JSON.parse(dsnv);
    renderJSONtoArray();
    renderdsnv();
}

function themNhanVien(){
    var nv = layThongTinTuForm()
    // validation
    var istrue = validation(nv);

    console.log("🐧🐧🐧 ~ themNhanVien ~ istrue:", istrue)
    if(istrue == true){
        dsnv.push(nv);
        renderdsnv();
        upLocalStorage();
    }
}
function xoaNv(idtaiKhoan){
   var id = dsnv.findIndex(function(item){
    return item.taiKhoan == idtaiKhoan;
   });
   console.log("🐧🐧🐧 ~ id ~ id:", id)
   dsnv.splice(id,1)
   renderdsnv();
   upLocalStorage();
}
function suaNv(idtaiKhoan){
    var id = dsnv.findIndex(function(item){
        return item.taiKhoan == idtaiKhoan;
       });
       document.getElementById("tknv").value = dsnv[id].taiKhoan;
       document.getElementById("name").value = dsnv[id].hoVaTen;
       document.getElementById("email").value = dsnv[id].email;
       document.getElementById("datepicker").value = dsnv[id].day;
       document.getElementById("password").value = dsnv[id].password;
       document.getElementById("luongCB").value = dsnv[id].luongCB;
       document.getElementById("chucvu").value = dsnv[id].idChucVu;
       document.getElementById("gioLam").value = dsnv[id].gioLam;
       document.getElementById("tknv").readOnly = true;
       var nv = layThongTinTuForm()
       validation(nv)
       document.getElementById("btnCapNhat").onclick = function(){
        var nv = layThongTinTuForm();
        var isTrue = validation(nv);
        if(isTrue){
            dsnv[id] = nv;
            renderdsnv()
            upLocalStorage()
            document.getElementById("tknv").readOnly = false;
        }
       
       }
}

    

