import React from 'react'
import Layout from '../components/Layout'
import { Col, Form, Input, Row } from 'antd'
import FormItem from 'antd/es/form/FormItem'
const ApplyDoctor = () => {
  //handle form
  const handleFinish =(values)=>{
    console.log(values)
  }
  return (
    <div>
  <Layout>
    <h1 className='text-center'>ApplyDoctor</h1>
   <Form layout='"vertical' onFinish={handleFinish} className='m-3'>
   <h4 className=''>Personal Details</h4>
    <Row> 
      <Col xs={24} md={24} lg={8}>
          <FormItem label="first name" name="firstName" required rules={[{required:true}]}>
            <Input type='text' placeholder='your first name'/>
          </FormItem>
          <FormItem label="last name" name="lastName" required rules={[{required:true}]}>
            <Input type='text' placeholder='your last name'/>
          </FormItem>
          <FormItem label="phone" name="phone" required rules={[{required:true}]}>
            <Input type='text' placeholder='your name'/>
          </FormItem>
          <FormItem label="email" name="email" required rules={[{required:true}]}>
            <Input type='text' placeholder='your name'/>
          </FormItem>
          <FormItem label="website" name="website" required rules={[{required:true}]}>
            <Input type='text' placeholder='your name'/>
          </FormItem>
      </Col>
      </Row>
   </Form>
  </Layout>
    </div>
  )
}

export default ApplyDoctor