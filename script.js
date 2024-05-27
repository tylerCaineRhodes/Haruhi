(deleteText = (element) => {
  if(element.hasChildNodes()) {
    element.childNodes.forEach(node => deleteText(node));
    return;
  }

  if (element.nodeType !== Text.TEXT_NODE) return;

  const haruhiRegex = /(Suzumiya)|(Haruhi)|(涼宮)|(ハルヒ)/gi;
  const haruhiWasMentioned = element.textContent.match(haruhiRegex);

  if (!haruhiWasMentioned) return;

  element.textContent = element.textContent.replace(haruhiRegex, '🤫');
})(document);
