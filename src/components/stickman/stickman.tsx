import { Component, h } from '@stencil/core';


@Component({
    tag: 'stick-man',
    styleUrl: 'stickman.css'
})
export class Stickman {

    render() {
        return (
            <div class="stickman">
                <div class="leg2"></div>
                <div class="leg"></div>
                <div class="torso"></div>
                <div class="arm"></div>
                <div class="arm2"></div>
                <div class="head">
                    <div class="headhole"></div>
                </div>
            </div>
        );
    }
}