"use strict";

const AWS = require("aws-sdk");

const Execution = global.ExecutionClass;

class ec2Executor extends Execution {
  constructor(process) {
    super(process);
  }

  exec(params) {
    let _this = this;

    const ec2Config = {
      apiVersion: params.apiVersion,
      accessKeyId: params.accessKeyId,
      secretAccessKey: params.secretAccessKey,
      region: params.region
    };

    const ec2 = new AWS.EC2(ec2Config);

    // Executes the AWS-EC2 command
    ec2[params.command](params.params, function(err, data) {
      if (err){
        const endOptions = {
          end: "error",
          messageLog: err,
          err_output: err
        }
        _this.end(endOptions);
      }else{
        const endOptions = {
          end: "end",
          data_output: data
        };
        _this.end(endOptions);
      }
    });
  }
}

module.exports = ec2Executor;