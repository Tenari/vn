Template.create.events({
  'click #create':function(){
    VNs.insert({
      title: $('#title').val(),
      author: Meteor.userId(),
      chapters: []
    });
    // redirect to edit-list
    Router.go('editList');
  }
});
