"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 400, height: 400, title: "File orangizer" });
figma.ui.onmessage = (data) => {
    let archive = data[0];
    let cover = data[1];
    let coverTitle = "lorem ipsum";
    if (cover === true) {
        createCover(coverTitle);
    }
};
function createCover(title) {
    //Check if Cover has been made already
    if (figma.root.children[0].name === "Cover") {
        //if cover exists -> notify user
        figma.notify('Cover already created');
    }
    else {
        //if no cover exists, create new page and set name
        let coverPage = figma.createPage();
        figma.root.insertChild(0, coverPage);
        figma.root.children[0].name = "Cover";
        //navigate to the newly made page
        figma.currentPage = coverPage;
        //create cover visual at cover page
        // TO BE FINALISED!!
        (() => __awaiter(this, void 0, void 0, function* () {
            const text = figma.createText();
            // Move to (50, 50)
            text.x = 0;
            text.y = 0;
            // Load the font in the text node before setting the characters
            yield figma.loadFontAsync(text.fontName);
            text.characters = title;
            // Set bigger font size and red color
            text.fontSize = 18;
            text.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }];
        }))();
    }
}
