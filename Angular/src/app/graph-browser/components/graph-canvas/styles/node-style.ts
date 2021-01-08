export const nodeStyle: cytoscape.Css.Node = {
  label: 'data(name)',
  width: 80,
  height: 80,
  color: '#BC3732',
  'border-color': '#BC3732',
  'text-valign': 'bottom',
  'text-halign': 'center',
  'text-background-color': 'white',
  'text-background-opacity': .8,
  'border-width': 1,
  'background-image': 'data(pictureUrl)',
  'background-fit': 'cover',
  'background-color': 'white'
};

export const mainNodeStyle: cytoscape.Css.Node = {
  width: 150,
  height: 150,
  'border-width': 4,
};
