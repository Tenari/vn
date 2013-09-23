Template.edit.vn = function(){
  return VNs.find({author: Meteor.userId()});
};
Template.edit.format = function(author){
  if (author == Meteor.userId())
    return "me";
  return Meteor.users.findOne(author).username;
};
