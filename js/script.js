var nav_list = document.getElementById("nav_list");
var navItem = nav_list.getElementsByTagName("a");
for (var item of navItem) {
    item.addEventListener("click", function() {
        // tìm class active hiện tại
        var cur = document.querySelector("#nav_list .active");
        // xóa class active hiện tại 
        cur.className = cur.className.replace("active", "");
        // thêm class active vào thẻ đc click 
        this.className += " active";
    })
}