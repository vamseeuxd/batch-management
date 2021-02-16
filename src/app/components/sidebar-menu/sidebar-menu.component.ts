import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  readonly routes = routes;
  @Input() showSideMenu = false;
  @Output()
  showSideMenuChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    titleService: Title,
    router: Router,
    activatedRoute: ActivatedRoute
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(
          router.routerState,
          router.routerState.root
        ).join('-');
        titleService.setTitle(title);
      }
    });
  }

  // tslint:disable-next-line:typedef
  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  ngOnInit(): void {}
}
