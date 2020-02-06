angular.module('config', [])
  .constant('config',
  {
    prod: {
      region: 'us-west-2',
      upload_bucket_name: 'rekognition-stack-demo-s3upload-1gezpp4hs4cul',
      identity_pool_id: 'us-west-2:811ae595-f007-467f-919f-0056e4a81b3b',
      face_collection: 'rekognition-demo-go',
      ddb_table: 'rekognition-demo-go'

    }
  }
  )
  ;
