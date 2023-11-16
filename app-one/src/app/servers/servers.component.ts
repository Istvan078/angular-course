import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
 //  selector: ".app-servers",
  selector: "app-servers",
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "Nem lett szerver létrehozva!"
  serverName = "Tesztszerver";
  serverCreated = false;
  servers = ["Tesztszerver", "Tesztszerver 2"]


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000)
  }


onCreateServer() {
  this.serverCreated = true;
  this.servers.push(this.serverName);
  this.serverCreationStatus = "Szerver el lett készítve. A neve " + this.serverName
}

onUpdateServerName(event: any) {
  this.serverName = (<HTMLInputElement>event.target).value;
}

}