
  function toggleNested(row) {
    const icon = row.querySelector('.arrow-icon');
    if (icon) icon.classList.toggle('rotate');

    let nextRow = row.nextElementSibling;
    while (nextRow && nextRow.classList.contains('nested-row')) {
      nextRow.classList.toggle('d-none');
      nextRow = nextRow.nextElementSibling;
    }
  }

