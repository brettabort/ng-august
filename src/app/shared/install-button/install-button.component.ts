import { Component } from '@angular/core';

@Component({
  selector: 'app-install-button',
  templateUrl: './install-button.component.html',
  styleUrls: ['./install-button.component.scss'],
})
export class InstallButtonComponent {
  // Store the beforeinstallprompt event
  promptEvent: any;

  constructor() {}

  ngOnInit() {
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (event: any) => {
      event.preventDefault();
      this.promptEvent = event;
    });
  }

  // Function to trigger the installation prompt
  addToHomeScreen() {
    if (this.promptEvent) {
      this.promptEvent.prompt();
    }
  }
}
