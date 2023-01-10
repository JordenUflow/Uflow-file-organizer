
figma.showUI(__html__);

figma.ui.onmessage = (message) => {
  console.log("message from ui", message);
  
  figma.createPage().name = 'Cover';
  figma.createPage().name = '-------------';
  figma.createPage().name = 'Design';
  figma.createPage().name = '⌙ test page';

  if(message == true) {
    figma.createPage().name = '-------------';
    figma.createPage().name = 'archive';
  }

  figma.notify('structure added');
}