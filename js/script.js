const addEmptyDivsBefore = function(elementClasses, beforeElementID, parentElement, quantityOfElements) {
    //this function is adding empty divs to the HTML document
    //elementClasses - string of desired el. classes; beforeElementID - an ID of element before which all new divs will be putted; parentElement - main container; quantityOfElements - specifies how many divs are to put
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', elementClasses);

    beforeEl = document.getElementById(beforeElementID);
    for (let i = 0; i < quantityOfElements; i++) {
        parentElement.insertBefore(newDiv.cloneNode(true), beforeEl);
    }
}

const addDivsOnResize = function () {
    //this function adds empty divs 
    //function is called on load and on resize
    let personBoxesQuantity = document.getElementsByClassName('person-box').length; //return the quantity of child elements in person-box
    
    //it should modify the page only if width is greater than 960 and there's not enough person boxes
    if (window.innerWidth > 960 && personBoxesQuantity < 15) {
        
        let photosContainer = document.getElementById('apen');

        //holds info where to put new empy divs and how many
        const emptyDivsSpec = [
            ['first-in-second-row', 3],
            ['first-in-third-row', 4]
        ]

        //puts empy divs
        emptyDivsSpec.forEach(function(element){
            addEmptyDivsBefore('person-box empty-div', element[0], photosContainer, element[1]);
        });

        let personBoxes = document.getElementsByClassName('person-box');

        //loop below is wrapping div boxes into "row" elements
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
    //this function is appending or removing element children - depends on value of "parentMethod" parameter
    //divsCollection - it's a collection of elements to append or remove; divsMainParent - it's targeted parent element; parentMethod - it's a string representing parent method raise
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
    //this function remove extra empy divs that are used when window width is over 960, it also unwraping person-boxes from row containers
    //function is called on load and on resize
    let personBoxesQuantity = document.getElementsByClassName('person-box').length; //return the quantity of child elements in person-box
    if (window.innerWidth < 961 && personBoxesQuantity > 8) {
        let photosContainer = document.getElementById('apen'); //parent element

        let divsLevelUp = document.getElementsByClassName('person-box'); //finds and returns all person-boxes (even empty ones)
        let rowsToRemove = document.getElementsByClassName('row'); //finds and returns all rows containers
        let divsToRemove = document.getElementsByClassName('empty-div'); //finds and returns all empty-divs
        
        modifyDivsQuantity(divsLevelUp, photosContainer, 'appendChild'); //unwraping divs with photos from it's row wrapper
        modifyDivsQuantity(rowsToRemove, photosContainer, 'removeChild');//removing empty row wrappers
        modifyDivsQuantity(divsToRemove, photosContainer, 'removeChild');//removing empty divs
    }
};

const setPersonBoxHeight = function() {
    //this functions keep boxes at 1:1 aspect ratio, below 961 window width it's not necessary because it's solved in css file
    //function is called on load and on resize
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