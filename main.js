if(Meteor.isServer){
  Meteor.startup(function(){
    qrcode = Meteor.npmRequire('yaqrcode');
    dataUriToBuffer = Meteor.npmRequire('data-uri-to-buffer');
    json2csv = Meteor.npmRequire('json2csv');
    fs = Meteor.npmRequire('fs');


    Future = Npm.require('fibers/future');
  });
}
