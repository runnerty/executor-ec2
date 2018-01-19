# EC2 executor for [Runnerty]:

### Methods:
#### Create Snapshot
* Configuration sample:
```json
{
  "id":"ec2_default",
  "type":"@runnerty-executor-ec2",
  "apiVersion": "2016-11-15",
  "accessKeyId": "ABC123",
  "secretAccessKey": "ABC123",
  "region": "eu-west-1"
}
```

* Plan sample:
```json
{
  "id":"ec2_default",
    "command":"createSnapshot",
    "params": {
      "VolumeId": "vol-ABC123",
      "Description": "Daily-backup"
    }
}
```

It's possible to use this executor with any of the AWS EC2 methods supported by the official API. You can have a look at the documentation [here](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html)

[Runnerty]: http://www.runnerty.io