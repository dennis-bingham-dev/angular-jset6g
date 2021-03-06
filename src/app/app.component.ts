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
  emptyCell = { name: '' };
  sItems: Array<any> = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' }
  ];

  newItems: Array<any> = [
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }],
    [{ name: '' }]
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
    previous[0] = this.emptyCell;
    current[0] = itemToInsert;
  }
}
