/*
Alternative to package `classnames`:
- concat a list of className into one
- support conditional className
*/
const cls: { (...args: any[]): string } = function (...args) {
  let classString = "";
  const classes: string[] = [];
  Array.from(args).forEach((arg: any) => {
    if (typeof arg === "object") {
      Object.keys(arg).forEach((key) => {
        classes.push(arg[key] ? key : "");
      });
    } else {
      classes.push(arg);
    }
  });

  classString = classes.filter((c) => c !== "").join(" ");
  return classString;
};
export default cls;
