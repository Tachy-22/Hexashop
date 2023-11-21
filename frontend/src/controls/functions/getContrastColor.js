const getContrastColor = (rgb) => {
  if (rgb) {
    // Parse the RGB string to get individual color values
    const [r, g, b] = rgb.match(/\d+/g).map(Number);

    // Calculate the relative luminance (perceptual brightness)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black or white depending on luminance
    if (luminance > 0.7) {
      return "#333333"; // Darker color for lighter backgrounds
    } else if (luminance < 0.5) {
      return "white";
    } else {
      return "rgb(32, 33, 33)"; // Lighter color for darker backgrounds
    }
  } else {
    return;
  }
};

export default getContrastColor;
