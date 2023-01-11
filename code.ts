
figma.showUI(__html__, { width: 400, height: 400, title: "File orangizer" });

figma.ui.onmessage = (data) => {
  let archive = data[0];
  let cover = data[1];
  let coverTitle = "lorem ipsum";

  if(cover === true){
   createCover(coverTitle);
  }
}

function createCover(title: string){
  //Check if Cover has been made already
  if(figma.root.children[0].name === "Cover"){
    //if cover exists -> notify user
    figma.notify('Cover already created');
  } else {
      //if no cover exists, create new page and set name
    let coverPage = figma.createPage();
    figma.root.insertChild(0, coverPage);
    figma.root.children[0].name = "Cover";

    //navigate to the newly made page
    figma.currentPage = coverPage;

    //create cover visual at cover page
    // TO BE FINALISED!!
    (async () => {
      const text = figma.createText()
    
      // Move to (50, 50)
      text.x = 0
      text.y = 0
    
      // Load the font in the text node before setting the characters
      await figma.loadFontAsync(text.fontName)
      text.characters = title;
    
      // Set bigger font size and red color
      text.fontSize = 18
      text.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]
    })()
  }
}