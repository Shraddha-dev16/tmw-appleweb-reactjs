function toggleNested(row) {
  let next = row.nextElementSibling;
  while (next && next.classList.contains("nested-row")) {
    next.classList.toggle("d-none");
    next = next.nextElementSibling;
  }
}