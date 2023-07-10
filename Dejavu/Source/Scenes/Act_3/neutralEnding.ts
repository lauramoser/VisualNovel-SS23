namespace Dejavu {
  export async function neutralEnding(): ƒS.SceneReturn {
    console.log("neutralEnding scene: starting");

    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.Psychiatry);
    await ƒS.update(2);
    await ƒS.Text.print(
      "<div class='novelpage'><h1>VERSCHWUNDEN</h1>Es werden zwei Jugendliche vermisst. Zuletzt wurden sie im Zirkus gesichtet, der kurz nach ihrem verschwinden die Stadt verlassen hat. Rufen Sie die Polizei an, wenn sie etwas wissen!</div>"
    );
  }
}
