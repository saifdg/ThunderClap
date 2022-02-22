import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  name = 'el-Sa';
  prenom = 'dg';
  Message = true;
  status = true;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  saFn(name = 'ss') {
    return this.Message;
  }

  register() {
    this.router.navigate(['/me']);
  }
}
