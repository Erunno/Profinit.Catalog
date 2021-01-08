import { Component, OnInit } from '@angular/core';
import { Edge } from './models/edge';
import { Node } from './models/node';

@Component({
  selector: 'app-graph-browser',
  templateUrl: './graph-browser.component.html',
  styleUrls: ['./graph-browser.component.css']
})
export class GraphBrowserComponent implements OnInit {

  public edges: Edge[] = [
    {
      id: 1001,
      source: 1,
      target: 2,
      weight: .7
    },
    {
      id: 1002,
      source: 1,
      target: 3,
      weight: .6
    },
    {
      id: 1003,
      source: 2,
      target: 3,
      weight: .8
    },
    {
      id: 1004,
      source: 2,
      target: 4,
      weight: .2
    },
    {
      id: 1005,
      source: 3,
      target: 4,
      weight: .4
    }
  ];
  public nodes: Node[] = [
    {
      id: 1,
      main: true,
      name: 'Matyas Brabec',
      pictureThumbnailUrl: 'https://profinit.eu/wp-content/uploads/2016/04/og-image-profinit.jpg'
    },
    {
      id: 2,
      name: 'Petr Pascenko',
      pictureThumbnailUrl: 'https://profinit.eu/wp-content/uploads/2016/04/og-image-profinit.jpg'
    },
    {
      id: 3,
      name: 'Tomas Skopal',
      pictureThumbnailUrl: 'https://profinit.eu/wp-content/uploads/2016/04/og-image-profinit.jpg'
    },
    {
      id: 4,
      name: 'Jina Osoba',
      pictureThumbnailUrl: 'https://profinit.eu/wp-content/uploads/2016/04/og-image-profinit.jpg'
    },
  ];

  public cardOpen = false;

  public clicked(x: Node): void {
    this.cardOpen = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public onClose(): void {
    this.cardOpen = false;
  }

}
