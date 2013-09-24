Template.watch.availableVN = function() {
  return VNs.find({author: Meteor.userId()});
};
