document.getElementById('title')       //to get the element by using id

 // <h1 id =​"title" class=​"heading"> ​DOM learning on Chai aur code ​</h1>​

document.getElementById('title').id   // using dot id notation we can get the id   

'title'

document.getElementById('title').className  // using dot className notation we can get the class name

'heading'

document.getElementById('title').getAttribute('id')   //using getAttribute we can access the the id attribute

'title'

document.getElementById('title').getAttribute('class')  //using getAttribute we can access the the class attribute

'heading'

document.getElementById('title').setAttribute('class', 'test') //using setAttribute we can set the new attribute

const title = document.getElementById('title')    //we can store in the variable and use anywhere

title.style.backgroundColor = 'green'      // we can use the variable for styling
'green'

title.style.padding = '15px'             // like padding
'15px'

title.style.borderRadius = '15px'        // borderRadius and many more
'15px'  

title.innerText               // it gives the text of page, it doesn't support html tags

'DOM learning on Chai aur code'

title.textContent            // it gives the text of page which is hidden by some display properties, it doesn't support html tags


'DOM learning on Chai aur code test text'

title.innerHTML              //innerHTML gives the all HTML value whether it is written in inner, it support html tags

'DOM learning on Chai aur code <span style="display : none">test text</span>'
  
document.getElementsByClassName('heading')  // get the element by using class name

document.querySelector('h1')    //it gives the first h1 from the page

document.querySelector('h2')   // it gives the first h2 from the page

document.querySelector('#title')  //we can select the id using querySelector

document.querySelector('.heading') // we can select the class using querySelector

document.querySelector('input')   // we can select the input element

document.querySelector('input[type = "password"]') // we can selct the input element attribute using large brackets

document.querySelector('ul')    // getting unOrdered list

const myul = document.querySelector('ul')   // storing in a variable

myul.querySelector('li')    // accessing list from variable

const turnGreen = myul.querySelector('li')  // again store in a variable to apply styles

turnGreen.style.backgroundColor = "green"  // apply background color

turnGreen.style.padding = "10px"  // apply padding

turnGreen.innerText      // getting innertext 

turnGreen.innerText = "five"  // replace inner text from one to five

 
// nodelist or HTMLcollection jo h vo pure array nhi h

document.querySelectorAll('li')  // it selects all list items

const tempLiList = document.querySelectorAll('li')   // storing in a variable

tempLiList              // call the variable

tempLiList[0].style.color = 'green'   // used to style the first element of list in green

const myH1 = document.querySelectorAll('H1')  // this query gets all the h1

myH1           // calling the variable

myH1[0].style.color = 'green'         //  this query specifies which h1 has to be green


// here we use forEach method  in nodeList 

// calling tempLiList again

tempLiList.forEach(function (l){         // using forEach method we change the bgColor of li
    l.style.backgroundColor = 'green'    // here we can use a normal function  or arrow function its our choice
})


// getElementsByClassName gives the output in HTMLCollection form

document.getElementsByClassName('list-item')    //Dom query which is used to get the element by their class name

const tempClassList = document.getElementsByClassName('list-item')         // calling class which name is list-item and store in a variable name tempClassList

tempClassList              // calling the variable

tempClassList.forEach(function (li) {        // forEach method doesn't work  on HTMLCollection
    console.log('li')
})



// converting HTMLCollection into Array

Array.from(tempClassList)   // it is converted into array

const myConvertedArray  = Array.from(tempClassList)  // we can hold this value in a variable

Array.from(document.getElementsByClassName('list-item'))    // we can also converted like that

myConvertedArray.forEach((li) => {       // we can use normal function or arrow function
    li.style.color = 'orange';
    li.style.padding = '10px';
    li.style.innerText = 'Raman'      // it is used to manipulate the text
})
