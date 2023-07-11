namespace Dejavu {
  export async function neutralEnding(): ƒS.SceneReturn {
    console.log("neutralEnding scene: starting");

    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.Psychiatry);
    await ƒS.update(2);
    await ƒS.Text.print(
      "<div class='novelpage'>Nach einer Weile ist es Rosalia immer schwerer geworden ihre Träume zu ignorieren und sie wurden immer intensiver. <br> Irgendwann ist Rosalia schweißnass in die Küche gekommen und ihre Mutter hat entschieden, dass das so nicht weiter gehen kann. <br> Nach ein paar Sitzungen wurde Rosi als schizophren diagnostiziert und in eine Psychatrie eingewiesen</div>"
    );
    return "End";
  }
}
