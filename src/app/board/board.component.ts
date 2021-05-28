import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  //colors=["primary","accent","warn","none"];

  primaryGrid1 = [1,"none",false,0];
  primaryGrid2 = [2,"none",false,0];
  primaryGrid3 = [3,"none",false,0];
  primaryGrid4 = [4,"none",false,0];
  primaryGrid5 = [5,"none",false,0];
  primaryGrid6 = [6,"none",false,0];
  primaryGrid7 = [7,"none",false,0];
  primaryGrid8 = [8,"none",false,0];
  primaryGrid9 = [9,"none",false,0];

  parentGrid = [this.primaryGrid1,this.primaryGrid2,this.primaryGrid3,
    this.primaryGrid4,this.primaryGrid5,this.primaryGrid6,this.primaryGrid7,this.primaryGrid8,this.primaryGrid9];

  finalResult="hehehe";

  clickCount=0;

  constructor() { }
  ngOnInit(): void {

  }

  onSelect(gridnumber){
    if(this.clickCount==0 || this.clickCount%2==0){
      this.parentGrid[gridnumber-1][1]= "primary";
      this.parentGrid[gridnumber-1][3]= 1;
    }  
    else{
      this.parentGrid[gridnumber-1][1]= "accent";
      this.parentGrid[gridnumber-1][3]= 2;
    }
    this.clickCount++;

    if(this.clickCount>=5)    
      this.winValidate();
  }

  winArrays = [[1,2,3],[1,4,7],[1,5,9],[4,5,6],[7,8,9],[7,5,3],[8,5,2],[9,6,3]];


  winValidate(){
      for(let a=0;a<8;a++){
        if(this.parentGrid[this.winArrays[a][0]-1] [3]==1 && this.parentGrid[this.winArrays[a][1] -1][3]==1 
          && this.parentGrid[this.winArrays[a][2]-1 ][3]==1){
            this.finalResult='blue win';
            break;
          }
        if(this.parentGrid[this.winArrays[a][0] -1][3]==2 && this.parentGrid[this.winArrays[a][1] -1][3]==2 
            && this.parentGrid[this.winArrays[a][2] -1][3]==2){
              this.finalResult='red win';
              break;
        }
      }
  }
}
