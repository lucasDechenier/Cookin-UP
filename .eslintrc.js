module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 4
      },      
      "multiline": {
        "max": 4
      }
    }],
    'vue/multi-word-component-names': 'off',
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "ignore",
      "multiline": "ignore"
    }] 
  }
}