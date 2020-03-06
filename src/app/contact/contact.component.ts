import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onAddUser(form) {
    console.log(form);
    if (form.valid) {
    this.router.navigate(['']);
    }
  }
}
