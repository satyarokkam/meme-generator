import {Component} from 'react'
import {
  Heading,
  MainDiv,
  FormElement,
  LabelELement,
  InputElement,
  CustomButton,
  CustomMenu,
  DisplayImage,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    topText: '',
    bottomText: '',
    url: '',
    fontSize: '',
    displayPic: false,
  }

  onEnterBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onEnterImageUrl = event => {
    this.setState({url: event.target.value})
  }

  onEnterTopText = event => {
    this.setState({topText: event.target.value})
  }

  onSelectFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  submitDetails = event => {
    event.preventDefault()
    console.log('event')
    this.setState({displayPic: true})
  }

  render() {
    const {bottomText, topText, displayPic, url, fontSize} = this.state
    console.log(fontSize)
    console.log(url)
    return (
      <MainDiv data-testid="testid">
        <FormElement onSubmit={this.submitDetails} data-testid="testid">
          <Heading positonText={false} data-testid="testid">
            Meme Generator
          </Heading>

          <LabelELement htmlFor="image" data-testid="testid">
            IMAGE URL
          </LabelELement>
          <InputElement
            type="text"
            id="image"
            placeholder="Enter the Image URL"
            onChange={this.onEnterImageUrl}
            data-testid="testid"
          />

          <LabelELement htmlFor="top-text" data-testid="testid">
            TOP TEXT
          </LabelELement>
          <InputElement
            type="text"
            id="top-text"
            placeholder="Top Text"
            onChange={this.onEnterTopText}
            data-testid="testid"
          />

          <LabelELement htmlFor="bottom-text" data-testid="testid">
            BOTTOM TEXT
          </LabelELement>
          <InputElement
            type="text"
            id="bottom-text"
            placeholder="Bottom Text"
            onChange={this.onEnterBottomText}
            data-testid="testid"
          />

          <LabelELement data-testid="testid" htmlFor="fontSizesOptionsList">
            FONT SIZE
          </LabelELement>
          <CustomMenu
            data-testid="testid"
            name="fontSizesOptionsList"
            id="fontSizesOptionsList"
            onChange={this.onSelectFontSize}
          >
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId} value={each.displayText}>
                {each.displayText}
              </option>
            ))}
          </CustomMenu>

          <CustomButton data-testid="testid" type="submit">
            Generate
          </CustomButton>
        </FormElement>
        {displayPic && (
          <DisplayImage data-testid="meme" url={url}>
            <Paragraph fontSize={fontSize} positonText>
              {topText}
            </Paragraph>
            <Paragraph fontSize={fontSize} positonText>
              {bottomText}
            </Paragraph>
          </DisplayImage>
        )}
      </MainDiv>
    )
  }
}

export default MemeGenerator
