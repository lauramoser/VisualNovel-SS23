namespace Dejavu {
  export async function firstMorning(): ƒS.SceneReturn {
    console.log("firstMorning scene: starting");

    // SPEECH
    let text = {
      Narrator: {
        A2_S2_01: "Du ziehst dich an um runter zu deiner Familie zu gehen",

        A2_S4_11:
          "Du setzt dich auf die Bank und nimmst einen großen Atemzug, um die Düfte der Blumen aufzunehmen",
        A2_S4_12: "Du überlegst was du malen sollst?",

        A2_S5_13: "Du vertiefst dich in deine Zeichnung und vergisst die Zeit.",
        A2_S5_18: "Nachdem du mit der Zeichnung fertig geworden bist, fällt dir auf das es langsam spät geworden ist und du nach Hause gehen solltest.",
      },
      Rosi: {
        A2_S2_03: "Ehm ja ich denke",

        A2_S3_05_A: "Mhmm das war lecker Mama, danke",
        A2_S3_06:
          "Ich würde gerne in den Blumengarten gehen und ein bisschen Zeichnen",
        A2_S3_08: "Mach ich, bis dann!",

        A2_S4_09: "Endlich wieder hier, wie ich diesen Garten vermisst habe",
        A2_S4_10: "Perfekt, meine Lieblingsbank ist frei",

        A2_S5_14: "Oh hi <br>",
        A2_S5_16: "Ehm.... eigentlich würde ich gerne etwas Zeit für mich haben... sei mir nicht böse",
      },
      Mom: {
        A2_S2_02: "Guten Morgen Rosi, hast du gut geschlafen?",
        A2_S2_04: "Soll ich dir etwas zum Frühstück vorbereiten?",
        A2_S3_07: "Alles klar mein Schatz, pass auf dich auf",
      },
      PIC: {
        A2_S5_13: "Oh hi Rosi, lange nicht mehr gesehen.",
        A2_S5_15: "darf ich mich zu dir setzen?",
        A2_S5_17: "Oh.... ehm.... ja klar... dann bis bald.... und herzliches Beileid noch",
      }
    };

    // CHOICES
    let choicesBreakfast = {
      nobreakfast: "Nein danke, ich habe gerade keinen großen Hunger",
      apple: "nur einen Apfel bitte",
      egg: "Ja gerne, würdest du mir ein Spiegelei zubereiten?",
    };
    let choicesDraw = {
      portrait: "Ein Portrait von Rosalia",
      bee: "Die Biene die es sich gerade auf einer Rose bequem gemacht hat",
    };

    //Zweiter Akt
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.Bedroom);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A2_S2_01);
    await ƒS.Location.show(locations.Kitchen);
    await ƒS.update(2);
    await ƒS.Character.show(
      characters.Mom,
      characters.Mom.pose.smiling,
      ƒS.positionPercent(50, 90)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Mom, text.Mom.A2_S2_02);
    await ƒS.Speech.tell("Rosi", text.Rosi.A2_S2_03);
    await ƒS.Speech.tell(characters.Mom, text.Mom.A2_S2_04);

    //Breakfast Choice
    let choiceBreakfast = await ƒS.Menu.getInput(choicesBreakfast, "choices");
    switch (choiceBreakfast) {
      case choicesBreakfast.egg:
        dataForSave.lifepoints -= 10;
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S3_05_A);
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S3_06);
        await ƒS.Speech.tell(characters.Mom, text.Mom.A2_S3_07);
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S3_08);
        ƒS.Speech.hide();
        await ƒS.Character.hide(characters.Mom);
        await ƒS.update(1);
        await ƒS.Location.show(locations.Flowergarden);
        await ƒS.update(2);
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S4_09);
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S4_10);
        await ƒS.Speech.tell(characters.Narrator, text.Narrator.A2_S4_11);
        await ƒS.Speech.tell(characters.Narrator, text.Narrator.A2_S4_12);

        //Drawing Choice
        let choiceDraw1 = await ƒS.Menu.getInput(choicesDraw, "choices");
        switch (choiceDraw1) {
          case choicesDraw.portrait:
            dataForSave.lifepoints -= 10;
            break;
          case choicesDraw.bee:
            dataForSave.lifepoints += 10;
            break;
        }
        await ƒS.Speech.tell(characters.Narrator, text.Narrator.A2_S5_13);
        await ƒS.Speech.tell("", text.PIC.A2_S5_13);
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S5_14);
        let name: string = await ƒS.Speech.getInput();
        dataForSave.partnerInCrimeName = name;
        characters.PIC.name = name;
        await ƒS.Speech.tell(characters.PIC, text.PIC.A2_S5_15);
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S5_16);
        await ƒS.Speech.tell(characters.PIC, text.PIC.A2_S5_17);
        await ƒS.Speech.tell(characters.Narrator, text.Narrator.A2_S5_18);
        return "ArrivingAtHome";

      case choicesBreakfast.apple || choicesBreakfast.nobreakfast:
        dataForSave.lifepoints += 10;
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S3_06);
        await ƒS.Speech.tell(characters.Mom, text.Mom.A2_S3_07);
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S3_08);
        ƒS.Speech.hide();
        await ƒS.Character.hide(characters.Mom);
        await ƒS.update(1);
        await ƒS.Location.show(locations.Flowergarden);
        await ƒS.update(2);
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S4_09);
        await ƒS.Speech.tell("Rosi", text.Rosi.A2_S4_10);
        await ƒS.Speech.tell(characters.Narrator, text.Narrator.A2_S4_11);
        await ƒS.Speech.tell(characters.Narrator, text.Narrator.A2_S4_12);
        let choiceDraw2 = await ƒS.Menu.getInput(choicesDraw, "choices");
        switch (choiceDraw2) {
          case choicesDraw.portrait:
            dataForSave.lifepoints -= 10;
            break;
          case choicesDraw.bee:
            dataForSave.lifepoints += 10;
            break;
        }
        return "MeetingPIC"
    }
  }
}
