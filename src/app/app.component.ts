import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem,
  CdkDragExit,
  CdkDragEnter
} from '@angular/cdk/drag-drop';

import find from 'lodash-es/find';
import remove from 'lodash-es/remove';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sItems: Array<any> = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' }
  ];

  newItems: Array<any> = [
    [{ name: '1' }],
    [{ name: '2' }],
    [{ name: '3' }],
    [{ name: '4' }],
    [{ name: '5' }],
    [{ name: '6' }],
    [{ name: '7' }],
    [{ name: '8' }],
    [{ name: '9' }],
    [{ name: '10' }],
    [{ name: '11' }],
    [{ name: '12' }],
    [{ name: '13' }],
    [{ name: '14' }],
    [{ name: '15' }],
    [{ name: '16' }],
    [{ name: '17' }],
    [{ name: '18' }],
    [{ name: '19' }],
    [{ name: '20' }],
    [{ name: '21' }],
    [{ name: '22' }],
    [{ name: '23' }],
    [{ name: '24' }],
    [{ name: '25' }],
    [{ name: '26' }],
    [{ name: '27' }],
    [{ name: '28' }],
    [{ name: '29' }],
    [{ name: '30' }],
    [{ name: '31' }],
    [{ name: '32' }],
    [{ name: '33' }],
    [{ name: '34' }],
    [{ name: '35' }],
    [{ name: '36' }],
    [{ name: '37' }],
    [{ name: '38' }],
    [{ name: '39' }],
    [{ name: '40' }],
    [{ name: '41' }],
    [{ name: '42' }],
    [{ name: '43' }],
    [{ name: '44' }],
    [{ name: '45' }],
    [{ name: '46' }],
    [{ name: '47' }],
    [{ name: '48' }],
    [{ name: '49' }],
    [{ name: '50' }]
  ];

  destinationDropped(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // copyArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );

      this.updateItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    if (event.previousContainer.data) {
      remove(this.sItems, { temp: true });
    }
  }

  noReturnPredicate() {
    return false;
  }

  onSourceListExited(event: CdkDragExit<any>) {
    this.sItems.splice(event.container.getItemIndex(event.item) + 1, 0, {
      ...event.item.data,
      temp: true
    });
  }

  onSourceListEntered(event: CdkDragEnter<any>) {
    remove(this.sItems, { temp: true });
  }

  updateItem(previous: any, current: any, prevIndex: number, curIndex): void {
    const itemToInsert = previous[prevIndex];
    current[0] = itemToInsert;
  }
}
