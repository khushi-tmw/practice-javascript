const myObject = {
    js: 'Javascript', 
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programmimg = ["js", "rb", "py", "java", "cpp"]

for (const key in programmimg) {
   // console.log(programmimg[key]);
        
}

const map = new Map();
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")
map.set('IN',"India")

for (const key in map) {
   // console.log(key);
    
}

// ******************** for each ******************

const coding = ["{js}", "ruby", 'java', "python", "cpp"]

coding.forEach( function (item) {
  //  console.log(item);
    
})

coding.forEach ( (item) => {
   // console.log(item);
    
})

function printMe(item){
   //  console.log(item);
    
}
coding.forEach(printMe)

const myCoding = [
    {
        languageName: "javascript",
        languagefileName: "py"
    },
    {
        languageName: "java",
        languagefileName: "py"
    },
    {
        languageName: "python",
        languagefileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})