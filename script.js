
const counter = document.getElementById("counter")
const increment = document.getElementById("Increment")
const decrement = document.getElementById("Decrement")

let count = 0;

increment.addEventListener("click", ()=>{
    // console.log("increment is clicked")
    count++;
    console.log(count, "count value")
    // console.log(counter.textContent);
    counter.textContent = count;
})

    decrement.addEventListener("click", ()=>{
        count--;
        counter.textContent = count;
})


// const button = document.getElementById("myButton");
//  console.log(button);

// function handleClick(){
//      console.log("someone clicked");
//      button.removeEventListener("click" , handleClick );
// }

// button.addEventListener("click" , handleClick );
// button.addEventListener("click" , handleClick );



// button.addEventListener("click" , function (){
//     console.log("someone clicked");
// });


// Event Delegation
// const list = document.getElementById("list");
// list.addEventListener("click", (event)=>{
// console.log(`event clicked: ${event.target.textContent}`)
// })

// const item1 = document.getElementById("item-1");
// const item2 = document.getElementById("item-2");
// const item3 = document.getElementById("item-3");
// const item4 = document.getElementById("item-4");
// const item5 = document.getElementById("item-5");

// console.log(item1 ,"item-1" );
// console.log(item2 ,"item-2" );
// console.log(item3 ,"item-3" );

// item1.addEventListener("click", (e)=>{
//     console.log(`Clicked: ${e.target.textContent}`)
//     })
//     item2.addEventListener("click", (e)=>{
//     console.log(`Clicked: ${e.target.textContent}`)
//     })
//     item3.addEventListener("click", (e)=>{
//     console.log(`Clicked: ${e.target.textContent}`)
//     })
//     item4.addEventListener("click", (e)=>{
//     console.log(`Clicked: ${e.target.textContent}`)
//     })
//     item5.addEventListener("click", (e)=>{
//     console.log(`Clicked: ${e.target.textContent}`)
//     })    



// const parent =document.getElementById("parent");
// const child =document.getElementById("child");

// console.log(parent ,child)
// Event Propagation
/** 
 * Capturing phase: From the root to the target elements
 * Bubbling phase:  From the target to the root elements
*/

// parent.addEventListener("click", ()=> {
//     console.log("Parent is Clicked")
//     })
   
//     child.addEventListener("click", (e)=>{
//         e.stopPropagation()
//     console.log("child clicked")
//     })




// const form = document.getElementById("myForm");
// const input = document.getElementById("name");
// console.log(form)
// submit event
// form.addEventListener("submit", (event)=>{
//    event.preventDefault()
//    console.log("form submitted")
// })
// input.addEventListener("keyup", (event)=>{
//     event.preventDefault()
//     console.log("form submitted" , event.key);
//  })



// const input = document.getElementById("textInput");

// console.log(input)

// keydown event
// input.addEventListener("Keydown" , function(event){
//     console.log(`Key Pressed: ${event.key}`);
// })


// keyup event
// input.addEventListener("keyup", (e)=>{
// console.log(`Key Released: ${e.key}`)
// })



// // console.log("This is our script")
// const buttonOne = document.getElementById("btn_one");
// const buttonTwo = document.getElementById("btn_two");
// console.log(buttonOne, buttonTwo)

// // Click Event
// buttonOne.addEventListener("click",function(){
//     console.log("You clicked me.")
// })

// Mouseover Event
// buttonTwo.addEventListener("mouseover", ()=>{
//     console.log("Mouse hovered on this button")
// })