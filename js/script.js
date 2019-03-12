const addDivsOnResize = function () {
    
    let personBoxesQuantity = document.getElementsByClassName('person-box').length; //return the quantity of child elements in person-box
    
    //it should modufy the page only if width is greater than 960
    if (window.innerWidth > 960 && personBoxesQuantity < 15) {
        
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'person-box empty-div');
        let photosContainer = document.getElementById('apen');

        //adds divs between first and second row
        let firstInSecondRow = document.getElementById('first-in-second-row');
        for (let i = 0; i <= 2; i++) {
            photosContainer.insertBefore(newDiv.cloneNode(true), firstInSecondRow);
        }

        //adds divs between second and third row
        let firstInThirdRow = document.getElementById('first-in-third-row');
        for (let i = 0; i <= 3; i++) {
            photosContainer.insertBefore(newDiv.cloneNode(true), firstInThirdRow);
        }

        let personBoxes = document.getElementsByClassName('person-box');

        for (let i = 1; i <= 3; i++) {
            let newRow = document.createElement('div');
            newRow.setAttribute('class', 'row');
            photosContainer.appendChild(newRow);
            for(let j = 1; j <=5; j++) {
                newRow.appendChild(personBoxes[0]);
            };
        };
    }
};

const modifyDivsQuantity = function (divsCollection, divsMainParent, parentMethod) {
    let divsQuantity = divsCollection.length;
    for (let i = 0; i < divsQuantity; i++) {
        if(parentMethod === 'appendChild') { 
            divsMainParent.appendChild(divsCollection[0]);
        } else if (parentMethod === 'removeChild') {
            divsMainParent.removeChild(divsCollection[0]);
        } else {
            console.log('Method error');
        };
    };
}

const removeDivsOnResize = function () {

    let personBoxesQuantity = document.getElementsByClassName('person-box').length; //return the quantity of child elements in person-box
    //it should modify the page only if width is less than 961
    if (window.innerWidth < 961 && personBoxesQuantity > 8) {
        let photosContainer = document.getElementById('apen'); //parent element

        let divsLevelUp = document.getElementsByClassName('person-box'); //finds and returns all person-boxes (even empty ones)
        let rowsToRemove = document.getElementsByClassName('row'); //finds and returns all rows containers
        let divsToRemove = document.getElementsByClassName('empty-div'); //finds and returns all empty-divs
        
        modifyDivsQuantity(divsLevelUp, photosContainer, 'appendChild');
        modifyDivsQuantity(rowsToRemove, photosContainer, 'removeChild');
        modifyDivsQuantity(divsToRemove, photosContainer, 'removeChild');
    }
};

const setPersonBoxHeight = function() {
    let personBoxes = document.getElementsByClassName('person-box');
    if (window.innerWidth > 960){
        
        for(let i=0; i<personBoxes.length; i++){
            personBoxes[i].style.height = `${personBoxes[i].offsetWidth}px`
        }
        
    } else {
        for (let i = 0; i < personBoxes.length; i++) {
            personBoxes[i].removeAttribute('style');
        }
    }
}