import React from 'react';
import { Layout, theme } from 'antd';

const { Content } = Layout;

function Notes() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      Content
    </Content>
  );
}

export default Notes;
