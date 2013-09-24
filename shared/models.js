VNs = new Meteor.Collection("vns");
/* {
     title: "string",
     author: userId,
     chapters: [
       chapterId, chapterId, chapterId, ... 
     ]
   } */ 
Chapters = new Meteor.Collection("chapters");
/*
   {
     title: "string",
     scenes: [
       sceneId, sceneId, sceneId, ...
     ]
   }
*/
Scenes = new Meteor.Collection("scenes");
/*
   {
     location: "",
     actions:[ 
       {
         speaker: "string",
         speech: "string",
         animations: [
           //data
         ]
       },
       {},{}...
     ]
   }
*/
