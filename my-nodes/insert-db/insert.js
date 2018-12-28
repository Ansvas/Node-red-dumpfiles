module.exports = function(RED) {
     function LowerCaseNode(config) {
     RED.nodes.createNode(this,config);
     this.TableName = config.TableName;
     var node = this;
     this.on('input', function(msg) {
         msg.payload.tableName = node.TableName;
         node.send(msg);
     });
 }
    RED.nodes.registerType("createdb",LowerCaseNode);
}

