namespace Dejavu {
    export async function goodEnding(): ƒS.SceneReturn {
      console.log("GoodEnding scene: starting");
  
      ƒS.Character.hideAll();
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.Graveyard);
      await ƒS.update(2);
      ƒS.Text.addClass("novelpageDiary");
      await ƒS.Text.print("<div class='novelpage'>Hallo Opa <br> Ich habe herausgefunden, was mit deiner Mutter passiert ist. Es war Julius ihr Ex-Verlobter. Ich denke, dass er eifersüchtig war, weil Rosalia in für deinen Vater verlassen hat. <br> Ich vermisse dich <br> Deine Rosi</div>");
    }
  }