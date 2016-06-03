var React=require ('react');
var NameFeild=require('./NameFeild.jsx');


var LeadCapture=React.createClass({
  onSubmit:function(e){

  this.refs.feildemail.clear();
  this.refs.feildname.clear();

     },
    render:function(){

      return (
        <div className="container">
        <div  className="col-sm-8">
          <div className="panel panel-default">
            <div className="panel-body ">
              <NameFeild type='From' ref='feildname'/>

              <NameFeild type='To' ref='feildname'/>

              <div className="col-sm-offset-4">
              <button className="btn btn-primary" onClick={this.onSubmit}>Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
      }

});
module.exports=LeadCapture;
