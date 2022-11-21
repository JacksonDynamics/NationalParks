const descriptions = document.querySelectorAll('.description-display')
for (let desc of descriptions.values()) {
    let content = desc.innerText.slice(250);
    console.log(`${content}...`);
  }
  