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
    let coverTitle = data[2];
    let UIdesigner = data[3];
    let UXdesigner = data[4];
    let desc = data[5];
    let project = data[6];
    let coverkey = '2c80a7c879f421331226276dfbb9c6b878a99061';

    createCover(coverkey, coverTitle, project);
};

async function createCover(coverkey, coverTitle, project) {
    let importComponent = await figma.importComponentByKeyAsync(coverkey);
    let instance = importComponent.createInstance();

    instance.setProperties({
        'title#10694:0' : coverTitle,
        'Project#10718:5': project
    });

}

