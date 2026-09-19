// JavaScript Introduction
// function a(){
// document.getElementById("1").innerHTML = Date();
// }

// JavaScript Can Change HTML Content
// function b(){
//     document.getElementById("2").innerHTML = "paragraph changed";
// }

// JavaScript Can Change HTML Content
// function openModal() {
//       document.getElementById("modalOverlay").classList.remove("active");
//     }

//     function closeModal() {
//       document.getElementById("modalOverlay").classList.remove("active");
//     }

//     function closeOnOutside(e) {
//       if (e.target === document.getElementById("modalOverlay")) closeModal();
//     }

//     function changeText(e) {
//       e.stopPropagation(); // prevent card click from firing
//       document.getElementById("card-text").innerHTML  = "✨ Text changed by JavaScript!";
//       document.getElementById("modal-text").innerHTML = "✨ Text changed by JavaScript!";
//     }



// JavaScript Can Change HTML Attribute Values
function openModal(type) {
  const overlay = document.getElementById("modalOverlay");
  const title = document.getElementById("modalTitle");
  const content = document.getElementById("modalContent");
  const extra = document.getElementById("modalExtra");

   // overlay.classList.add("active");
  overlay.classList.remove("hidden");

  // Reset extra content
  content.style.display = "block";
  extra.innerHTML = "";

  if (type === "card0"){
    title.innerHTML = "JavaScript Introduction";
    content.innerHTML = "";

    extra.innerHTML=`
    <button type="button" onclick="dateAndTime()">click here to check the Date and Time</button>
    `;
  }

  if (type === "card1") {
    title.innerText = "JavaScript Can Change HTML Attribute Values";
    content.innerHTML = "JavaScript can change the <strong>src</strong> attribute.";

    extra.innerHTML = `
      <button onclick="toggleLight('on', event)">Turn on</button>
      <img id="modalImage" src="images/bulb-off.png">
      <button onclick="toggleLight('off', event)">Turn off</button>
    `;
  }

  if (type === "card2") {
    title.innerText = "What Can JavaScript Do?";
    content.innerText = "JavaScript can change CSS styles.";

    extra.innerHTML = `
      <button onclick="changeTextSize()">Click Me!</button>
    `;
  }

  if (type === "card3"){
  title.innerHTML = "JavaScript can hide HTML elements.";
  content.innerHTML = "Hiding HTML elements can be done by changing the display style";

  extra.innerHTML = `
    <p id="timebeing">Hello World</p>
    <button id="hideBtn">Click Me!</button>
  `;

  // Attach event AFTER element is added
  document.getElementById("hideBtn").addEventListener("click", function () {
    document.getElementById("timebeing").style.display = "none";
  });
}

  if (type === "card4"){
    title.innerHTML = "JavaScript Can Show HTML Elements";
    content.innerHTML = "Showing hidden HTML elements can also be done by changing the display style";

    extra.innerHTML =  `
    <p id="new" style="display:none">Hello JavaScript!</p>
    <button onclick="showElement()">Click Me!</button>
    `;
  }

  if (type === "card5"){
    title.innerHTML = " External References";
    content.innerHTML = `
    An external script can be referenced in 3 different ways:
    <ul>
      <li>With a full URL (a full web address)</li>
      <li>With a file path (like /js/)</li>
      <li>Without any path</li>
    </ul>
      `;

    extra.innerHTML =  `
  <ul>

  <li>This example uses a full URL to link to myScript.js:</li><br>
  <code>
    &lt;script src="https://www.w3schools.com/js/myScript.js"&gt;&lt;/script&gt;
  </code>
  <br><br>
    <li>This example uses a file path to link to myScript.js:</li><br>
  <code>
    &lt;script src="/js/myScript.js"&gt;&lt;/script&gt;
  </code>
  <br><br>
    <li>This example uses no path to link to myScript.js:</li><br>
  <code>
    &lt;script src="myScript.js"&gt;&lt;/script&gt;
  </code>
  <br><br/
  </ul>
    You can read more about file paths in the chapter 
  <a href="https://www.w3schools.com/html/html_filepaths.asp" target="_blank" style="color: blue; text-decoration: underline;">
    HTML File Paths
  </a>.
    `;
  }
  

  if (type === "card6"){
    title.innerHTML = "JavaScript Display Possibilities";
    content.innerHTML = "Using innerHTML";

    extra.innerHTML =  `
    <p id="UsingInnerHTML"></p>
    `;
    // If you want it to run automatically when modal opens, do this:
    setTimeout(() => {
    document.getElementById("UsingInnerHTML").innerHTML = "Hello World";
  }, 0);
  }

  if (type === "card7"){
    title.innerHTML = "JavaScript Display Possibilities";
    content.innerHTML = "Using innerText";

    extra.innerHTML =  `
    <p id="usingInnerText"></p>
    `;
    // If you want it to run automatically when modal opens, do this:
    setTimeout(() => {
    document.getElementById("usingInnerText").innerText = "Hello World";
  }, 0);
  }

if (type === "card8"){
    title.innerHTML = "JavaScript Display Possibilities";
    content.innerHTML = "Using document.write()";

    // bug:duplicate IDs
    extra.innerHTML =  `
  <p>document.write(5 + 6) will output:</p>
  <pre>11</pre>
  <p style="color:red;">⚠️ Using document.write after page load will overwrite the whole document.</p>
  <div id="writeResult"><button onclick="simulate()">Try document.writeln()</button></div>
  <div id="writeResult"></div>
  <button onclick="simulate()">Try document.writeln()</button>

  `;
    // If you want it to run automatically when modal opens, do this:
  //   setTimeout(() => {
  //   document.writeln(5+6);
  // }, 0);
  //   console.log(setTimeout(() => {
  //   document.writeln(5+6);
  // }, 0));
  }

// Method 1:
  // if (type === "card9"){
  //   title.innerHTML = "JavaScript Output";
  //   content.innerHTML = "Using window.alert()";

  //   extra.innerHTML =  `
  //   <button onclick="displayAlert()">click here to display alerts</button>
  //   `;
  // }

  // Method 2 using event listener:
  if (type === "card9"){
    title.innerHTML = "JavaScript Output";
    content.innerHTML = "Using window.alert()";

    extra.innerHTML = `
  <button id="alertBtn">Click here to display alert</button>
`;

setTimeout(() => {
  document.getElementById("alertBtn").addEventListener("click", function () {
    alert(5 + 6);
  });
}, 0);
  }


//   Method 3 autorun when click on card:
//   if (type === "card9"){
//   title.innerHTML = "JavaScript Output";
//   content.innerHTML = "Using window.alert()";

//   extra.innerHTML = ``;

//   setTimeout(() => {
//     window.alert(5 + 6);
//   }, 0);
// }

  // Method using function and  event listener :

if (type === "card10"){
  title.innerHTML = "JavaScript Output";
  content.innerHTML = "Using console.log()";
  console.log("Rukaiya");

  extra.innerHTML = `
   <p>Check the browser console 👇</p>
  <button id="useConsole" onclick="checkConsole()">Run console.log()</button>
  <button onclick="logMessage()">click here</button>
  `;

  // setTimeout(() => {
  //   document.getElementById("useConsole").addEventListener("click",function (){
  //     console.log("Rukaiya");
  //   });  },0);
}

// Method 1: as click on card modal autoruns
// if (type === "card11"){
//   title.innerHTML = "JavaScript Output";
//   content.innerHTML = "Using Print";

//   extra.innerHTML = ``;
//   setTimeout(() => {
//     window.print();
//   }, 0);
// }

  // Method 2 using event listener:
if (type === "card11"){
  title.innerHTML = "JavaScript Output";
  content.innerHTML = "Using Print";

  extra.innerHTML = `
  <button id="usePrint">Click here to print the page</button>
  `;
  // setTimeout(() => { //without set timeout
    document.getElementById("usePrint").addEventListener("click",function (){
      window.print();
    });  
  // },0);
  
}

// ⚠️ When setTimeout is actually needed

// Only use it when:

// Element is not yet in DOM

// You must wait for rendering

// 👉 In your case, not required

}


//..........................Functions.............................................................................................................. 

function logMessage() {
  console.log("Rukaiya");
  document.getElementById("modalExtra").innerHTML += "<p>Logged in console ✅</p>";
}

function checkConsole(){
  console.log("Rukaiya");
}

function displayAlert(){
  alert(5 + 6);
  // window.alert(5 + 6);
}

function simulate(){
  document.getElementById("writeResult").innerHTML = 6+5;
}


// for card 6 <button onclick="UIHTML()">Click Me</button>
// function UIHTML(){
//   document.getElementById("UsingInnerHTML").innerHTML = "<h2>Hello World</h2>";
//   console.log("button clicked")
// }


// function showElement(){
//   document.getElementById('new').style.display='block'
// }
//Making card4 a toggle:
function showElement(){
  const el = document.getElementById('new');
  el.style.display = (el.style.display === 'none') ? 'block' : 'none';
}

function dateAndTime(){
  document.getElementById('modalContent').innerHTML = Date();
}

function changeTextSize() {
  document.getElementById("modalContent").style.fontSize = "35px";
}

// function closeModal() {
//   document.getElementById("modalOverlay").classList.remove("active");
// }
function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
}

function closeOnOutside(e) {
      if (e.target === document.getElementById("modalOverlay")) closeModal();
}

function toggleLight(state, e) {
  e.stopPropagation(); // prevent triggering card click
  const src = state === 'off' ? 'images/bulb-off.png' : 'images/bulb-on.png';
  // document.getElementById("cardImage").src  = src;
  document.getElementById("modalImage").src = src;
}
    

// JavaScript Can Change HTML Styles (CSS)

