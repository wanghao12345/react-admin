/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react';
import ReactCanvasNest from 'react-canvas-nest'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {
  LoginWrapper,
  LoginForm
} from './style'

function Login(props) {
  const { history, location } = props
  const { getFieldDecorator } = props.form;
  const canvasConfig = {
    pointColor: '169,244,1',
    lineColor: '255,255,255',
    count: 50
  };

  // 登录
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.handleSaveUserInfo(values)
        if (location.state && location.state.from) {
          history.push(location.state.from)
        } else {
          history.push('/app/home')
        }
      }
    });
  };

  return (
    <LoginWrapper>
      <ReactCanvasNest
        className="canvasNest"
        config={canvasConfig}
        style={{zIndex: 99}}
      >
      </ReactCanvasNest>
      <LoginForm>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item style={{marginTop: '-15px'}}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住账号</Checkbox>)}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{width: '100%'}}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </LoginForm>
    </LoginWrapper>
  );
}

/**
 * 将dispatch映射到props(改变state)
 */
const mapDispatchToProps = (dispatch) => {
  return {
    // 改变
    handleSaveUserInfo (data) {
      dispatch(actionCreators.saveUserInfo(data))
    }
  }
}

const WrappedLoginForm = Form.create()(Login);
export default connect(null, mapDispatchToProps)(WrappedLoginForm);
