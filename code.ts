figma.showUI(__html__, { width: 500, height: 500, title: "File orangizer" });
figma.ui.onmessage = (data) => {
    let archiveChecked = data[0];
    let coverChecked = data[1];
    let coverTitle = data[2];
    let UIdesigner = data[3];
    let UXdesigner = data[4];
    let desc = data[5];
    let project = data[6];
    let releaseChecked = data[7];
    let tobeChecked = data[8];
    let quarter = data[9];
    let year = data [10];
    let coverkey = '2c80a7c879f421331226276dfbb9c6b878a99061';
    let projectKey = '6640a7fc89ec988a7214d13fb90641de03d69a1a'

    createCover(coverkey, coverTitle, project, coverChecked);
    createInfo(projectKey, UIdesigner, UXdesigner, desc);
    createReleaseSection(releaseChecked, quarter, year);
    createToBeSection(tobeChecked);
    creatArchive(archiveChecked);
};;

async function createCover(coverkey, coverTitle, project, coverChecked) {
  if(coverChecked === true){
    let importComponent = await figma.importComponentByKeyAsync(coverkey);
   let instance = importComponent.createInstance();
   
   instance.setProperties({         
     'title#10694:0' : coverTitle,
     'Project#10718:5': project
    });

    let frame = figma.createFrame();
    frame.resize(1280,640);
    frame.name = "cover";
    frame.appendChild(instance);
    figma.setFileThumbnailNodeAsync(frame)

    figma.currentPage.name = 'Cover';
  }
}

async function createInfo(projectKey, UIdesigner, UXdesigner, desc) {
     let importComponent = await figma.importComponentByKeyAsync(projectKey);
     let instance = importComponent.createInstance();

      instance.setProperties({         
        'Description#11237:0' : desc,
        'UI-designer#11237:2': UIdesigner,
        'UX-designer#11237:1': UXdesigner,
        'Business#11237:3': '/',
        'Feature-designer#11237:4': '/',
        'Solution designer#11237:5': '/'
       });

       instance.x = 1380;
  }

  function creatArchive(archiveChecked){
    if(archiveChecked === true){
      let dividerPage = figma.createPage();
      dividerPage.name = '-----------------------------------';
      let archivePage = figma.createPage();
      archivePage.name = 'Archive';
    }
  }

  function createToBeSection(tobeChecked){
    if(tobeChecked === true){
      let dividerPage = figma.createPage();
        dividerPage.name = '-----------------------------------';
      let toBe = figma.createPage();
      toBe.name = 'TO-BE'
    }
  }

  function createReleaseSection(releaseChecked, quarter, year){
    if(releaseChecked === true){
      let dividerPage = figma.createPage();
        dividerPage.name = '-----------------------------------';
      let release = figma.createPage();
      release.name = 'Release';
      let ChildPage = figma.createPage();
      console.log(quarter, year);
      ChildPage.name = ' ⌙ ' + year + "." + quarter;
    }
  }