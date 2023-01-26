import { Injectable } from "@angular/core";
import { IRole, IUser } from "src/app/demo/interfaces/interface";
import { TokenService } from "src/app/demo/services/jwt/token.service";

export interface NavigationItem {
  id: string;
  title: string;
  type: "item" | "collapse" | "group";
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const UserNavigation = [
  {
    id: "navigation",
    title: "Navigation",
    type: "group",
    icon: "icon-navigation",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        url: "/dashboard",
        icon: "feather icon-home",
        classes: "nav-item",
      },
    ],
  },
  {
    id: "voitures",
    title: "Voitures",
    type: "group",
    icon: "icon-navigation",
    children: [
      {
        id: "liste-voiture",
        title: "Liste des voitures",
        type: "item",
        url: "/users/voitures/liste",
        icon: "feather icon-home",
        classes: "nav-item",
      },
    ],
  },
  {
    id: "reparations",
    title: "Reparation",
    type: "group",
    icon: "icon-navigation",
    children: [
      {
        id: "liste-reparations",
        title: "Liste des reparations",
        type: "item",
        url: "/users/reparations/liste",
        icon: "feather icon-home",
        classes: "nav-item",
      },
    ],
  },
];
const FinancierNavigation = [
  {
    id: "navigation",
    title: "Navigation",
    type: "group",
    icon: "icon-navigation",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        url: "/dashboard",
        icon: "feather icon-home",
        classes: "nav-item",
      },
    ],
  },
  {
    id: "financier",
    title: "Financier",
    type: "group",
    icon: "icon-navigation",
    children: [
      {
        id: "liste-deposer",
        title: "Liste des reparations",
        type: "item",
        url: "/reparations/all",
        icon: "feather icon-home",
        classes: "nav-item",
      },
      {
        id: "liste-reparer",
        title: "Liste des paiements à valider",
        type: "item",
        url: "/paiements/liste",
        icon: "feather icon-home",
        classes: "nav-item",
      },
    ],
  }
];

const AtelierNavigation = [
  {
    id: "navigation",
    title: "Navigation",
    type: "group",
    icon: "icon-navigation",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        url: "/dashboard",
        icon: "feather icon-home",
        classes: "nav-item",
      },
    ],
  },
  {
    id: "voitures",
    title: "Atelier",
    type: "group",
    icon: "icon-navigation",
    children: [
      {
        id: "liste-deposer",
        title: "Liste des voitures à entrer",
        type: "item",
        url: "/reparations/deposer/liste",
        icon: "feather icon-home",
        classes: "nav-item",
      },
      {
        id: "liste-reparer",
        title: "Liste des voitures à reparer",
        type: "item",
        url: "/reparations/reparer/liste/",
        icon: "feather icon-home",
        classes: "nav-item",
      },
    ],
  },
];

const NavigationItems = [
  {
    id: "navigation",
    title: "Navigation",
    type: "group",
    icon: "icon-navigation",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        url: "/dashboard",
        icon: "feather icon-home",
        classes: "nav-item",
      },
    ],
  },
  {
    id: "voitures",
    title: "Voitures",
    type: "group",
    icon: "icon-navigation",
    children: [
      {
        id: "liste-voiture",
        title: "Liste des voitures",
        type: "item",
        url: "/users/voitures",
        icon: "feather icon-home",
        classes: "nav-item",
      },
    ],
  },
  {
    id: "ui-element",
    title: "UI ELEMENT",
    type: "group",
    icon: "icon-ui",
    children: [
      {
        id: "basic",
        title: "Component",
        type: "collapse",
        icon: "feather icon-box",
        children: [
          {
            id: "button",
            title: "Button",
            type: "item",
            url: "/basic/button",
          },
          {
            id: "badges",
            title: "Badges",
            type: "item",
            url: "/basic/badges",
          },
          {
            id: "breadcrumb-pagination",
            title: "Breadcrumb & Pagination",
            type: "item",
            url: "/basic/breadcrumb-paging",
          },
          {
            id: "collapse",
            title: "Collapse",
            type: "item",
            url: "/basic/collapse",
          },
          {
            id: "tabs-pills",
            title: "Tabs & Pills",
            type: "item",
            url: "/basic/tabs-pills",
          },
          {
            id: "typography",
            title: "Typography",
            type: "item",
            url: "/basic/typography",
          },
        ],
      },
    ],
  },
  {
    id: "forms",
    title: "Forms & Tables",
    type: "group",
    icon: "icon-group",
    children: [
      {
        id: "forms-element",
        title: "Form Elements",
        type: "item",
        url: "/forms/basic",
        classes: "nav-item",
        icon: "feather icon-file-text",
      },
      {
        id: "tables",
        title: "Tables",
        type: "item",
        url: "/tables/bootstrap",
        classes: "nav-item",
        icon: "feather icon-server",
      },
    ],
  },
  {
    id: "chart-maps",
    title: "Chart & Maps",
    type: "group",
    icon: "icon-charts",
    children: [
      {
        id: "charts",
        title: "Charts",
        type: "item",
        url: "/charts/morris",
        classes: "nav-item",
        icon: "feather icon-pie-chart",
      },
    ],
  },
];

@Injectable()
export class NavigationItem {
  private user: any;
  public navigation: any[] = [];

  constructor(private token: TokenService) {
    this.set();
  }

  set() {
    if (this.token.GetUser()) {
      this.user = this.token.GetUser();
      console.log('-------- user -----------')
      console.log(this.user);
      console.log('-------- user -----------')
      if (this.user.role == "client") {
        this.navigation = UserNavigation;
      } else if (this.user.role == "atelier") {
        this.navigation = AtelierNavigation;
      } else if (this.user.role == "financier") {
        this.navigation = FinancierNavigation;
      } else {
        this.navigation = NavigationItems;
      }
    } else {
      this.navigation = NavigationItems;
    }
  }

  get() {
    return this.navigation;
  }
}
