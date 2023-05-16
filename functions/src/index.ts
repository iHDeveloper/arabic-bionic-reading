import { onRequest } from "firebase-functions/v2/https";

export const generateArabicBionic = onRequest((req, res) => {
  const result = transform(req.body.text);
  res.send({ pages: [result] });
});

function transform(text: string) {
  let bionicText = "";
  let textArray = text.split(" ");
  let outputArray = [];
  for (let i = 0; i < textArray.length; i++) {
    let len = Math.ceil(textArray[i].length / 2);
    bionicText +=
      textArray[i].slice(0, len).bold() + textArray[i].slice(len) + " ";
    if (
      bionicText.length >= 2500 &&
      bionicText.charAt(bionicText.length - 2) === "."
    ) {
      outputArray.push(bionicText);
      bionicText = "";
    }
  }
  outputArray.push(bionicText);
  return outputArray;
}
