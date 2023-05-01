/** 重めの処理 */
export const heavyFunction = () =>
  [...Array(10000)].forEach(() => console.log("render"));
