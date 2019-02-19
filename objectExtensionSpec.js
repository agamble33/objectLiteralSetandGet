define(['bytepushers'], function (BytePushers) {
    describe("Object extension tests:", function () {


//TODO: 1. write getter and setter methods , 2  write test to get out method name and by property name, 3. set to new value right expects for all sets/
// TODO: Create the object literal
// TODO: Create a object literal and a nested object literal
// TODO: create the properties for object
        //var wearableTech = {
        //aRing: '',
        //aHat: '',
        var aWatch = {
            model: 'Apple Watch Nike',
            connectivity: 'GPS',
            caseMaterial: 'Aluminum',
            bandType: 'Sport',
            bandColor: 'black',


//TODO: Created Getter function call below
            getModel: function () {
                return this.model;
                //return this && this.aWatch ? this.aWatch.model : 'Apple Watch Nike';
            },
//TODO: Create below a call for two different types of object literals and injected them into a string.
            getBandTypeAndColor: function () {
                return"The Apple watch band color:"+this.bandColor+"goes perfect with all these band types:"+this.bandType+"";
                //return `${this.firstName} ${this.lastName} is a ${this.careerField} and he is ${this.age} years old. `;
                //return this && this.aWatch ? this.aWatch.bandColor :'black'+ " goes perfect with all these band types: " + this && this.aWatch ? this.aWatch.bandType :'Sport'+ ".";
            },
            getCaseInfo: function () {
                return this.caseMaterial;

                //return `${this.firstName} ${this.lastName} is a ${this.careerField} and he is ${this.age} years old. `;
                //return this && this.aWatch ? this.aWatch.caseMaterial : 'Aluminum';
            },
//TODO: Created setter function call below
            set mostImportant(productInfo) {
                productInfo = productInfo.split('');

                return this.bandColor = productInfo[0];

            },

            set : function( large ) {
                this.size = large;
            },
        };
//TODO: Create a new object using Object.create below
        var wearableTechCustomer = Object.create(aWatch, {
            firstName: {
                value: "Jack"
            },
            question: {
                getValue: function () {
                    return " Hello " + this.firstName + " What is the model and specs of the aWatch you sell? ";
                }
            },
        });

        it('will return the aWatch values ', function () {

//TODO: All Getter actual below for aWatch
            var actualModelName = aWatch.getModel();
            var actualAllBands = aWatch.getBandTypeAndColor();
            var actualCaseInfo = aWatch.getCaseInfo();
            //var actualModelName = wearableTech.aWatch.getModel();
            //var actualAllBands = wearableTech.aWatch.getBandTypeAndColor();
            //var actualCaseInfo = wearableTech.aWatch.getCaseInfo();
//TODO: All object.attribute actual below for aWatch
            var actualModelName2 = aWatch.model;
            var actualAllBands2 = "The Apple watch band color:"+aWatch.bandColor+"goes perfect with all these band types:"+aWatch.bandType+"";
            var actualCaseInfo2 = aWatch.caseMaterial;
            //var actualModelName2 = wearableTech.aWatch.model;
            //var actualCaseInfo2 = wearableTech.aWatch.bandColor.BandType;
            //var actualCaseInfo2 = wearableTech.aWatch.caseMaterial;
//TODO: Created Setter call below for all properties
            /*var actualModelName3 = aWatch.set = 'Apple Watch Nike';
            var actualCaseInfo3 = aWatch.set = 'Aluminum';
            var actualAllBands3 = aWatch.set ="The Apple watch band color:"+aWatch.bandColor+"goes perfect with all these band types:"+aWatch.bandType+"";*/
            var actualSizeOfWatch = aWatch.size = "large";
            //var actualModelName3 = wearableTech.aWatch.lang = 'Apple Watch Nike';
            //var actualCaseInfo3 = wearableTech.aWatch.lang = 'Aluminum';
            //var actualAllBands3 = wearableTech.aWatch.lang = ' The Apple watch band color: black goes perfect with all these band types: Sport.';
//TODO: All Expected Results below for aWatch
            var expectedModelName = 'Apple Watch Nike';
            var expectedAllBands = "The Apple watch band color:blackgoes perfect with all these band types:Sport";
            var expectedCaseInfo = 'Aluminum';
            var expectedSizeOfWatch = 'large';
//TODO: Create a new object using Object.create and return a question below are actual and expected
            //var actualWearableTechCus = wearableTechCustomer.getValue;
            //var expectedWearableTechCusQuestion = " Hello Jack What is the model and specs of the aWatch you sell? ";

//TODO: Console.log for aWatch
            console.log(aWatch.getModel());
            console.log(aWatch.getCaseInfo());
            console.log(aWatch.getBandTypeAndColor());
            console.log(aWatch.size);
            //console.log(wearableTech.aWatch.getModel());
            //console.log(wearableTech.aWatch.getCaseInfo());
            //console.log(wearableTech.aWatch.getBandTypeAndColor());
            //console.log(wearableTechCustomer.getValue());
//TODO: All Expect To Be for aWatch
            expect(actualModelName).toBe(expectedModelName);
            expect(actualModelName2).toBe(expectedModelName);
            //expect(actualModelName3).toBe(expectedModelName);
            expect(actualAllBands).toBe(expectedAllBands);
            expect(actualAllBands2).toBe(expectedAllBands);
            //expect(actualAllBands3).toBe(expectedAllBands);
            expect(actualCaseInfo).toBe(expectedCaseInfo);
            expect(actualCaseInfo2).toBe(expectedCaseInfo);
            //expect(actualCaseInfo3).toBe(expectedCaseInfo);
            expect(actualSizeOfWatch).toBe(expectedSizeOfWatch);

        });

    });
});


/*describe("Object extension tests:", function () {
    it('will return a empty object boolean', function () {
        //TODO: Create Empty object with empty properties
        macysClothingStore = {};
        var actualResult = objectA.hasOwnProperty('mensDept');   // returns false
        objectA.prop = 'There is a mens department in Macys';
        var actualResult = objectA.hasOwnProperty('prop');   // returns true
        var expectedResult = true;
        expect(actualResult).toBe(expectedResult);

    });

    /*it('will return a empty object boolean', function () {
        //TODO: Create Empty object with empty properties
        var objectEmpty = {};
        var actualResult = objectEmpty.hasOwnProperty();
        var expectedResult = false;
        expect(actualResult).toBe(expectedResult);
    });

    /*it('will return a empty object boolean', function () {
        //TODO: Create Empty object with empty properties
        var objectEmpty = {


        };

        var actualResult = objectEmpty.hasOwnProperty('prop');
        var expectedResult = false;
        var haveProperty = false;
        //for (var emptyPropA in objectEmpty) {
            haveProperty = objectEmpty.hasOwnProperty(emptyPropA);

        }
        expect(actualResult).toBe(expectedResult);

    });

//     });
//
//
// });
// /*



//TODO: Bind to it test
getEmptyValue: function () {
//TODO: Create the call for all the properties, this call has two different examples that work
//return `${this.firstName} ${this.lastName} is a ${this.careerField} and he is ${this.age} years old. `;
return this.firstName + " " + this.lastName;
//TODO: Invoke function to return the property value you want
}


objectEmpty.property1 = {};

console.log(objectEmpty.hasOwnProperty('money'));
// expected output: true

console.log(objectEmpty.hasOwnProperty('cars'));
// expected output: false

console.log(objectEmpty.hasOwnProperty('hasOwnProperty'));
// expected output: false
//TODO: Creating a object literal that contains empty properties that is empty and returns true if so.
var objEmpty = {
propNull: null,
propUndefined: undefined,
propEmpty: '',

//TODO: Create the  empty object literal
//TODO: Create a way for it to invoke to is Empty test
//TODO: Create if/else for all outcomes to return a true result

f: function () {
    return this.propEmpty;
}
};
console.log(objEmpty.f());
//TODO: Invoke function to return the property you want


var customObject = {
customProp: false,
CustomFunResult: function () {
    console.log(`My name is ${this.name}. Am I a web developer? ${this.customProp}`);
}
};

var objectResultWanted = Object.create(customObject);

objectResultWanted.name = "Tony"; //
objectResultWanted.customProp = true; //

objectResultWanted.CustomFunResult();
//*/