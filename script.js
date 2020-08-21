(deleteText = (element) => {
  if(element.hasChildNodes()){
    element.childNodes.forEach(node => deleteText(node));
  } else if (element.nodeType === Text.TEXT_NODE){
    if (element.textContent.match(/(Suzumiya)|(Haruhi)|(涼宮)|(ハルヒ)/gi)) {
      element.textContent = element.textContent.replace(
        /(Suzumiya)|(Haruhi)|(涼宮)|(ハルヒ)/gi,
        ''
      );
      // element.remove();
    } 
  }
})(document);
