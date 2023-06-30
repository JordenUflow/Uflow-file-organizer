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
figma.showUI(__html__, { width: 500, height: 400, title: "File orangizer" });
figma.ui.onmessage = (data) => {
    let archiveChecked = data[0];
    let coverChecked = data[1];
    let coverTitle = data[2];
    let UIdesigner = data[3];
    let UXdesigner = data[4];
    let desc = data[5];
    let project = data[6];
    let coverkey = '2c80a7c879f421331226276dfbb9c6b878a99061';
    let projectKey = '6640a7fc89ec988a7214d13fb90641de03d69a1a';
    createCover(coverkey, coverTitle, project, coverChecked);
    createInfo(projectKey, UIdesigner, UXdesigner, desc);
    creatArchive(archiveChecked);
};
;
function createCover(coverkey, coverTitle, project, coverChecked) {
    return __awaiter(this, void 0, void 0, function* () {
        if (coverChecked === true) {
            let importComponent = yield figma.importComponentByKeyAsync(coverkey);
            let instance = importComponent.createInstance();
            instance.setProperties({
                'title#10694:0': coverTitle,
                'Project#10718:5': project
            });
            let frame = figma.createFrame();
            frame.resize(1280, 640);
            frame.name = "cover";
            frame.appendChild(instance);
            figma.setFileThumbnailNodeAsync(frame);
            figma.currentPage.name = 'Cover';
        }
    });
}
function createInfo(projectKey, UIdesigner, UXdesigner, desc) {
    return __awaiter(this, void 0, void 0, function* () {
        let importComponent = yield figma.importComponentByKeyAsync(projectKey);
        let instance = importComponent.createInstance();
        instance.setProperties({
            'Description#11237:0': desc,
            'UI-designer#11237:2': UIdesigner,
            'UX-designer#11237:1': UXdesigner,
            'Business#11237:3': '/',
            'Feature-designer#11237:4': '/',
            'Solution designer#11237:5': '/'
        });
        instance.x = 1380;
    });
}
function creatArchive(archiveChecked) {
    if (archiveChecked === true) {
        let archivePage = figma.createPage();
        archivePage.name = 'Archive';
    }
}
