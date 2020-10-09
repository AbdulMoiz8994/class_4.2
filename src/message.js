import React from 'react';

const Message=function(props){

return(
<div>
<h1>Hello world Here is , {props.name} {props.last} {props.message} </h1>
{props.children}

</div>
);
}

export default Message;