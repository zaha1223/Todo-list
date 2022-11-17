const elForm = document.querySelector(".text-form");
const elInpt = document.querySelector(".inpt");
const elBox = document.querySelector(".list-wrapper");


let elUl = document.createElement('ul');

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let elLi = document.createElement('li');
    let elP = document.createElement('p');

    const text = elInpt.value;
    elP.textContent = text;
    if(text == ""){
        elInpt.style.backgroundColor = "red";
    }else{
        elLi.append(elP);
        elUl.prepend(elLi);
        elBox.prepend(elUl);
    }
 
    elInpt.value = null;
    function deleteText(){
        let delBtn = document.createElement('button');
        delBtn.className = "del-btn";
        delBtn.textContent = "X";
        elLi.appendChild(delBtn);
        delBtn.addEventListener("click", () => {
            elLi.remove();
        })
    }
    deleteText();
});

