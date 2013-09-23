Template.create.events({
  'click #create':function(){
    VNs.insert({
      title: $('#title').val(),
      author: Meteor.userId(),
      chapters: []
    });
    window.location.pathname = Router.path('edit');
  }
});
