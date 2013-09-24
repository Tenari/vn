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
       {
         script:[ //array of actions
           {
             speaker: "string",
             speech: "string",
             animations: [
               //data
             ]
           },
           {},{}...
         ]
       },
       {},{}...
     ]
   }
*/
