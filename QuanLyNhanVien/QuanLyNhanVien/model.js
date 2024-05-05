function NhanVien(taiKhoan,hoVaTen,email,password,day,luongCB,gioLam,idChucVu){
    this.taiKhoan = taiKhoan;
    this.hoVaTen = hoVaTen;
    this.email = email;
    this.password = password;
    this.day = day;
    this.luongCB = luongCB;
    this.gioLam = gioLam;
    this.idChucVu = idChucVu;
    this.chucVu = function(){
        var chucVu;
        switch(this.idChucVu){
            case 1: chucVu = "sếp"; break;
            case 2: chucVu = "trưởng phòng";break;
            case 3: chucVu = "Nhân Viên";break;
        }
        return chucVu;
    },
    this.tongLuong = function(){
        var tongLuong= 0;
        if(this.idChucVu == 3){
            tongLuong = this.luongCB*3;
        } else if(idChucVu == 2){
            tongLuong = this.luongCB*2;
        } else{
            tongLuong = this.luongCB;
        }
        return tongLuong;
    };
    this.loaiNhanVien = function(){
        var loaiNhanVien;
        if(this.giolam>=192){
          loaiNhanVien = "Nhân viên xuất sắc"
        } else if(this.giolam>=176){
           loaiNhanVien = "Nhân viên Giỏi"
        }  else if(this.giolam>=160){
            loaiNhanVien = "Nhân viên Khá"
         } else {
            loaiNhanVien = "Nhân viên trung bình"
         }
        return loaiNhanVien;
    };
}