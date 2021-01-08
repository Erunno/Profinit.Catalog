export const edgeStyle: cytoscape.Css.Edge = {
  width: 1,
  // @ts-ignore
  opacity: 'data(weight)',
  'line-color': '#BC3732',
  'target-arrow-shape': 'none',
  'curve-style': 'bezier',
};
