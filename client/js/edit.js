Template.edit.showing = function(chapterId){
  return Session.get('chapter') == chapterId;
};
Template.edit.real_chapter = function(chapterId){
  return Chapters.findOne(chapterId);
};
Template.edit.chapter_title = function(chapterId){
  return Chapters.findOne(chapterId).title;
};
Template.edit.events({
  'click #addChapter':function(){
    var chapterId = Chapters.insert({
      title: "New Chapter",
      scenes: []
    });
    VNs.update(this._id, {
      $push: {chapters: chapterId}
    });
  },
  'change .chapter-title':function(e){
    Chapters.update(this.concat(""), {
      $set: { title: $(e.target).val().trim() }
    });
  },
  'click .showScenes': function(e){
    Session.set('chapter', this.concat(""));
  }
});
