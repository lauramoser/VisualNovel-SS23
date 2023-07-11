namespace Dejavu {
  export async function badEnding(): ƒS.SceneReturn {
    console.log("BadEnding scene: starting");

    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.Newspaper);
    await ƒS.update(2);
    await ƒS.Text.print("<div class='novelpage'><h1>VERMISST</h1>Seit Samstag 25.06.2022 werden zwei Jugendliche vermisst. <br> Sie wurden zuletzt in dem Zikrus in der Stadt gesehen. <br> Wenn Sie etwas wissen, rufen sie bitte 02934/290342 an!</div>");
    return "End";
  }
}
