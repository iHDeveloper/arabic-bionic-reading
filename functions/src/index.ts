import * as functions from 'firebase-functions/v1';

export const generateArabicBionic = functions.region('europe-west1').https.onCall((data, _) => {
    if (data.text) {
        const result = transform(data.text);
        return { pages: [result] };
    } else {
        return { pages: ["unknown error"]};
    }
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
