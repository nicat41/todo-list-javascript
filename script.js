
const items = [
{text: "task 1", status: "complated"},
{text: "task 2", status: "pending"},
{text: "task 3", status: "complated"},


]



let btnSave = document.querySelector("#btnSave")


let createUIElement = () => {
    let html = "";
let todoContent = document.querySelector("#todoContent")

    for(let index in items) {
        html += `
        <div class="flex items-center justify-between border border-[#E1E1E1] pl-[10px] pr-[8px] pt-[12px] pb-[8px] font-body">
        <div class="flex items-center space-x-[10px]">
            <input onchange="changeStatus(${index}, event)" type="checkbox" ${items[index].status === "complated" ? "checked" : ''} class="type-[#B8B8B8] focus:outline-none"/>
            <span class=" ${items[index].status === 'complated' ? 'line-through' : ''} ">${items[index].text}</span>
        </div>
        <div class="flex items-center space-x-[8px] ">
            <button class=" size-[20px] bg-[#0085FF] rounded-[5px] initial-flex text-white text-[10px] ">
                <i class="fa-solid fa-pencil "></i>
            </button>
            <button class=" size-[20px] bg-[#FF0000] rounded-[5px] initial-flex text-white text-[10px] ">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </div>
        `
    }
    todoContent.innerHTML = html;

}
createUIElement();


saveElement = (e) => {
let taskInput = document.querySelector("#taskinput")
let value = taskInput.value;
taskInput.value = ""
items.push({
    text: value,
    status: "pending",
})
createUIElement();

}


btnSave.addEventListener("click", saveElement)