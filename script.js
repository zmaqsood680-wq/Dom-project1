// const darggable_list =document.getElementById("draggable_list");
// const check =document.getElementById("check");

// const richestPeople = [
//   "Elon Musk",
//   "Larry Page",
//   "Sergey Brin",
//   "Jeff Bezos",
//   "Mark Zuckerberg",
//   "Larry Ellison",
//   "Bernard Arnault",
//   "Jensen Huang",
//   "Warren Buffett",
//   "Amancio Ortega"
// ];

// const listItems = [];
// let dragStartIndex;

// createList();


// function createList() {
//     [...richestPeople]
//     .map(a=>({value:a, sort:Math.random()}))
//     .sort((a,b)=>a.sort - b.sort)
//     .map((a)=> a.value)
//     .forEach((person, index)=>{
//         console.log(person)

//         const listItem = document.createElement("li");
//         listItem.setAttribute("data-index", index)
//         listItem.innerHTML = ` <span class="number>${index +1}</span>
//         <div class="draggable" draggable="true">
//         <p class"person-name">${person}</p>
//         <i class="fa-solid fa-grip-lines"></i>
//         </div>
//         `;
//         listItems.push(listItem);
//         draggable_list.appendChild(listItem);
//     })

// }









const draggable_list = document.getElementById("draggable_list"); 
const  check = document.getElementById("check");

const richestPeople=[    
  "Elon Musk",
  "Larry Page",
  "Sergey Brin",
  "Jeff Bezos",
  "Mark Zuckerberg",
  "Larry Ellison",
  "Jensen Huang",
  "Bernard Arnault",
  "Rob Walton",
  "Warren Buffett"
];

const listItems =[];
let dragStartIndex;



createlist();
function createlist(){
    [...richestPeople]
    .map(a=> ({value:a, sort:Math.random()}))
  .sort((a,b)=> a.sort-b.sort)
  .map(a=>a.value)
    .forEach(( person,index) => {
        // console.log(person);
    const listItem = document.createElement("li");
    listItem.classList.add('over')
    
    listItem.setAttribute( "data-index",index)

listItem.innerHTML=` <span class="number">${index+1}</span> 
<div class="draggable" draggable="true"> 
<p class="person-name">${person}</p>
<i class="fa-solid fa-grip-lines"></i>
</div>
`;
listItems.push(listItem)
draggable_list.appendChild(listItem);

});

addEventListener()
}
function dragStart(){
  dragStartIndex =+this.closest("li").getAttribute("data-index");
}
function dragEnter(){
  this.classList.add("over");
}
function dragLeave(){
  this.classList.remove("over");
}
function dragOver(e){
  e.preventDefault();

}
function dragDrop(){
  const dragEndIndex = +this.getAttribute("data-index");
  sawpItems(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
}
function sawpItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}
function checkOrder(){
  listItems.forEach((listItems, index) =>{
    const personName =listItems.querySelector(".draggable").innerText.trim();
    if(personName!==richestPeople[index]){
      listItems.classList.add('wrong')
    }
    else{
      listItems.classList.remove('wrong')
      listItems.classList.add('right')
    }

  })
}

function addEventListener(){
  const draggables =document.querySelectorAll(".draggable");
  const dragListItems =document.querySelectorAll(".draggable_list li");



    draggables.forEach((draggable) =>{
      draggable.addEventListener('dragstart',dragStart);
    });

    dragListItems.forEach((item) =>{
      item.addEventListener("dragover", dragOver);
      item.addEventListener("drop", dragDrop);
      item.addEventListener("dragenter", dragEnter);
      item.addEventListener("dragleave", dragLeave);

    });
}
check.addEventListener("click", checkOrder)