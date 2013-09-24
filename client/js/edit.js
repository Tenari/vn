Template.edit.scene_objects = function(chapterId){
  var scenes = [];
  var chapter = Chapters.findOne(chapterId.concat(""));
  for (var i = 0; i < chapter.scenes.length; i++){
    scenes.push(Scenes.findOne(chapter.scenes[i]));
  }
  return scenes;
};
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
  },
  'click .addScene':function(e){
    var sceneId = Scenes.insert({
      location: "A Generic Place",
      actions: []
    });
    Chapters.update(this.concat(""), {
      $push: {scenes: sceneId}
    });
  },
  'change .scene-location': function(e){
    Scenes.update(this._id, {
      $set: { location: $(e.target).val().trim() }
    });
    console.log(this);
  }
});
