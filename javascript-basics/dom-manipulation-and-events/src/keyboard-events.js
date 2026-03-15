let textBox = document.querySelector("#message");
let messageDisplay = document.querySelector("#message-display");

textBox.addEventListener("keydown", (e) => {
  const entry = document.createElement("div");
  entry.textContent = `Key: ${e.key}, Code: ${e.code}`;
  messageDisplay.append(entry);
});
