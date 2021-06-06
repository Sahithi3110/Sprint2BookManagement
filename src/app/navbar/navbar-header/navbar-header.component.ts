import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css'],
  //providers: [NgbModalConfig, NgbModal]
})
export class NavbarHeaderComponent implements OnInit {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  display=false;
  
    ngOnInit(): void {
      
  } 
  
  open(content: any) {
    this.modalService.open(content);
  }
  openLogin(){
   this.display = true;
  this.modalService.dismissAll(); 
}
}

