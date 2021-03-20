export default (nodeToEraseId) => {
  const node = document.getElementById(nodeToEraseId);

  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
};
