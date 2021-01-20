import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  public todoArray: Array<string> = [
    'item 1',
    'item 1',
    'item 1',
    'item 1',
    'alors',

  ];
  public addItem($event: KeyboardEvent): void {
    if ($event.code === 'Enter') {
      const $input: HTMLInputElement|null = $event.target as HTMLInputElement;

      if ($input !== null) {
        console.log($input.value);
      }
      console.log('Enter pressed')
    }
  }
}
