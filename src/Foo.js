import React from 'react';

import type R from './type';

type Props = {
  x: string,
  y: string,
} & R;

export default class Foo extends React.Component {
  props: Props;

  render() {
    return <div>{JSON.stringify([this.props.x, this.props.y])}</div>
  }
}

