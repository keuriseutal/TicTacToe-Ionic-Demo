import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  currentPlayer: string = "X";

  one: string = "";
  two: string = "";
  three: string = "";
  four: string = "";
  five: string = "";
  six: string = "";
  seven: string = "";
  eight: string = "";
  nine: string = "";

  inputArray: string[] = [];

  isGameOver: boolean = false;

  constructor(public navCtrl: NavController) {}

  nextTurn(event: number) {
    if (this.inputArray.length != 9 && !this.isGameOver) {
      switch (event) {
        case 1:
          this.inputArray.push("1" + this.currentPlayer);
          this.one = this.currentPlayer;
          break;
        case 2:
          this.inputArray.push("2" + this.currentPlayer);
          this.two = this.currentPlayer;
          break;
        case 3:
          this.inputArray.push("3" + this.currentPlayer);
          this.three = this.currentPlayer;
          break;
        case 4:
          this.inputArray.push("4" + this.currentPlayer);
          this.four = this.currentPlayer;
          break;
        case 5:
          this.inputArray.push("5" + this.currentPlayer);
          this.five = this.currentPlayer;
          break;
        case 6:
          this.inputArray.push("6" + this.currentPlayer);
          this.six = this.currentPlayer;
          break;
        case 7:
          this.inputArray.push("7" + this.currentPlayer);
          this.seven = this.currentPlayer;
          break;
        case 8:
          this.inputArray.push("8" + this.currentPlayer);
          this.eight = this.currentPlayer;
          break;
        case 9:
          this.inputArray.push("9" + this.currentPlayer);
          this.nine = this.currentPlayer;
          break;
      }

      this.checkForWinner();
      this.changeTurn();
    } //END IF NOT ALL FIELDS ARE FILLED
  } //END NEXT TURN FUNC

  checkForWinner() {
    if (this.inputArray.length == 9) {
      this.isGameOver = true;
    }
    let xArray: string[] = [];
    let oArray: string[] = [];

    for (let i = 0; i < this.inputArray.length; i++) {
      if (this.inputArray[i].charAt(1) == "X") {
        xArray.push(this.inputArray[i].charAt(0));
      } else if (this.inputArray[i].charAt(1) == "O") {
        oArray.push(this.inputArray[i].charAt(0));
      }
    }

    this.checkInput(xArray);
    this.checkInput(oArray);
  } //end checkforwinner

  changeTurn() {
    switch (this.currentPlayer) {
      case "X":
        this.currentPlayer = "O";
        break;
      case "O":
        this.currentPlayer = "X";
        break;
    }
  }

  checkInput(event: string[]) {
    if (
      event.toString().includes("1") &&
      event.toString().includes("2") &&
      event.toString().includes("3")
    ) {
      this.isGameOver = true;
    } else if (
      event.toString().includes("4") &&
      event.toString().includes("5") &&
      event.toString().includes("6")
    ) {
      this.isGameOver = true;
    } else if (
      event.toString().includes("7") &&
      event.toString().includes("8") &&
      event.toString().includes("9")
    ) {
      this.isGameOver = true;
    } else if (
      event.toString().includes("1") &&
      event.toString().includes("4") &&
      event.toString().includes("7")
    ) {
      this.isGameOver = true;
    } else if (
      event.toString().includes("2") &&
      event.toString().includes("5") &&
      event.toString().includes("8")
    ) {
      this.isGameOver = true;
    } else if (
      event.toString().includes("3") &&
      event.toString().includes("6") &&
      event.toString().includes("9")
    ) {
      this.isGameOver = true;
    } else if (
      event.toString().includes("1") &&
      event.toString().includes("5") &&
      event.toString().includes("9")
    ) {
      this.isGameOver = true;
    } else if (
      event.toString().includes("3") &&
      event.toString().includes("5") &&
      event.toString().includes("7")
    ) {
      this.isGameOver = true;
    }
  }

  restart() {
    this.currentPlayer = "X";

    this.one = "";
    this.two = "";
    this.three = "";
    this.four = "";
    this.five = "";
    this.six = "";
    this.seven = "";
    this.eight = "";
    this.nine = "";

    this.inputArray = [];

    this.isGameOver = false;
  }
}
