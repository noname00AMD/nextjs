
console.log("js loaded");

// window.onload = () => {

//     ClassicEditor
//         .create(document.querySelector('#editor'))
//         .catch(error => {
//             console.error(error);
//         });

// }
window.onload = () => {
    const el = document.querySelector(".top_bar")
    var home = document.querySelectorAll(".header")[0]
    const observer = new IntersectionObserver(
        ([e]) => {
            if (e.isIntersecting) {
                home.classList.remove("pin")
            } else {
                home.classList.add("pin")
            }
        },
        { threshold: [0] }
    );
    observer.observe(el)
    var show_all_btn = document.querySelectorAll(".show_all_btn")[0]
    var hide_all_btn = document.querySelectorAll(".hide_all_btn")[0]
    var submenu = document.querySelectorAll(".submenu")[0]
    show_all_btn.addEventListener("click", function (event) {
        if (getComputedStyle(submenu).display === "none") {
            submenu.style.display = "block"
            var x = window.scrollX;
            var y = window.scrollY;
            window.onscroll = function () { window.scrollTo(x, y); };
            home.classList.add("show")

        } else {
            home.classList.remove("show")
            submenu.style.display = "none"
            window.onscroll = false
        }
    })
    hide_all_btn.addEventListener("click", function (event) {
        submenu.style.display = "none"
        window.onscroll = false
        home.classList.remove("show")
    })


    home.addEventListener("click", (e) => {
        e.preventDefault()
    })
    // submenu.addEventListener("scroll", (e) => {
    //     console.log("here");
    //     e.preventDefault()
    // })
}
