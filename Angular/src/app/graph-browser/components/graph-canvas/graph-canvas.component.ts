import { edgeStyle } from './styles/edge-style';
import { mainNodeStyle, nodeStyle } from './styles/node-style';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as cytoscape from 'cytoscape';
import { Edge } from '../../models/edge';
import { Node } from '../../models/node';

@Component({
  selector: 'app-graph-canvas',
  templateUrl: './graph-canvas.component.html',
  styleUrls: ['./graph-canvas.component.css']
})
export class GraphCanvasComponent implements OnInit {

  @Input() nodes: Node[];
  @Input() edges: Edge[];

  @Output() clickedOnNode = new EventEmitter<Node>();

  constructor() { }

  ngOnInit(): void {
    const cy = cytoscape({

      container: document.getElementById('cy'),
      elements: this.getElements(),

      style: [
        {
          selector: 'node',
          style: nodeStyle
        },
        {
          selector: 'edge',
          style: edgeStyle
        },
        {
          selector: 'node[main]',
          style: mainNodeStyle
        }
      ],
      layout: {
        name: 'random'
      }
    });

    cy.autolock(true);
    cy.nodes().on('click', event => this.handleClickOnNode(event));
  }

  handleClickOnNode(event: cytoscape.EventObject): void {
    const nodeId = +event.target[0]._private.data.id;

    this.clickedOnNode.emit(
      this.nodes.find(n => n.id === nodeId)
    );
  }

  private getElements(): cytoscape.ElementDefinition[] {
    const nodeElements = this.nodes.map(n => this.getNodeElement(n));
    const edgeElements = this.edges.map(e => this.getEdgeElement(e));

    return nodeElements.concat(edgeElements);
  }

  private getNodeElement(node: Node): cytoscape.ElementDefinition {
    return {
      data: {
        id: node.id.toString(),
        name: node.name,
        pictureUrl: node.pictureThumbnailUrl,
        main: node?.main
      }
     };
  }

  private getEdgeElement(edge: Edge): cytoscape.ElementDefinition {
    return {
      data: {
        id: edge.id.toString(),
        source: edge.target.toString(),
        target: edge.source.toString(),
        weight: edge.weight
      }
    };
  }
}
