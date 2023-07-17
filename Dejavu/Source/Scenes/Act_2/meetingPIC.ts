namespace Dejavu {
  export async function meetingPIC(): ƒS.SceneReturn {
    console.log("meetingPIC scene: starting");

    // SPEECH
    let text = {
      Narrator: {
        A2_S4_11:
          "Du setzt dich auf die Bank und nimmst einen großen Atemzug, um die Düfte der Blumen aufzunehmen",
        A2_S4_12: "Du überlegst was du malen sollst?",

        A2_S5_01:
          "Du bist so in dein Bild vertieft, dass dir gar nicht aufgefallen ist, dass sich jemand neben dich gesetzt.hat",

        A2_S7_01_A:
          "du erzählst ihm alles was dir dein Opa über Rosalia erzählt hat und das sie plötzlich verschwunden ist.",
      },
      Rosi: {
        A2_S4_09: "Endlich wieder hier, wie ich diesen Garten vermisst habe",
        A2_S4_10: "Perfekt, meine Lieblingsbank ist frei",

        A2_S5_02:
          "Huch...Ach du meine Güte hast du mich erschrocken!.... Wie lange sitzt du denn schon hier?",
        A2_S5_05:
          "Vielleicht ein bisschen hihihihi... aber es freut mich dich zu sehen   ",

        A2_S5_07_A:
          "Nein, das soll meine Urgroßmutter sein, ich sehe ihr nur sehr ähnlich, außer dass sie viel Hübscher ist als ich",

        A2_S5_05_B: "Danke",

        A2_S6_01_A:
          "Mein Opa ist gestern verstorben... dementsprechend bin ich eher etwas betrübt.",
        A2_S6_03_A:
          "Ja schon, da ich seiner Mutter sehr ähnliche sehe hat er mich immer etwas bevorzugt.",
        A2_S6_01_B:
          "ganz ok eigentlich, nichts besonderes... und wie geht es dir? ",

        A2_S7_02_B: "Gleichfalls, machs gut ",
        A2_S8_01:
          "30.August 1887. Rosalia musste heute etwas länger arbeiten, deswegen habe ich auf unseren kleinen Jungen aufgepasst. Um seiner Mutter etwas näher zu sein, haben wir uns dafür entschieden den Abend im Blumengarten zu verbringen und sie dort zu treffen. Wir haben gewartet und gewartet, doch sie kam nicht. Nach einer Weile, wurde unser Junge quenglig und müde und wir sind nach Hause gegangen.",
        A2_S8_02:
          "Sie ist seitdem nicht nach Hause gekommen... Ich mache mir Sorgen. Ich hoffe Sie ist nicht mit diesem Julius abgehauen, das wird sie mir sonst noch büßen.",
      },
      PIC: {
        A2_S5_03:
          "Schon ein Weile.... Ich hab dir ein bisschen beim zeichnen zu geschaut.",
        A2_S5_04: "Ich hoffe du findest das jetzt nicht komisch",

        A2_S5_06_A: "Bist du das auf deiner Zeichnung?",
        A2_S5_08_A: "Ich finde dich auch sehr hübsch",

        A2_S5_04_B: "mir gefällt deine Zeichnung, sieht sehr schön aus.",

        A2_S5_09: "Wie geht es dir?",

        A2_S6_02_A:
          "Oh das tut mir leid, mein herzliches Beileid... standest du ihm sehr nah?",
        A2_S6_02_B: "auch ganz gut",

        A2_S7_02_A:
          "Wow das klingt aber sehr spannend und nach einem großen Abenteuer.... Wenn du etwas Unterstützung brauchst, bin ich nur ein Anruf entfernt.",
        A2_S7_03_A:
          "Ich würde dann aber wieder weiter gehen.. es war schön dich wieder zu sehen Rosi",

        A2_S7_01_B:
          "Na dann, lass ich dich mal wieder alleine zeichnen... Hat mich gefreut dich wieder zu sehen Rosalia.",
      },
    };

    // CHOICES
    let choicesDraw = {
      portrait: "Ein Portrait von Rosalia",
      bee: "Die Biene die es sich gerade auf einer Rose bequem gemacht hat",
    };
    let choicesCompliment = {
      ignore: "ignorieren",
      takeCompliment: "Danke, das ist sehr nett von dir",
    };
    let choicesFeeling = {
      ok: "alles ok",
      grandpaDead: "Von Opas Tod erzählen",
    };
    let choicesDiary = {
      dontTell: "nicht erzählen",
      tell: "von Tagebuch erzählen",
    };
    let ChoicesDoingNext = {
      readingDiary: "Tagebuch weiterlesen",
      goHome: "nach Hause gehen",
    };

    document.getElementsByName("lovepoints").forEach((meterStuff) => (meterStuff.hidden = false));

    //Seconde Act
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.Flowergarden);
    await ƒS.update(
      transitions.hearts.duration,
      transitions.hearts.alpha,
      transitions.hearts.edge
    );
    await ƒS.Speech.tell("Rosi", text.Rosi.A2_S4_09);
    await ƒS.Speech.tell("Rosi", text.Rosi.A2_S4_10);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A2_S4_11);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A2_S4_12);
    let choiceDraw = await ƒS.Menu.getInput(choicesDraw, "choices");
    switch (choiceDraw) {
      case choicesDraw.portrait:
        dataForSave.lifepoints -= 10;
        handleFlower();
        break;
      case choicesDraw.bee:
        dataForSave.lifepoints += 10;
        handleFlower();
        break;
    }
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A2_S5_01);
    await ƒS.Character.show(
      characters.PIC,
      characters.PIC.pose.normal,
      ƒS.positionPercent(50, 90)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell("Rosi", text.Rosi.A2_S5_02);
    await ƒS.Speech.tell("stiller Beobachter", text.PIC.A2_S5_03);
    await ƒS.Speech.tell("stiller Beobachter", text.PIC.A2_S5_04);
    await ƒS.Speech.tell("Rosi", text.Rosi.A2_S5_05);
    let name: string = await ƒS.Speech.getInput();
    dataForSave.partnerInCrimeName = name;
    characters.PIC.name = name;

    switch (choiceDraw) {
      case choicesDraw.portrait:
        await ƒS.Speech.tell(characters.PIC, text.PIC.A2_S5_06_A);
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S5_07_A);
        await ƒS.Speech.tell(characters.PIC, text.PIC.A2_S5_08_A);
        let choiceCompliment = await ƒS.Menu.getInput(
          choicesCompliment,
          "choices"
        );
        switch (choiceCompliment) {
          case choicesCompliment.ignore:
            break;
          case choicesCompliment.takeCompliment:
            dataForSave.lovepoints += 20;
            break;
        }
        break;
      case choicesDraw.bee:
        await ƒS.Speech.tell(characters.PIC, text.PIC.A2_S5_04_B);
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S5_05_B);
        break;
    }
    await ƒS.Speech.tell(characters.PIC, text.PIC.A2_S5_09);

    let choiceFeeling = await ƒS.Menu.getInput(choicesFeeling, "choices");
    switch (choiceFeeling) {
      case choicesFeeling.ok:
        dataForSave.lifepoints -= 10;
        handleFlower();
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S6_01_B);
        await ƒS.Speech.tell(characters.PIC, text.PIC.A2_S6_02_B);
        break;
      case choicesFeeling.grandpaDead:
        dataForSave.lifepoints += 10;
        handleFlower();
        dataForSave.lovepoints += 20;
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S6_01_A);
        await ƒS.Speech.tell(characters.PIC, text.PIC.A2_S6_02_A);
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S6_03_A);
        break;
    }
    let choiceDiary = await ƒS.Menu.getInput(choicesDiary, "choices");
    switch (choiceDiary) {
      case choicesDiary.dontTell:
        dataForSave.lifepoints -= 10;
        handleFlower();
        await ƒS.Speech.tell(characters.PIC, text.PIC.A2_S7_03_A);
        await ƒS.Speech.tell("Rosi",text.Rosi.A2_S7_02_B + dataForSave.partnerInCrimeName + ".");
        await ƒS.Character.hideAll();
        await ƒS.update(1);
        break;
      case choicesDiary.tell:
        dataForSave.lifepoints += 10;
        handleFlower();
        dataForSave.lovepoints += 20;
        await ƒS.Speech.tell(undefined, text.Narrator.A2_S7_01_A);
        await ƒS.Speech.tell(characters.PIC, text.PIC.A2_S7_02_A);
        await ƒS.Speech.tell(characters.PIC, text.PIC.A2_S7_03_A);
        await ƒS.Character.hideAll();
        await ƒS.update(1);
        break;
    }
    await ƒS.Speech.tell(undefined, "Du überlegst was du als nächstes machst");
    let ChoiceDoingNext = await ƒS.Menu.getInput(ChoicesDoingNext, "choices");
    switch (ChoiceDoingNext) {
      case ChoicesDoingNext.goHome:
        dataForSave.lifepoints -= 10;
        handleFlower();
        return "ArrivingAtHome";
      case ChoicesDoingNext.readingDiary:
        dataForSave.lifepoints += 10;
        handleFlower();
        await ƒS.Location.show(locations.FlowergardenDiary);
        await ƒS.update(0);
        await ƒS.Speech.tell("Rosi lesend", text.Rosi.A2_S8_01);
        await ƒS.Speech.tell("Rosi lesend", text.Rosi.A2_S8_02);
        ƒS.Speech.hide();
        await ƒS.update(1);
        return "ArrivingAtHome";
    }
  }
}
