export default class Scoreboard {
    score = 0;
    el = null;
  
    constructor(score) {
      this.score = score || 0;
      this.el = document.createElement("div");
      this.el.textContent = this.score;
      this.el.id = "editor";
      document.body.appendChild(this.el);
    }
  
    add(points) {
      console.log(points, this.score);
      this.score = this.score + points;
      this.el.textContent = this.score;
    }
  
    remove(points) {
      console.log(points, this.score);
      this.score = this.score - points;
      this.el.textContent = this.score;
    }
  }
 