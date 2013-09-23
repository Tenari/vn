Router.configure({
  layout: 'layout'
});
Router.map(function(){
  this.route('logged_in_home', {path: '/'});
  this.route('create');
  this.route('edit');
  this.route('watch');
});
