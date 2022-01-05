import { r as registerInstance, h } from './index-7ba56883.js';

class Tank {
  constructor() {
    this.movementSpeed = 15;
    this.el = null;
    this.x = 0;
    this.y = 0;
    this.orientation = 0;
    // Create the element and save a reference to it
    this.el = document.createElement("span");
    // Setup the styles
    this.el.style.position = "absolute";
    // Use transition to make it animate CSS style changes
    this.el.style.transition = "0.3s linear all";
    // Set the image  with a background so that I don't have to worry about sizing the tank
    this.el.style.background =
      "url('https://forum.cosmoteer.net/assets/files/2020-03-07/1583581655-976459-alien-tank-1.gif') center center / contain no-repeat";
    this.el.style.height = "60px";
    this.el.style.width = "60px";
    // Add the element to the body as a child  <body><span /></body>
    document.body.appendChild(this.el);
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowUp") {
        this.setOrientation(0);
        this.move(0, -this.movementSpeed);
      }
      else if (event.key === "ArrowDown") {
        this.setOrientation(180);
        this.move(0, this.movementSpeed);
      }
      else if (event.key === "ArrowLeft") {
        this.setOrientation(270);
        this.move(-this.movementSpeed, 0);
      }
      else if (event.key === "ArrowRight") {
        this.setOrientation(90);
        this.move(this.movementSpeed, 0);
      }
    });
  }
  move(x, y) {
    // Change the positioning
    this.x = this.x + x;
    this.y = this.y + y;
    // Update the HTML element styles
    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;
    return this;
  }
  setOrientation(degrees) {
    // Set orientation in degrees
    this.orientation = degrees;
    // Update the HTML element styles
    this.el.style.transform = `rotate(${degrees}deg)`;
    return this;
  }
}

const mapEditorCss = ":root{--walls:yellow;--hello:red}.stickman{position:relative;width:1500px;height:1500px}.leg{position:absolute;height:80px;width:5px;background-color:var(--hello);transform:rotate(30deg);top:500px;right:770px}.leg2{position:absolute;height:80px;width:5px;background-color:var(--hello);transform:rotate(150deg);top:500px;right:725px}.torso{position:absolute;height:100px;width:20px;background-color:var(--hello);top:405px;right:740px}.head{position:absolute;height:38px;width:38px;background-color:var(--hello);border-radius:100%;top:370px;right:732px}.headhole{position:relative;height:30px;width:30px;background:white;border-radius:100%;top:4px;left:4px}.arm{position:absolute;height:75px;width:5px;background-color:var(--hello);top:380px;right:775px;transform:rotate(150deg)}.arm2{position:absolute;height:75px;width:5px;background-color:var(--hello);top:410px;right:730px;transform:rotate(150deg)}#stick-house .wall{height:120px;width:120px;background-color:var(--walls)}#stick-house .roof{height:120px;background-color:var(--walls)}.bullet{position:absolote;top:0;left:0;display:block;height:10px;width:10px;border-radius:100%;background:yellow}";

let Stickman = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    new Tank();
  }
  render() {
    return (h("stick-tank", null)
    // <div class="stickman">
    //     <div class="leg2"></div>
    //     <div class="leg"></div>
    //     <div class="torso"></div>
    //     <div class="arm"></div>
    //     <div class="arm2"></div>
    //     <div class="head">
    //         <div class="headhole"></div>
    //     </div>
    // </div>
    );
  }
};
Stickman.style = mapEditorCss;

export { Stickman as map_editor };
