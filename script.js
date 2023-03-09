let dt = document.getElementById("dt");
let hhours = document.getElementById("hhours");
setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let newtime = hours + ":" + minutes;
  dt.innerHTML = newtime;
}, 1000);
setInterval(() => {
  let dtt = new Date();
  hhours.innerHTML = dtt;
}, 1000);
function showallapps() {
  document.getElementById("dsp").innerHTML = `<div  id="allaps">
        <div onclick="calculator()" class="homes">
          <img src="./icons8-calculator-100.png" alt="">
        </div>
        <div class="homes">
          <i class="icofont-camera"></i>
        </div>
        <div class="homes">
          <i class="icofont-camera"></i>
        </div>
        <div class="homes">
          <i class="icofont-camera"></i>
        </div>
        <div class="homes">
          <i class="icofont-phone-circle"></i>
        </div>
        <div class="homes">
          <i class="icofont-camera"></i>
        </div>
        <div class="homes">
          <i class="icofont-camera"></i>
        </div>
        <div class="homes">
          <i class="icofont-camera"></i>
        </div>
        <div class="homes">
          <i class="icofont-camera"></i>
        </div>
    </div>
    `;
}
function defaultscreen() {
    document.getElementById("dsp").innerHTML = `
    <span id="hhours"></span>
    <div id="dsp">  
      <div class="hy">
        <div class="home" onclick="showallapps()">
          <i class="icofont-home"></i>
        </div>
        <div onclick="call()" class="home">
          <i class="icofont-phone-circle"></i>
        </div>
        <div class="home">
          <i class="icofont-camera"></i>
        </div>
      </div>
    </div>;
    `;
  setInterval(() => {
    let dtt = new Date();
    // hhours.innerHTML = "ygytygy";
    // console.log(dtt);
    document.getElementById("hhours").innerHTML = dtt;
  }, 1000);
}

function gobk() {
    document.getElementById("dsp").innerHTML = "";
    defaultscreen();
}
let allcall = [
  {
    image: "./enny avatar.webp",
    name: "Uthman",
    phone: "08146438621",
  },
  {
    image: "./cocacola.png",
    name: "Eniola",
    phone: "08146438621",
  },
  {
    image: "./icons8-whatsapp-240.png",
    name: "Limah",
    phone: "08146438621",
  },
];
function call() {
  document.getElementById("dsp").innerHTML = "";
  for (let index = 0; index < allcall.length; index++) {
    const element = allcall[index];
    // console.log(allcall);          
      document.getElementById("dsp").innerHTML += `
    <div>
      <div class="ctns">
      <div>
        <img class="call-img" src="${element.image}" alt="">
      </div>
      <div class="dts">
        <h2>${element.name}</h2>
        <p>${element.phone}</p>
      </div>
      <div class="cls" onclick="makecall(${index})">
        <i class="icofont-phone-circle"></i>
      </div>
    </div>
    </div>
    
  `;
    setTimeout(() => {
        document.getElementById("dsp").innerHTML = ""
      // alert("good")
      call();
    }, 10000);

  }
  document.getElementById("dsp").innerHTML += `
      <div class="d-flex dff">
        <div> <i class="icofont-refresh"></i> <br> </div>  <br>
        <p>Recent Calls</p>
      </div>
    `;
}
function makecall(index) {
  // console.log(index);
   document.getElementById("dsp").innerHTML = "";
   document.getElementById("dsp").innerHTML += `
      <div class="oncall">
          <div class="icocall">
            <img  src="${allcall[index].image}" alt="">
          </div>
          <h1>${allcall[index].name}</h1>
          <h4>${allcall[index].phone}</h4>
          <p>calling</p>
          <div class="callitm1">
            <div class="ech-itm1"><i class="icofont-volume-bar"></i></div>
            <div class="ech-itm1"><i class="icofont-mic"></i></div>
            <div class="ech-itm1"><i class="icofont-pause"></i></div>
          </div>
          <div class="ech-itm2" onclick="endcall()"><i class="icofont-phone-circle"></i></div>
      </div>
      
  `;
}
function endcall() {
  document.getElementById("dsp").innerHTML = "";
  for (let index = 0; index < allcall.length; index++) {
    const element = allcall[index];
    // console.log(allcall);
    document.getElementById("dsp").innerHTML += `
    <div class="ctns">
      <div>
        <img class="call-img" src="${element.image}" alt="">
      </div>
      <div class="dts">
        <h2>${element.name}</h2>
        <p>${element.phone}</p>
      </div>
      <div class="cls" onclick="makecall(${index})">
        <i class="icofont-phone-circle"></i>
      </div>
    </div>
  `;
  }
}
function calculator() {
  document.getElementById("dsp").innerHTML = "";
  document.getElementById("dsp").innerHTML += `
    <div class="calculator">
      <input id="display" type="text"> <br>
      <br>
      <button onclick="display.value += (7)">7</button>
      <button onclick="display.value += (8)">8</button>
      <button onclick="display.value += (9)">9</button>
      <button onclick="display.value = display.value.slice(0, -1)">Del</button>
      <br>
      <button onclick="display.value += (4)">4</button>
      <button onclick="display.value += (5)">5</button>
      <button onclick="display.value += (6)">6</button>
      <button onclick="display.value += '/' ">&divide;</button>
      <br>
      <button onclick="display.value += (1)">1</button>
      <button onclick="display.value += (2)">2</button>
      <button onclick="display.value += (3)">3</button>
      <button onclick="display.value += '-' ">&minus;</button>
      <br>
      <button onclick="display.value += (0)">0</button>
      <button onclick="display.value += (00)">00</button>
      <button onclick="display.value += '+' ">&plus;</button>
      <button onclick="display.value = '' ">AC</button>
      <button onclick="display.value += (000)">000</button>
      <button onclick="display.value += '*' ">&times;</button>
      <button onclick="display.value = eval(display.value)">&equals;</button>
    </div>
  `;
}