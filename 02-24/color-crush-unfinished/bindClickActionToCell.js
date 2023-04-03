function bindClickActionToCell() {
  document.body.addEventListener("click", handleClick);

  function handleClick(event) {
    const elementClicked = event.target;
    const isTargetACell =
      elementClicked.hasAttribute("data-cellIndex") &&
      elementClicked.hasAttribute("data-rowIndex");

    if (isTargetACell) {
      handleClickOnCell(elementClicked);
    }
  }

  function handleClickOnCell(elementClicked) {
    const cellValueToMatch = elementClicked.getAttribute("class");
    const startingRowIndex = Number(
      elementClicked.getAttribute("data-rowIndex")
    );
    const startingCellIndex = Number(
      elementClicked.getAttribute("data-cellIndex")
    );
    const cellsThatMatch = getCellsThatMatchAndAreTouching({
      startingRowIndex,
      startingCellIndex,
      cellValueToMatch,
    });
    const isClearOut = cellsThatMatch.length >= 3;

    if (isClearOut) {
      clearOutCellThatMatchAndAreTouching(cellsThatMatch);
      renderBoard();
    }
  }

  function getCellsThatMatchAndAreTouching({
    startingRowIndex,
    startingCellIndex,
    cellValueToMatch,
  }) {
    return [];
  }

  function clearOutCellThatMatchAndAreTouching(cellsThatMatch) {
    cellsThatMatch.forEach(({ rowIndex, cellIndex }) => {
      matrix[rowIndex][cellIndex] = "";
    });
  }
}
