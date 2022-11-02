//document.getElementById("count-el").innerText = 10
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)
console.log(saveEl)
let count = 0
console.log(count)

function increment() {
    countEl.textContent = count
    count += 1
    console.log(count)
}
increment()
function incrementbtn() {
    console.log("The button was clicked")
}
function save() {
    let countStr = count + "-"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}
save()