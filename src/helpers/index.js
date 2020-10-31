import hexRgb from "hex-rgb";

export const parseHexValue = (hex) => {
  const parsedValue = hexRgb(hex, { format: "array" });
  return `rgb(${parsedValue.join(",").slice(0, -2)})`;
};
