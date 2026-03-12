const btn = document.querySelector("#btn");

// disable default context menu behavior on right click
btn.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// show the mouse event message
btn.addEventListener("mouseup", (e) => {
  let msg = document.querySelector("#message");
  switch (e.button) {
    case 0:
      msg.textContent = "Left mouse button clicked.";
      break;
    case 1:
      msg.textContent = "Middle mouse button clicked.";
      break;
    case 2:
      msg.textContent = "Right mouse button clicked.";
      break;
    case 3:
      msg.textContent = "Fourth (Browser Back) button clicked.";
      break;
    case 4:
      msg.textContent = "Fifth (Browser Forward) button clicked.";
      break;
    default:
      msg.textContent = `Unknown mouse button code: ${e.button}`;
  }
});
