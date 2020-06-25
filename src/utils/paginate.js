import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // transform to lodash object to add different functions
  return _(items).slice(startIndex).take(pageSize).value();
}
