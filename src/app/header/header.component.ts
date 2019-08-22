import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
  // Output will make it listenable to outside components
  @Output()
  featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    // This will emit an event whenever we click
    // the button
    this.featureSelected.emit(feature);
  }
}
