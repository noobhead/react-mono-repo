import React from "react";
import { Form, Select, ColorPicker, Button } from "antd";
import { cloneDeep, isEmpty } from "lodash";
import { defaultTheme, languages } from "../constants/globalConstants";
import { NotFoundComponent } from "@noobhead/react-component-library";

class ScratchPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        language: 'en',
        primaryThemeColor: '#FF0074',
        secondaryThemeColor: '#15B1B0',
        primaryFontColor: '#727272',
        secondaryFontColor: defaultTheme.secondaryFontColor,
      }
    }
  }

  updateData = (key, value) => {
    let data = {};
    if(!isEmpty(this.state.data)) {
      data = cloneDeep(this.state.data);
    }
    data[key] = value;
    this.setState({data: data})
  }

  renderLanguageSelection = () => (
    <Form.Item label="Language">
      <Select
        placeholder={"Select Language"}
        value={this.state.data && this.state.data.language}
        onChange={val => this.updateData('language', val)}
      >
        {
          Object.values(languages).map(lang => (
            <Select.Option key={lang.code} value={lang.code}>{lang.title}</Select.Option>
          ))
        }
      </Select>
    </Form.Item>
  )

  renderColorSelection = (title, key) => {
    if(isEmpty(title) || isEmpty(key)) {
      console.error("Connot render Color Selection without required fields");
      return null;
    }

    return (
      <Form.Item label={title}>
        <ColorPicker 
          value={this.state.data && this.state.data[key]}
          onChange={e => this.updateData(key,  e.toHexString())} 
        />
      </Form.Item>
    )
  }

  renderActionsSection = () => {
    return (
      <div className="scratchpad-actions-container">
        <h3>Actions</h3>
        <Form
          labelAlign='left'
          style={{width: 300}}
          layout="horizontal"
        >
          {this.renderLanguageSelection()}
          {this.renderColorSelection('Primary Theme Color', 'primaryThemeColor')}
          {this.renderColorSelection('Secondary Theme Color', 'secondaryThemeColor')}
          {this.renderColorSelection('Primary Font Color', 'primaryFontColor')}
        </Form>
      </div>
    )
  }

  renderPreviewSection = () => {
    return (
      <div className="scratchpad-preview-container">
        <h3>Preview</h3>
        <div className="component-preview-container">
          <NotFoundComponent 
            key={JSON.stringify(this.state.data)}
            language={this.state.data && this.state.data.language}
            primaryThemeColor={this.state.data && this.state.data.primaryThemeColor}
            secondaryThemeColor={this.state.data && this.state.data.secondaryThemeColor}
            primaryFontColor={this.state.data && this.state.data.primaryFontColor}
            secondaryFontColor={this.state.data && this.state.data.secondaryFontColor}
          />
        </div>
      </div>
    )
  }

  renderSeperator = () => (
    <div className="seperator">
      <div></div>
    </div>
  )

  render() {
    return (
      <div className="scratchpad-container">
        {this.renderActionsSection()}
        {this.renderSeperator()}
        {this.renderPreviewSection()}
      </div>
    )
  }
}

export default ScratchPad;
