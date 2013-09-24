Router.configure({
  layout: 'layout',
  notFoundTemplate: '404'
});
Router.map(function(){
  this.route('logged_in_home', {path: '/'});
  this.route('create');
  this.route('editList', {path: '/edit'});
  this.route('edit', {
    path: '/edit/:_id',
    data: function(){ return VNs.findOne(this.params._id); }
  });
  this.route('watch');
});
