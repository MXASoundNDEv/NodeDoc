function Back(){
    history.back()
}

function copy_button(){
    var cpp = document.getElementsByClassName("language-cpp")
    //console.log(`adding ${cpp[1]} copy button`)
    // console.log(`cpp :`)
    // console.log(typeof cpp)
    // console.log(`parent :`)
    // console.log(pre)
    for (let i = 0; i < cpp.length; i++) {
        var pre = cpp[i].parentNode
        var cpbut = document.createElement('BUTTON');
        cpbut.setAttribute("class","copy_btn")
        cpbut.setAttribute("onclick","copy()")
        var text = document.createTextNode("Copy");
        cpbut.appendChild(text);
        pre.appendChild(cpbut);
    }

    var js = document.getElementsByClassName("language-js")
    //console.log(`adding ${js[1]} copy button`)
    // console.log(`js :`)
    // console.log(typeof js)
    // console.log(`parent :`)
    // console.log(pre)
    for (let i = 0; i < js.length; i++) {
        var pre = js[i].parentNode
        var cpbut = document.createElement('BUTTON');
        cpbut.setAttribute("class","copy_btn")
        cpbut.setAttribute("onclick","copy()")
        var text = document.createTextNode("Copy");
        cpbut.appendChild(text);
        pre.appendChild(cpbut);
    }
}

if (!navigator.clipboard) {
    console.log("Copy-to-clipboard disabled because your browser does not appear to support it.");
}

function copy(select) {
    alert("WIP")
}

window.addEventListener("load", function(event) {
    copy_button()
})
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


//WIP copied from (https://developer.mozilla.org)

// function CopyTEST(){

//     [...document.querySelectorAll("div.code-example pre:not(.hidden)")].forEach(
//         (element) => {
//             const wrapper = element.parentElement;
//             // No idea how a parentElement could be falsy in practice, but it can
//             // in theory and hence in TypeScript. So to having to test for it, bail
//             // early if we have to.
//             if (!wrapper) return;
//             const button = document.createElement("button");
//           const span = document.createElement("span");
//           const liveregion = document.createElement("span");
  
//           span.textContent = "Copy to Clipboard";
  
//           button.setAttribute("type", "button");
//           button.setAttribute("class", "icon copy-icon");
//           span.setAttribute("class", "visually-hidden");
//           liveregion.classList.add("copy-icon-message", "visually-hidden");
//           liveregion.setAttribute("role", "alert");
//           liveregion.style.top = "52px";
  
//           button.appendChild(span);
//           wrapper.appendChild(button);
//           wrapper.appendChild(liveregion);
  
//           button.onclick = async () => {
//             let copiedSuccessfully = true;
//             try {
//               const text = element.textContent || "";
//               await navigator.clipboard.writeText(text);
//             } catch (err) {
//               console.error(
//                 "Error when trying to use navigator.clipboard.writeText()",
//                 err
//               );
//               copiedSuccessfully = false;
//             }
  
//             if (copiedSuccessfully) {
//               button.classList.add("copied");
//               showCopiedMessage(wrapper, "Copied!");
//             } else {
//               button.classList.add("failed");
//               showCopiedMessage(wrapper, "Error trying to copy to clipboard!");
//             }
  
//             setTimeout(
//               () => {
//                 hideCopiedMessage(wrapper);
//               },
//               copiedSuccessfully ? 1000 : 3000
//             );
//             };
//         }
//     )[doc];
// }
// function showCopiedMessage(wrapper: HTMLElement, msg: string) {
//     const element = getCopiedMessageElement(wrapper);
//     element.textContent = msg;
//     element.classList.remove("visually-hidden");
// }
//   ²
// function hideCopiedMessage(wrapper: HTMLElement) {
//     const element = getCopiedMessageElement(wrapper);
//     element.textContent = ""; // ensure contents change, so that they are picked up by the live region
//     if (element) {
//       element.classList.add("visually-hidden");
//     }
// }
  
// function getCopiedMessageElement(wrapper: HTMLElement) {
//     const className = "copy-icon-message";
//     let element: HTMLSpanElement | null = wrapper.querySelector(
//       `span.${className}`
//     );
//     if (!element) {
//       element = document.createElement("span");
//       element.classList.add(className);
//       element.classList.add("visually-hidden");
//       element.setAttribute("role", "alert");
//       element.style.top = "52px";
//       wrapper.appendChild(element);
//     }
//     return element;
// }