var button = document.getElementById("form_button");
var wind = document.getElementById("modal_w1");
var state = {
    page: wind.classList.item(1)
};

document.getElementsByName("surname")[0].value = localStorage.getItem("surname");
document.getElementsByName("name")[0].value = localStorage.getItem("name");
document.getElementsByName("F_name")[0].value = localStorage.getItem("F_name");
document.getElementsByName("mail")[0].value = localStorage.getItem("mail");
document.getElementsByName("tel")[0].value = localStorage.getItem("tel");
document.getElementsByName("organ")[0].value = localStorage.getItem("organ");
document.getElementsByName("message")[0].value = localStorage.getItem("message");
/*Заполняем форму при окрытии страницы*/


button.addEventListener("click", function (f) {
    wind.classList.add("active");
    state = {
        page: wind.classList.item(1)
    };
    history.pushState("active", "", "#" + state.page)
    /*Все брузеры кроме safari игонорируют второй параметр */

})/*При нажатии включаем отображение формы*/

window.addEventListener('popstate', function (e) {
    if (history.state == "active") {
        wind.classList.add("active");
    }
    else {
        wind.classList.remove("active");
    }
    state = {
        page: wind.classList.item(1)
    };
    /*Открыть/закрыть форму (от состояния)*/
})



addEventListener('input', function () {
    if (document.getElementsByName("surname")[0].value)
        localStorage.setItem("surname", document.getElementsByName("surname")[0].value);
    if (document.getElementsByName("name")[0].value)
        localStorage.setItem("name", document.getElementsByName("name")[0].value);
    if (document.getElementsByName("F_name")[0].value)
        localStorage.setItem("F_name", document.getElementsByName("F_name")[0].value);
    if (document.getElementsByName("mail")[0].value)
        localStorage.setItem("mail", document.getElementsByName("mail")[0].value);
    if (document.getElementsByName("tel")[0].value)
        localStorage.setItem("tel", document.getElementsByName("tel")[0].value);
    if (document.getElementsByName("organ")[0].value)
        localStorage.setItem("organ", document.getElementsByName("organ")[0].value);
    if (document.getElementsByName("message")[0].value)
        localStorage.setItem("message", document.getElementsByName("message")[0].value);
})
/*Если форма не пуста, обновляем локальные данные*/

addEventListener('submit',function()
{
    localStorage.clear();
})

if (history.state == "active") {
    wind.classList.add("active");
}
state = {
    page: wind.classList.item(1)
};
/*если с открытой формой перешли на сторонний сайт
а потом вернулись*/


