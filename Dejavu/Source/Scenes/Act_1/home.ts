namespace Dejavu {
  export async function home(): ƒS.SceneReturn {
    console.log("home scene: starting");

    // SPEECH
    let text = {
      Narrator: {
        A1_S1_01:
          "Als du in einer langweiligen Vorlesung sahst, hast du plötzlich einen Anruf von deiner Mutter bekommen.",
        A1_S1_02:
          "Das ist sehr ungewöhnlich, weil deine Mutter eigentlich genau weiß, dass du um die Uhrzeit meist in der Uni sitzt.",
        A1_S1_03:
          "In dem Telefonat erzählt sie dir, dass dein Opa heute gestorben ist... er aber friedlich eingeschlafen ist und laut Arzt keine Schmerzen hatte.",
        A1_S1_04:
          "Das trifft dich hart und du fährst direkt nach der Vorlesung in deine Heimatstadt.",

        A1_S4_01:
          "Du hilfst deiner Familie die Sachen deines Opas durchzugehen und in Kartons zu packen.",
        A1_S4_02: "Nach einer Weile fällt dir ein kleines Buch auf.",
        A1_S4_05:
          "Du schaust dich um, ob dich gerade jemand beobachtet, aber es sind alle gerade auf ihre eigenen Arbeit fokusiert",

        A1_S5_01_B:
          "Nachdem du und deine Familie zusammengepackt habt, entscheidest du dich dafür ins Bett zu gehen um morgen früh fit in den Tag zu starten.",
        A1_S5_02_B: "Huch was ist denn das?",
      },

      Rosi: {
        A1_S1_05:
          "<i>Endlich Zuhause... Ich hoffe, Opa hatte ein erfülltes Leben </i>",
        A1_S1_06:
          "<i>Ich habe Opa immer gerne besucht, auch als er schon senil war, hatte ich das Gefühl, dass er mich immer sofort wiedererkannt hat.</i>",
        A1_S1_07:
          "<i>Da ich seiner Mutter und meiner Urgroßmutter sehr ähnlich sehe, hatten wir schon immer eine besondere Beziehung.</i>",
        A1_S1_08:
          "<i>Er hatte nicht mehr als Geschichten über sie, denn seine Mutter Rosalia ist verschwunden, als er zwei Jahre alt war... und Opa hing sehr an den Geschichten die sein Vater ihm erzählt hat.</i>",
        A1_S1_09:
          "<i>Wir haben uns immer zusammen vorgestellt wie sie war... und bei einem waren wir uns einig... Ich hab nur ihr Aussehen geerbt und ihren Namen! </i>",
        A1_S1_10:
          "<i>Rosalia schien sehr wild und abenteuerlustig zu sein... Ich bin eher das Gegenteil davon.</i>",

        A1_S2_01:
          "<i>Aber wir haben nie darüber gesprochen, was mit ihr passiert ist und warum die verschwunden ist.</i>",
        A1_S2_02:
          "<i>Wahrscheinlich ist es zu schmerzhaft, darüber nachzudenken, geschweige denn darüber zu sprechen.</i>",
        A1_S2_03:
          "<i>Es ist schon verrückt, wie ein Mensch, der in der einen Sekunde noch da war und in der nächsten verschwunden ist. </i>",

        A1_S3_03:
          "Hallo Mama, den Umständen entsprechend... aber ich glaube Großvater wollte nicht mehr weiterkämpfen.",
        A1_S3_04:
          "Und wer weiß, vielleicht trifft er jetzt seine Mutter Rosalia.",

        A1_S4_03: "<i> Huch... was ist den das? </i>",
        A1_S4_04:
          "<i> Das sieht nach einem Tagebuch aus... kann es das Tagebuch von Großvater sein, von dem Opa immer erzählt hat? </i>",
        A1_S4_06:
          "<i>Wenn das Mama sieht, wird sie es mir bestimmt wegnehmen</i>",
        A1_S4_07: "<i> Soll ich es trotzdem mitnehmen? </i>",

        A1_S5_01_A:
          "Hey Mama, ich bin echt kaputt von der Heimfahrt, ist es ok, wenn ich in mein Zimmer gehen würde und mich schon ins Bett legen würde?",
        A1_S5_02_A:
          "<i>Opa hat mir zwar schon immer viel von Rosalia erzählt, aber sie aus den Augen von Großvater zu sehen... Ich bin gespannt was mich erwartet.</i>",
        A1_S5_03_A:
          "<i>Wow, so sah <strong> MEINE </strong> Großmutter aus?! Sie ist wunderschön</i>",
        A1_S5_04_A:
          "<i>Ich sehe ihr wirklich sehr ähnlich. Sogar mein Muttermal ist an der gleichen Stelle... Da hat das Universum aber auch nur copy und paste gemacht.</i>",
        A1_S5_05_A:
          "Rosalia hat mir heute mal wieder beim arbeiten zu geschaut. Sie sagt zwar immer, dass sie einfach nur gerne im Blumengarten ist aber dafür hat sie ein bisschen viel Bilder von mir gemacht. Als sie kurz abgelenkt war hab ich sie ihr klauen können und konnte dieses wunderschöne Bild von ihr schießen.",
        A1_S5_06_A:
          "Sie ist einfach eine einzigartige Frau. Durch das Bild allein spüre ich ihr Selbstbewusstsein. Das ich diese Frau an meiner Seite haben darf...",
        A1_S5_07_A:
          "<i> Jetzt bin ich aber wirklich müde, Großmutter scheint eine sehr interessante Person gewesen zu sein. Ich hätte sie gerne kennengelernt...",

        A1_S5_02_B: "Wie.., Wie.. kommt den das hier her?",
        A1_S5_03_B:
          "Ist das etwa das Tagebuch?... Ich hab das doch wieder zurückgelegt",
        A1_S5_04_B:
          "Naja, wenn es schon hier liegt, dann kann ich vielleicht doch ein bisschen im Leben anderer herumschnüffeln",
      },

      Mom: {
        A1_S3_01: "Hallo mein kleiner Spatz",
        A1_S3_02:
          "Schön, dass du früher nach Hause gekommen bist. Wie geht es dir?",

        A1_S3_05: "Oh ja, das wäre schön, oder? Ich würde es ihm wünschen!",
        A1_S3_06:
          "Hilfst du uns beim Packen? Wir wollen heute noch das Wohnzimmer fertig machen.",

        A1_S5_02_A:
          "Ja aber natürlich mein Schatz, ruh dich aus... Wir sehen uns dann morgen früh.",
      },
    };

    // CHOICES
    let choicesTakeDiary = {
      takeDiary: "Ja, Das merkt Mama bestimmt nicht!",
      layBack: "Nein, man steckt seine Nase nicht in fremde Tagebücher!",
    };

    //Erster Akt
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.Uni);
    await ƒS.update(1);
    ƒS.Sound.play(sounds.crowdTalking, 0.5, true);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A1_S1_01);
    ƒS.Sound.play(sounds.phoneRinging, 0.5, true);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A1_S1_02);
    ƒS.Sound.fade(sounds.phoneRinging,0,1);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A1_S1_03);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A1_S1_04);
    ƒS.Sound.fade(sounds.crowdTalking, 0, 1);
    await ƒS.Location.show(locations.Hallway);
    await ƒS.update(1);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S1_05);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S1_06);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S1_07);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S1_08);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S1_09);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S1_10);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S2_01);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S2_02);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S2_03);

    await ƒS.Location.show(locations.livingroom);
    await ƒS.update(1);
    await ƒS.Character.show(
      characters.Mom,
      characters.Mom.pose.smiling,
      ƒS.positionPercent(50, 90)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Mom, text.Mom.A1_S3_01);
    await ƒS.Speech.tell(characters.Mom, text.Mom.A1_S3_02);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S3_03);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S3_04);
    await ƒS.Speech.tell(characters.Mom, text.Mom.A1_S3_05);
    await ƒS.Speech.tell(characters.Mom, text.Mom.A1_S3_06);
    await ƒS.Character.hide(characters.Mom);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A1_S4_01);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A1_S4_02);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S4_03);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S4_04);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A1_S4_05);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S4_06);
    await ƒS.Speech.tell("Rosi", text.Rosi.A1_S4_07);
    let choiceTakeDiary = await ƒS.Menu.getInput(choicesTakeDiary, "choices");
    switch (choiceTakeDiary) {
      case choicesTakeDiary.takeDiary:
        dataForSave.lifepoints += 10;
        handleFlower();
        await ƒS.Character.show(
          characters.Mom,
          characters.Mom.pose.smiling,
          ƒS.positionPercent(50, 90)
        );
        await ƒS.update(1);
        await ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_01_A);
        await ƒS.Speech.tell(characters.Mom, text.Mom.A1_S5_02_A);
        await ƒS.Character.hide(characters.Mom);
        await ƒS.update(1);
        await ƒS.Location.show(locations.Bedroom);
        await ƒS.update(1);
        await ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_02_A);
        await ƒS.Location.show(locations.BedroomDiaryIntro);
        await ƒS.update(0);
        await ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_03_A);
        await ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_04_A);
        ƒS.Sound.play(sounds.rosiLaughing, 0.5);
        await ƒS.Speech.tell("Rosi lesend", text.Rosi.A1_S5_05_A);
        await ƒS.Speech.tell("Rosi lesend", text.Rosi.A1_S5_06_A);
        await ƒS.Location.show(locations.Bedroom);
        await ƒS.update(0);
        await ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_07_A);
        await ƒS.Location.show(locations.Black);
        await ƒS.update(
          transitions.blinkClose.duration,
          transitions.blinkClose.alpha,
          transitions.blinkClose.edge
        );
        ƒS.Speech.hide();
        return "ClueOne";
      case choicesTakeDiary.layBack:
        dataForSave.lifepoints -= 10;
        ƒS.Sound.play(sounds.packing, 0.5);
        await ƒS.Speech.tell(characters.Narrator, text.Narrator.A1_S5_01_B);
        ƒS.Sound.fade(sounds.packing, 0, 1);
        ƒS.Speech.hide();
        await ƒS.update(1);
        await ƒS.Location.show(locations.Bedroom);
        await ƒS.update(1);
        await ƒS.Location.show(locations.Black);
        await ƒS.update(
          transitions.blinkClose.duration,
          transitions.blinkClose.alpha,
          transitions.blinkClose.edge
        );
        await ƒS.Location.show(locations.Bedroom);
        await ƒS.update(
          transitions.blinkOpen.duration,
          transitions.blinkOpen.alpha,
          transitions.blinkOpen.edge
        );
        await ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_02_B);
        await ƒS.Location.show(locations.BedroomDiary);
        await ƒS.update(0);
        await ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_03_B);
        await ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_04_B);
        await ƒS.Location.show(locations.BedroomDiaryIntro);
        await ƒS.update(0);
        await ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_03_A);
        await ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_04_A);
        ƒS.Sound.play(sounds.rosiLaughing, 0.5);
        await ƒS.Speech.tell("Rosi lesend", text.Rosi.A1_S5_05_A);
        await ƒS.Speech.tell("Rosi lesend", text.Rosi.A1_S5_06_A);
        await ƒS.Location.show(locations.Bedroom);
        await ƒS.update(0);
        break;
    }
  }
}
