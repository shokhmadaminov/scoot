const listItem = document.querySelectorAll('.select li')
const selectText = document.querySelectorAll('.select p')
const selectIcon = document.querySelectorAll('.select-icon')


// listItem.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         selectText.classList.toggle(".select__paragraph")
//     })
// })

for (i = 0; i < listItem.length; i++) {
    let forItem = listItem[i]
    forItem.addEventListener("click", () => {
        // selectIcon.classList.toggle("")
        forItem.children[0].children[1].classList.toggle("select-icon-rotate")
        forItem.children[1].classList.toggle("select__paragraph")
    })
}