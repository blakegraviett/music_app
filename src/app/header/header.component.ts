import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() pageSelector = new EventEmitter();

  isShowing: Boolean = false;

  selectPageName(page: string) {
    this.pageSelector.emit(page);
  }


}
