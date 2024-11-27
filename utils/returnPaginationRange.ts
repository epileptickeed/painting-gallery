// import _ from "lodash";

// export const returnPaginationRange = (
//   totalPage: number,
//   page: number,
//   // limit: number,
//   siblings: number
// ) => {
//   const totalPageNumInArray = 1 + siblings;
//   if (totalPageNumInArray >= totalPage) {
//     return _.range(1, totalPage + 1);
//   }
//   const leftSiblingsIndex = Math.max(page - siblings, 1);
//   // const showLeftDots = leftSiblingsIndex > 2;

//   const rightSiblingsIndex = Math.min(page + siblings, totalPage);
//   // const showRightDots = rightSiblingsIndex < totalPage - 2;

//   // if (!showLeftDots && showRightDots) {
//   //   const leftItemsCount = 1 + 2 * siblings;
//   //   const leftRange = _.range(1, leftItemsCount + 1);
//   //   return [...leftRange, "...", totalPage];
//   // } else if (showLeftDots && !showRightDots) {
//   //   const rightItemsCount = 1 + 3 * siblings;
//   //   const rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
//   //   return [1, "...", ...rightRange];
//   // } else {
//   //   const middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
//   //   return [1, "...", ...middleRange, "...", totalPage];
//   // }
// };
import _ from "lodash";

export const returnPaginationRange = (
  totalPage: number,
  page: number,
  // limit: number,
  siblings: number
) => {
  const totalPageNumInArray = 7 + siblings; // Общее количество отображаемых страниц
  if (totalPageNumInArray >= totalPage) {
    return _.range(1, totalPage + 1); // Если страниц меньше, чем общее количество, возвращаем все
  }

  const leftSiblingsIndex = Math.max(page - siblings, 2); // Индекс левой страницы-соседа
  const rightSiblingsIndex = Math.min(page + siblings, totalPage - 1); // Индекс правой страницы-соседа
  const showLeftDots = leftSiblingsIndex > 2; // Нужно ли показывать "..."
  const showRightDots = rightSiblingsIndex < totalPage - 1; // Нужно ли показывать "..."

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paginationRange: any = [1]; // Начинаем с первой страницы

  if (showLeftDots) {
    paginationRange.push("...");
  }

  paginationRange.push(..._.range(leftSiblingsIndex, rightSiblingsIndex + 1)); // Добавляем диапазон соседей

  if (showRightDots) {
    paginationRange.push("...");
  }

  paginationRange.push(totalPage); // Добавляем последнюю страницу

  return paginationRange;
};
