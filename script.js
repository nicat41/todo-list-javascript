
const items = [
{text: "task 1", status: "complated"},
{text: "task 2", status: "pending"},
{text: "task 3", status: "complated"},


]

let editIndex = "";

let taskInput = document.querySelector("#taskInput")
let btnSave = document.querySelector("#btnSave")
let jsStatus = document.querySelectorAll(".js-status")


let createUIElement = (status = "all") => {
    let html = "";
let todoContent = document.querySelector("#todoContent")
    for(let index in items) {

        let htmlElement = `
        <div class="flex items-center justify-between border border-[#E1E1E1] pl-[10px] pr-[8px] pt-[12px] pb-[8px] font-body">
        <div class="flex items-center space-x-[10px]">
            <input onchange="changeStatus(${index}, event)" type="checkbox" ${items[index].status === "complated" ? "checked" : ''} class="type-[#B8B8B8] focus:outline-none"/>
            <span class=" ${items[index].status === 'complated' ? 'line-through' : ''} ">${items[index].text}</span>
        </div>
        <div class="flex items-center space-x-[8px] ">
            <button onclick="editItem(${index})" class=" size-[20px] bg-[#0085FF] rounded-[5px] initial-flex text-white text-[10px] ">
                <i class="fa-solid fa-pencil "></i>
            </button>
            <button onclick="deleteItem(${index})" class=" size-[20px] bg-[#FF0000] rounded-[5px] initial-flex text-white text-[10px] ">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </div>
        `;

        if (status !== "all") {
            if(status === items[index].status) {
                html += htmlElement;  
            }
        }
        else {
            html += htmlElement;

        }
    }
    todoContent.innerHTML = html;

}
createUIElement();


saveElement = () => {
let value = taskInput.value;
taskInput.value = "";
console.log(editIndex)

if (editIndex.toString()) {
items[editIndex].text = value;
editIndex = "";

}
else {
    items.push({
        text: value,
        status: "pending",
    })
}

createUIElement();

}

const changeStatus = (index, event) => {
    let status = "pending"
    if(event.target.checked) {
        status = "complated"
    }
    items[index].status = status;
    createUIElement()

}

const deleteItem = (index) => {
    const value = confirm("bunu silmek isdediyinize eminsiniz mi ?")
    if(value) {
        items.splice(index, 1)
    }
createUIElement()
}

const editItem = (index) => {
editIndex = index;
taskInput.value = items[index].text;

}

btnSave.addEventListener("click", saveElement)

for(let button of jsStatus) {
    button.addEventListener("click", function (e) {
        const status = e.target.getAttribute("data-status")
        createUIElement(status)

    for(let btn of jsStatus) {
        btn.classList.remove("bg-gray-300")
    }
    e.target.classList.add("bg-gray-300")
    })
}