var React=require('react');
var NameFeild=React.createClass({
  getInitialState: function(){
    return{value:""};
  },
  clear:function(){
    this.setState({value:""});
  },
  onChange:function(e){
    this.setState({value:e.target.value});
  },
  render: function(){

      return(
          <div className=" col-sm-6 ">
        <input clasName="form-control" placeholder={this.props.type} onChange={this.onChange} value={this.state.value}/>
        </div>
      );
  }

});
module.exports=NameFeild;
