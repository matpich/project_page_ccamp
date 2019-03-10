const addDivsOnResize = function () {
    
    let personBoxesQuantity = document.getElementsByClassName('person-box').length; //return the quantity of child elements in person-box
    
    //it should modufy the page only if width is greater than 960
    if (screen.width > 960 && personBoxesQuantity < 15) {
        
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
    }
};

const removeDivsOnResize = function () {

    let personBoxesQuantity = document.getElementsByClassName('person-box').length; //return the quantity of child elements in person-box
    console.log(personBoxesQuantity);
    //it should modufy the page only if width is greater than 960
    if (screen.width < 961 && personBoxesQuantity > 8) {

        let divsToRemove = document.getElementsByClassName('empty-div');
        let photosContainer = document.getElementById('apen');

        let emptyDivs = divsToRemove.length //it must be set before loop not in loop declaration because on every loop iteration length will change
        for(let i=0; i<emptyDivs; i++){
            console.log(divsToRemove[0]);
            photosContainer.removeChild(divsToRemove[0]);
        }

    }
};