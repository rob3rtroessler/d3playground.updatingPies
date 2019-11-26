/* * * * * * * * * * * * * *
*           MAIN           *
* * * * * * * * * * * * * */

let mySwitch = 0;

// init globalDataSets
let data = {
    setOne : [1,2],
    setTwo : [3,5],
    setThree : [6,7]
};

let myCircleOne = new pieVis('pieOneDiv', data.setOne);
let myCircleTwo = new pieVis('pieTwoDiv', data.setTwo);
let myCircleThree = new pieVis('pieThreeDiv', data.setThree);

function changeData() {
    if (mySwitch === 0){
        mySwitch += 1;

        myCircleOne.data = data.setTwo;
        myCircleOne.updateVis();
        myCircleTwo.data = data.setThree;
        myCircleTwo.updateVis();
        myCircleThree.data = data.setOne;
        myCircleThree.updateVis();
    }
    else if (mySwitch === 1){
        mySwitch += 1;
        myCircleOne.data = data.setThree;
        myCircleOne.updateVis();
        myCircleTwo.data = data.setOne;
        myCircleTwo.updateVis();
        myCircleThree.data = data.setTwo;
        myCircleThree.updateVis();
    }
    else {
        mySwitch = 0;
        myCircleOne.data = data.setOne;
        myCircleOne.updateVis();
        myCircleTwo.data = data.setTwo;
        myCircleTwo.updateVis();
        myCircleThree.data = data.setThree;
        myCircleThree.updateVis();
    }
}


