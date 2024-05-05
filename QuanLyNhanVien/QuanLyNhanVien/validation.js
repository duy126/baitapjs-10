// kiểm tra rỗng
function kiemTraRong(value,idErr){
    if(value.length !== 0){
        document.getElementById(idErr).innerText = "";
         return true
    }
    document.getElementById(idErr).innerText = "ô này không được không được để trống!"
    document.getElementById(idErr).style.display = "block"
    return false
}
function kiemTraRongChoSo(value,idErr){
    if(value !== 0){
        document.getElementById(idErr).innerText = "";
         return true
    }
    document.getElementById(idErr).innerText = "ô này không được không được để trống!"
    document.getElementById(idErr).style.display = "block"
    return false
}
function kiemTraRongChoChucVu(value,idErr){
    if(value !== 0){
        document.getElementById(idErr).innerText = "";
         return true
    }
    document.getElementById(idErr).innerText = "ô này không được không được để trống!"
    document.getElementById(idErr).style.display = "block"
    return false
}
// kiểm tra length
function kiemTraLenght(value,idErr,min,max){
    if(min <= value.length && value.length <= max){
         document.getElementById(idErr).innerText = "";
         return true
    }
    document.getElementById(idErr).innerText = `độ dài thông tin phải từ ${min} đến ${max} kí tự`
    document.getElementById(idErr).style.display = "block"
    return false
}
function kiemTraSo(value,idErr){
    var number = Number(value);
    
    if(number == number){    
      
        document.getElementById(idErr).innerText = "";
        return true;
    }
        document.getElementById(idErr).innerText = `tài khoản phải là số`
        document.getElementById(idErr).style.display = "block"
        return false
    
}
function kiemTraEmail(value,idErr){
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(value)){
        document.getElementById(idErr).innerText = "";
        return true;
    }
    document.getElementById(idErr).innerText = `email không đúng định dạng`
        document.getElementById(idErr).style.display = "block"
        return false
}
function kiemTraMatKhau(value,idErr){
    let hasNumber = /\d/.test(value);
    let hasUpperCase = /[A-Z]/.test(value);
    let hasSpecialChar = /[!@#$%^&*()_+{}|:"<>?]/.test(value);
    if(hasNumber && hasUpperCase && hasSpecialChar){
        document.getElementById(idErr).innerText = "";
        return true;
    }
    document.getElementById(idErr).innerText = `mật khẩu ít nhất 1 số, 1 kí tự in hoa, 1 kí tự đặt biệt`
    document.getElementById(idErr).style.display = "block"
    return false
}
function kiemTraLuong(value, idErr,min,max){
    if(min <= value && value <= max){
        document.getElementById(idErr).innerText = "";
        return true;
    }
    document.getElementById(idErr).innerText = `lương phải nằm trong khoảng từ ${min} đến ${max} đồng`
    document.getElementById(idErr).style.display = "block"
    return false
}
function kiemTraGioLam(value,idErr,min,max){
    if(min <= value && value <= max){
        document.getElementById(idErr).innerText = "";
        return true;
    }
    document.getElementById(idErr).innerText = `giờ làm nằm trong khoảng từ ${min} đến ${max} giờ`
    document.getElementById(idErr).style.display = "block"
    return false
}
function kiemTraTen(value,idErr){
  if(/[a-zA-Z]/.test(value)&& !/[^a-zA-Z0-9]/.test(value)){
    document.getElementById(idErr).innerText = "";
    return true;
  }
  document.getElementById(idErr).innerText = `tên chỉ bao gồm chữ cái`
  document.getElementById(idErr).style.display = "block"
  return false
}

