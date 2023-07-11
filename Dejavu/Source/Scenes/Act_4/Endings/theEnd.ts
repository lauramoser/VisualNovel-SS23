namespace Dejavu {
    export async function end(): ƒS.SceneReturn {
      console.log("end scene: starting");

      ƒS.Character.hideAll();
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.Black);
      await ƒS.update(2);
    }
  }
  