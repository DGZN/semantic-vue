
const menuItems = [{
  name: 'Menu Item One',
  active: true,
  isHeader: false
},{
  name: 'Menu Item Two',
  active: false,
  isHeader: true
},{
  name: 'Menu Item Three',
  active: false,
  isHeader: false
},{
  name: 'Menu Item Four',
  active: false,
  isHeader: false
},{
  name: 'Menu Item Five',
  active: false,
  isHeader: false
}]

var vm = new Vue({

  el: 'body',

  data: {

    menuItems: menuItems

  }

})
