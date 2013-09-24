Template.edit.action_type = function(type){
  return this.type == type;
};
Template.edit.scene_actions = function(){
  return Scenes.findOne(Session.get('scene id')).actions;
};
Template.edit.scene_location = function(){
  return Scenes.findOne(Session.get('scene id')).location;
};
Template.edit.editing = function(){
  return Session.get('editing');
};
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

// EVENTS
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
  },
  'click .editScene': function(e){
    Session.set('editing',true);
    Session.set('scene id',this._id);
  },
  'click #saveScene': function(e){
    Session.set('editing',false);
  },
  'click #addActionSpeech':function(e){
    Scenes.update(Session.get('scene id'),{
      $push: {actions: {
        type: "speech",
        speaker: "NAME",
        speech: "Blah blah blah.",
        animations:[]
      }}
    });
  },
  'click #addActionChoice':function(e){
    Scenes.update(Session.get('scene id'),{
      $push: {actions: {
        type: "choice",
        options: []
      }}
    });
  },
  'click #addActionVisual':function(e){
    Scenes.update(Session.get('scene id'),{
      $push: {actions: {
        type: "visual",
        animations:[]
      }}
    });
  }
});
