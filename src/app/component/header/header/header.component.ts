import { Component, OnInit, Input } from '@angular/core';
import { ServiceConnService } from '../../../service/service-conn.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() ob;
  @Input() op;

  status;
  meta;
  isdataavailable = false;

  constructor(private serverCallService: ServiceConnService) { }

  ngOnInit() {
    this.serverCallService.getAllObjectsMetaData().subscribe( response => {
      if (response.status === 200) {
          if (response.status === 200) {
              this.status = null;
              this.meta = response.json;
              this.isdataavailable = true;
              console.log('fav' + this.meta[this.ob].Icon);
          } else {
              this.status = 'Error en la recepción de datos del servidor';
          }
      } else {
        this.status = 'Error en la recepción de datos del servidor';
      }
  }, error => this.status = 'Error en la recepcion de datos del servidor');
  }

}
