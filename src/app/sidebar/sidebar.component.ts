import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.treeMenuLogic();
  }

  treeMenuLogic() {
    const toggler = document.getElementsByClassName('caret');
    let i: number;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('click', function () {
        this.parentElement.querySelector('.nested').classList.toggle('active');
        this.classList.toggle('caret-down');
      });
    }
  }


}
