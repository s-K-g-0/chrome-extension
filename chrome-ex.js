let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveInput = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

saveInput.addEventListener("click", function save() {
    console.log("Button Clicked");
    const newLead = inputEl.value;
    let isDuplicate = false;

    for (let j = 0; j < myLeads.length; j++) {
        if (newLead === myLeads[j]) {
            alert("THIS ADDRESS IS ALREADY SAVED");
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        myLeads.push(newLead);
        alert(newLead)
    }

    console.log(myLeads);
    inputEl.value = ''; // Clear the input field after saving
});

const myLeadsBtn = document.getElementById("input-btn2");
let listItems = ""

myLeadsBtn.addEventListener("click", function showLeads() {
    for (let i = 0; i < myLeads.length; i++) {
        console.log(myLeads[i]);
        //        listItems += "<li>" + "<a href=https://"+myLeads[i]+ " target='_blank'>" + myLeads[i] + "</a>" + "</li>"
        listItems += `<li>
                        <a href='https://${myLeads[i]}' target='_blank'>${myLeads[i]}
                        </a>
                      </li>`
        console.log(listItems)
    }
    ulEl.innerHTML = listItems
    listItems = ""
});
