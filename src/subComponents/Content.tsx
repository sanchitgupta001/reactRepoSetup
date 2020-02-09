import React from 'react';

type contentPropsType = {
  content: string;
};

function Content(props: contentPropsType) {
  return <div>{props.content}</div>
}

export default Content;