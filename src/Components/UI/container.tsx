import { ReactNode } from 'react';

export type ContainerProps = {
  children: ReactNode;
};

export default function Container(props: ContainerProps) {
  return <div className="container">{props.children}</div>;
}
