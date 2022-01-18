import { Component, h,} from '@stencil/core';
//import Tank from './models/Tank';
@Component({
    tag: 'map-editor',
    styleUrl: 'map-editor.css'
})
export class Stickman {
    componentDidLoad() {
        // new Tank();
        setInterval(() => {
            //this.gameLoop();
        } , 1000 / 60);
      } 

    render() {
        return (
            <stick-tank />
            
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
}