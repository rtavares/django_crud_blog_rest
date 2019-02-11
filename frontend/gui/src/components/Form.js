import React from 'react';
import axios from 'axios';

import {
  Form, Input, Button,
} from 'antd';


class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, articleID) => {

        const title = event.target.elements.title.value;
        const text = event.target.elements.text.value;

        // eslint-disable-next-line
        switch(requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    text: text
                });
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    text: text
                });
        }
    };

    render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(
            event, this.props.requestType, this.props.articleID
        )}>
          <Form.Item label="Title">
            <Input name="title" placeholder="Post title" />
          </Form.Item>
          <Form.Item label="Text">
            <Input name="text" placeholder="Post text" />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
          </Form.Item>
        </Form>
      </div>
    );
}
}

export default CustomForm;
