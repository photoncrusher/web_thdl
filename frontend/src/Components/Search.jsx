import React, { useEffect, useState } from "react";
import {
    Stack,
} from "@chakra-ui/core";
import Header from "./Header";
class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = { name:'',status:'',ram:'',rom:'',color:'',page:1,product:[]}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    fetch("http://localhost:8000/search", {"method":"GET"}).then(response => response.json()).then(response => {
      this.setState({
        'product': response.data
      })
    })
  }

  handleSubmit(event){
    const { name,status,ram,rom,color } = this.state
    const newFeature = [{'match': {'name': name}},
    {'match': {'status': status}},
    {'match': {'ram': ram}},
    {'match': {'rom': rom}},
    {'match': {'color': color}}]
    fetch("http://localhost:8000/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeature)
    })
    event.preventDefault()
    this.componentDidMount()

  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  render(){
    const products = this.state.product
    return(
      <div>
        <Header></Header>
      <form onSubmit={this.handleSubmit}>
        <div style={{paddingLeft:'30%', paddingTop:'5px',paddingBottom:'5px', backgroundColor:'#7e888c'}}>
          <label htmlFor='name'></label>
          <input style={{width:'600px',height:'30px',border:'0px',fontSize:'20px'}}
            name='name' 
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div style={{backgroundColor:'#e9e9e9'}}>
        <table style={{marginLeft:'30%',width:'40%',height:'100px',textAlign:'center'}}>
          <tr>
            <td>
            <label htmlFor='status'>Trạng thái </label>
            </td>
            <td>
                <select
                name = "status"
                onChange={this.handleChange}
                value = {this.state.status}
                style={{width:'80%',height:'38px'}}
                >
                  <option value="">None</option>
                  <option value="Cũ">Cũ</option>
                  <option value="Mới">Mới</option>
                </select>
            </td>
            <td>
            <label htmlFor='ram'>Bộ nhớ RAM </label>

            </td>
            <td>
                <input 
                  style={{width:'50%',height:'30px'}}

                  name='ram'
                  placeholder='Ram GB/MB' 
                  value = {this.state.ram}
                  onChange={this.handleChange}
                />
            </td>
          </tr>
          <tr>
          <td>
            <label htmlFor='status'>Màu sắc </label>
            </td>
            <td>
                <select
                name = "color"
                onChange={this.handleChange}
                value = {this.state.color}
                style={{width:'80%',height:'38px'}}
                >
                  <option value="">None</option>
                  <option value="chưa rõ">ngẫu nhiên</option>
                  <option value="Bạc">Bạc</option>
                  <option value="Đen">Đen</option>
                  <option value="Đỏ">Đen</option>
                  <option value="Tím">Đen</option>
                  <option value="Trắng">Đen</option>
                  <option value="Xanh">Đen</option>
                  <option value="Hồng">Hồng</option>
                  <option value="Vàng">Vàng</option>
                  <option value="Xám">Xám</option>
                </select>
            </td>
            <td>
            <label htmlFor='rom'>Bộ nhớ ROM </label>

            </td>
          <td>
              <div>
                <input
                style={{width:'50%',height:'30px'}} 
                  name='rom'
                  placeholder='Rom GB' 
                  value = {this.state.rom}
                  onChange={this.handleChange}
                />
              </div>
            </td>
            
          </tr>
        </table>
        </div>
        
        <div>
          <button style={{backgroundColor:'#4CAF50',border:'none',color:'white', padding:'15px 32px',textAlign:'center',textDecoration:'none',display:'inline-block',fontSize:'16px',marginLeft:'65%',marginTop:'10px'}}>
          Search</button>
        </div>
      </form>
      <div>
          <table class='tbl' style={{marginLeft:'25%',width:'800px',marginTop:'20px',paddingLeft:'20px',borderRadius:'10px',backgroundColor:'#e9e9e9',WebkitTransition: 'all 1s linear'}}>
          {products && products.map(product => {
            return  <tr>
            <td>
            <img src="https://cdn.tgdd.vn/Products/Images/42/228736/iphone-12-violet-1-600x600.jpg" style={{width:'80px',height:'80px',paddingTop:'10px',paddingRight:'20px',verticalAlign:'middle'}}></img>
          <a>{product.name}</a><br></br>
          <a><img src='data:image/png;base64,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' style={{width:'20px'}}></img> {product.ram}, </a>
          <a><img src='https://findicons.com/files/icons/1949/crunk_filetype/150/rom.png' style={{width:'20px'}}></img> {product.rom}, </a>
          <a><img src="data:image/png;base64,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" style={{width:'20px'}} /> {product.color}, </a>
          <a><img src="https://static.thenounproject.com/png/63767-200.png" style={{width:'20px'}} /> {product.status}</a>
            </td>
            <td>
              <a>Có tổng cộng {product.num_place} nơi bán</a>
            </td>
          <td>
          <button style={{backgroundColor:'#2186cf',border:'none', padding:'15px 32px',textAlign:'center',textDecoration:'none',display:'inline-block',fontSize:'16px',textAlign:'end'}}>
          <a href = {'/View/'+product.store_id+'&'+product.ram+'&'+product.rom+'&'+product.name+'&'+product.num_place+'&'+product.color+'&'+product.status} style={{textDecoration:'none',color:'white'}}>
          Xem các nơi bán 
          </a>
          </button>
          </td>            
          </tr>
        })}
        </table></div>

      </div>
    )
  }
}
export default Form