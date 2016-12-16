var gcloud = require('gcloud')({
		  projectId: process.env.GCP_PROJECT  // GCPの環境変数
});

var vision = gcloud.vision(),
    gcs = gcloud.storage();

exports.processFile = function(event, callback) {
  var file = gcs.bucket(event.data.bucket).file(event.data.name);

  vision.detectText(file, function(err, text, apiResponse) {
    console.log('text:', text);
  });
  callback();
};
