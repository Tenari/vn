Template.editList.vn = function(){
  return VNs.find({author: Meteor.userId()});
};
Template.editList.format = function(author){
  if (author == Meteor.userId())
    return "me";
  return Meteor.users.findOne(author).username;
};
