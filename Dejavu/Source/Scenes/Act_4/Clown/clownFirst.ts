namespace Dejavu {
  export async function clownFirst(): ƒS.SceneReturn {
    console.log("divineFirst: starting");

    // SPEECH
    let text = {
      Rosi: {
        R2: "hihi nein danke, auch wenn ich mir sicher bin, dass das ein fantastischer Trick ist, hätten wireine etwas ernstere Frage",
       
        R5_A: "Oh wow, das ist aber sehr mutig, dich gegen die Familie zu stellen. Meine Urgroßmutter war auch so mutig",
        R7_A: "Ja das war sie...",

        R2_C: "Ja der Mord an meiner Urgroßmutter Rosalia",
        R8_C: "Oh danke, dass sind sehr wichtige Informationen",
      },
      PIC: {
        P5: "Klar! Clowns sind doch die Allwissenden auf einem Zirkus",

        P4_B: "Ehm ich glaube wir haben es verstanden, Danke wir werden bestimmt... mal darauf zurück .... kommen",

        P16: "Wen möchtest du als nächstes Fragen?",
        P17: "Ich glaube aber, dass wir nur noch eine Person fragen können...der Zirkus macht bald zu.",
      },
      Clown: {
        C1: "Halli Hallo liebe Gäste, wollte ihr ein Zaubertrick sehen?",
        C3: "Oh und da kommt ihr als erstes zu mir?",
        C4: "Sonst werde ich hier nicht wirklich ernst genommen",
        C6: " Ach pshhh da werde ich ja ganz rot.",
        C7: "Welche Frage wollt ihr mir denn stellen?",

        C1_A: "Oh nein, ich bin der erste aus der Familie der so etwas macht",
        C2_A: "Mein Opa fand Zirkusse immer ganz schrecklich!",
        C3_A: "Aber Opa Julius weiß nicht, dass mir sein Wissen über Seile hilft, die Luftballons in tolle Figuren zubinden.",
        C4_A: "hihihihi wenn er das wüsste, würde er sich in seinem Grab umdrehen",
        C6_A: "Deine Urgroßmutter war bestimmt eine tolle Frau!",
        C8_A: "So jetzt muss ich aber weiter! Tschüsseli",

        C1_B: "Ja als kleines Kind fand ich es schon immer toll Menschen zum lachen zu bringen... Aber vor kurzem habe ich meine Leidenschaft für Finanzen gefunden.",
        C2_B: "Ich möchte mich Selbstständig mache... aber pssst keinem erzählen!",
        C3_B:
        "Hier ist meine Karte falls ihr mal einen Finanzberater braucht oder jemanden kennt der jemanden braucht oder die jemanden kennen die jemand baucht oder die ...",
        C5_B:
        "Klar, einen Tipp habe ich aber noch",
        C6_B: "Wenn ihr die Wahrsagerin fragt, würde ich euch nicht empfehlen sie in die Vergangenheit schauen zu lassen. Das endet nie gut für alle beteiligten",

        C1_C: "hmm ein Mord?",
        C3_C: "ich bin leider noch nicht lange bei diesem Zirkus... lass mich überlegen",
        C4_C: "Ich glaube ich habe mal die Wahrsagerin und den Direktor mit einander sprechen lassen, dass sie mich eigentlich gar nicht einstellen wollen, weil ich von außerhalb komme",
        C5_C: "Die hatten wohl früher mal ein Problem mit einer Seiltänzerin die für Schwierigkeiten gesorgt hat.",
        C6_C: "Irgendwas mit... Sie musste beseitigt werden.",
        C7_C: "Ich habe mir nie darüber Gedanken gemacht... war nur froh, dass sie mich doch eingestellt haben",
        C9_C: "hihi gerne... auf Wiedersehen",

      },
    };

    // CHOICES
    let choicesAskingClown = {
      murder: "Weißt du etwas von einem Mord im Zirkus?",
      job: "Wolltest du schon immer Clown werden?",
      family: "Reist deine Familie schon länger mit diesem Zirkus mit?",
    };
    let choicesAskingSeconde = {
      Divine: "Wahrsagerin",
      Director: "Direktor",
    };

    //ClueOne
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.circus, 0.5, true);
    await ƒS.Location.show(locations.Clownroom);
    await ƒS.update(2);
    await ƒS.Character.show(
      characters.PIC,
      characters.PIC.pose.normal,
      ƒS.positionPercent(70, 90)
    );
    await ƒS.update(2);
    await ƒS.Character.show(
      characters.Clown,
      characters.Clown.pose.schelmisch,
      ƒS.positionPercent(30, 90)
    );
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Clown, text.Clown.C1);
    await ƒS.Speech.tell("Rosi", text.Rosi.R2);
    await ƒS.Speech.tell(characters.Clown, text.Clown.C3);
    await ƒS.Speech.tell(characters.Clown, text.Clown.C4);
    await ƒS.Speech.tell(characters.PIC, text.PIC.P5);
    await ƒS.Speech.tell(characters.Clown, text.Clown.C6);
    await ƒS.Speech.tell(characters.Clown, text.Clown.C7);
  
    let choiceAskingClown = await ƒS.Menu.getInput(choicesAskingClown,"choices");
    switch (choiceAskingClown) {
      case choicesAskingClown.family:
        await ƒS.Speech.tell(characters.Clown, text.Clown.C1_A);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C2_A);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C3_A);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C4_A);
        await ƒS.Speech.tell("Rosi", text.Rosi.R5_A);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C6_A);
        await ƒS.Speech.tell("Rosi", text.Rosi.R7_A);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C8_A);
      break;

      case choicesAskingClown.job:
        await ƒS.Speech.tell(characters.Clown, text.Clown.C1_B);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C2_B);
        await ƒS.Location.show(locations.ClownroomCard);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C3_B);
        await ƒS.Speech.tell(characters.PIC, text.PIC.P4_B);
        await ƒS.Location.show(locations.Clownroom);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C5_B);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C6_B);     
        break;

      case choicesAskingClown.murder:
        await ƒS.Speech.tell(characters.Clown, text.Clown.C1_C);
        await ƒS.Speech.tell("Rosi", text.Rosi.R2_C);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C3_C);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C4_C);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C5_C);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C6_C);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C7_C);
        await ƒS.Speech.tell("Rosi", text.Rosi.R8_C);
        await ƒS.Speech.tell(characters.Clown, text.Clown.C9_C);
        break;
    }
    await ƒS.Character.hide(characters.Clown);
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.CircusNow);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.PIC, text.PIC.P16);
    await ƒS.Speech.tell(characters.PIC, text.PIC.P17);
    let choiceAskingSeconde = await ƒS.Menu.getInput(
      choicesAskingSeconde,
      "choices"
    );
    switch (choiceAskingSeconde) {
      case choicesAskingSeconde.Divine:
        return "DivineSeconde";
      case choicesAskingSeconde.Director:
        return "DirectorSeconde";
    }
  }
}
