const { DateTime } = require("luxon");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/mypic.jpg");
  eleventyConfig.addPassthroughCopy("./src/codecareernepal.jpg");
  eleventyConfig.addPassthroughCopy("./src/hamrocourse.jpg");
  eleventyConfig.addPassthroughCopy("./src/hamrokhabar.jpg");
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
