import { generate } from './firebase.js';

const browseLink = document.querySelector('#browse');
const downloadLink = document.querySelector('#download');
const scrolly = document.querySelector("#generated").getBoundingClientRect().top;

document.querySelector('#create').addEventListener('click', async function(e) {
    e.preventDefault();
    const text = document.querySelector('textarea').value;
    if(text.length === 0)
        return;

    try {
        console.log(generate);
        let result = await generate(JSON.stringify({ text }));

        result = await result.data;

        if (result.pages && result.pages.length > 0) {
            const content = result.pages[0];
            document.querySelector("#generated").innerHTML = content;
        }

        window.scrollTo({
            top: window.scrollY + scrolly,
            left: 0,
            behavior: 'smooth'
        });
    } catch (err) {
        console.log(err);
    }
});

// TODO: Disabled for now. Until I turn the download into a cloud function.
// document.querySelector('#download').addEventListener('click', function(e) {
//     e.preventDefault();
//     fetch('/download', {
//         method: 'GET'
//     })
//     .then(res => res.blob()).then(blob => {
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = url;
//         link.download = 'Arabic-bionic-text.html';
//         link.click();
//     });
// });

