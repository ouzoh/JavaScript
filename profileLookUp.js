
//Setup (the power of debugging)
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
// Only change code below this line
  var i = contacts.length;
  var name, logic_a, logic_b, logic_c, ydum, xdum;
   
  //console.log((contacts[0].firstName===firstName)&&(contacts[1].firstName.prop!==undefined));
  
    while (i--)
    {
        //check if firstName exist
        //assign name as the firstname
        //store contact index for later (j)
        name=[];
        logic_a = (contacts[i].firstName===firstName);
        logic_b = (contacts[i][prop]===undefined);
        logic_c = (contacts[i][prop]!==undefined);
        // console.log ("i=",i);

        // ydum = contacts[i][prop];
        // console.log(ydum);

        // xdum = ydum.firstName;
        // console.log(xdum);

        // console.log(prop);//pass

        // console.log(ydum);
        // console.log(contacts[i]);
        // console.log(logic_a);
        // console.log (logic_a && logic_c);
        // console.log (logic_a && logic_b);


         if ( ((logic_a) && (logic_c))){
            name = contacts[i][prop];
            // console.log ("i=",i);
            console.log(name);
            break;
         }
        else if ( ((logic_a) && (logic_b))){
            //console.log((contacts[i].firstName===firstName) & (contacts[i].firstName.prop===undefined))
            name = "No such property";
            console.log(name);
            break;
        }
        //check other firstName
        else if (i > 0 && contacts[i].firstName!==firstName) {
            continue;
        }
        else if (i === 0 && contacts[i].firstName!==firstName){
            name = "No such contact";
            console.log(name);           
            break;
        }
        //i--;
    }
  //console.log(name);
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry","likes");
lookUpProfile("Bob", "number");
lookUpProfile("Akira", "address");



// "Kristian", "lastName" should return "Vos"
// "Sherlock", "likes" should return ["Intriguing Cases", "Violin"]
// "Harry","likes" should return an array
// "Bob", "number" should return "No such contact"
// "Akira", "address" should return "No such property"
