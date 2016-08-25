
Vue.component('sv-menu', {

  template: '#menu-template',

  props: [{
    name: 'items',
    default: []
  },{
    name: "menuSize",
    type: String,
    default: 'medium'
  },{
    name: "stackable",
    default: true
  },{
    name: "borderless",
    default: false
  },{
    name: "fluid",
    default: false
  },{
    name: "compact",
    default: false
  },{
    name: "icon",
    default: false
  },{
    name: "labeledIcon",
    default: false
  },{
    name: "pointing",
    default: false
  },{
    name: "secondary",
    default: false
  },{
    name: "tabular",
    default: false
  },{
    name: "pagination",
    default: false
  },{
    name: "vertical",
    default: false
  },{
    name: "topFixed",
    default: false
  },{
    name: "bottomFixed",
    default: false
  },{
    name: "rightFixed",
    default: false
  },{
    name: "leftFixed",
    default: false
  },{
    name: "topAttached",
    default: false
  },{
    name: "bottomAttached",
    default: false
  },{
    name: "inverted",
    default: false
  }],

  data: function(){
    return {

    }
  },

  computed: {
    class: function () {
      var classes = ''
      if (this.menuSize)
        classes += this.menuSize + ' '
      if (this.fluid)
        classes += 'fluid '
      if (this.compact)
        classes += 'compact '
      if (this.icon)
        classes += 'icon '
      if (this.labeledIcon)
        classes += 'labeled icon '
      if (this.stackable)
        classes += 'stackable '
      if (this.borderless)
        classes += 'borderless '
      if (this.pointing)
        classes += 'pointing '
      if (this.secondary)
        classes += 'secondary '
      if (this.tabular)
        classes += 'tabular '
      if (this.pagination)
        classes += 'pagination '
      if (this.vertical)
        classes += 'vertical '
      if (this.topFixed)
        classes += 'top fixed '
      if (this.bottomFixed)
        classes += 'bottom fixed '
      if (this.rightFixed)
        classes += 'right fixed '
      if (this.leftFixed)
        classes += 'left fixed '
      if (this.topAttached)
        classes += 'top attached '
      if (this.bottomAttached)
        classes += 'bottom attached '
      if (this.inverted)
        classes += 'inverted '
      return classes;
    }
  },

  methods: {


  }

})
