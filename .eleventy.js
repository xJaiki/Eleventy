module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection("chapters", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/chapters/*.md").sort((a, b) => a.date - b.date);
    });
  
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy({ "img/favicon": "/" });
  
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
  