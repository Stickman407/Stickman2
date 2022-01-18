import { r as registerInstance, h } from './index-fedadd70.js';

const mapEditorCss = ":root{--walls:yellow;--hello:red}.stickman{position:relative;width:1500px;height:1500px}.leg{position:absolute;height:80px;width:5px;background-color:var(--hello);transform:rotate(30deg);top:500px;right:770px}.leg2{position:absolute;height:80px;width:5px;background-color:var(--hello);transform:rotate(150deg);top:500px;right:725px}.torso{position:absolute;height:100px;width:20px;background-color:var(--hello);top:405px;right:740px}.head{position:absolute;height:38px;width:38px;background-color:var(--hello);border-radius:100%;top:370px;right:732px}.headhole{position:relative;height:30px;width:30px;background:white;border-radius:100%;top:4px;left:4px}.arm{position:absolute;height:75px;width:5px;background-color:var(--hello);top:380px;right:775px;transform:rotate(150deg)}.arm2{position:absolute;height:75px;width:5px;background-color:var(--hello);top:410px;right:730px;transform:rotate(150deg)}#stick-house .wall{height:120px;width:120px;background-color:var(--walls)}#stick-house .roof{height:120px;background-color:var(--walls)}.bullet{position:absolote;top:0;left:0;display:block;height:10px;width:10px;border-radius:100%;background:yellow}";

let Stickman = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    // new Tank();
    setInterval(() => {
      //this.gameLoop();
    }, 1000 / 60);
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
