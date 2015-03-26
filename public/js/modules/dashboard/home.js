define([
  'vue',
  'services/firebase',
  'services/test-helper',
  'text!./home.html'
], function(Vue, firebase, testHelper, template) {

  return Vue.component('dashboard_home', {

    layout: 'dashboard',

    inherit: true,

    template: template,

    data: function() {
      return {
        expanded: false,
        testHelper: testHelper,
        tests: firebase.collection(firebase.child('tests'))
      }
    }
  })
})
