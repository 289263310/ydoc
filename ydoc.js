module.exports = {
  title: "ydoc",
  description: "ydoc description demo",
  author: "ymfe",
  plugins: ["copy", "search"],
  pluginsConfig: {
    'import-asset': {
      css: 'custom.css'
    }
  },
  markdownIt: function(md){
    
  },
  dist: '_site'
}