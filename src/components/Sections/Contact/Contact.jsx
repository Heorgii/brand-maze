import { useState } from 'react';
import { ContactForm, LabelOfItem, InputOfItem, TextareaOfItem, ButtonContainer, InputForFile, Button, ContainerForInputForFile, LabelForInputForFile} from './Contact.styled';
import { Container, Title } from 'components/baseStyles/CommonStyle.styled';

export const Contact = () => {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [file, setFile] = useState('');

document.querySelector("html").classList.add('js');
console.log(file);

const handleSubmit = () => {
  console.log(`send:`,userFirstName, userLastName, userEmail, userPhone, userMessage, file);
  setUserFirstName('');
  setUserLastName('');
  setUserEmail('');
  setUserPhone('');
  setUserMessage('');
  setFile('');
  document.querySelectorAll('.file-return')[0].innerHTML = '(Allowed file formats - pdf doc docx odt ods. Maximum file size - 5 mb)'
}

const handleChange = (e) => {
  e.preventDefault();
  switch(e.target.name){
    case "user-firstname": setUserFirstName(e.target.value);
    break;
    case "user-lastname": setUserLastName(e.target.value);
    break;
    case "user-email": setUserEmail(e.target.value);
    break;
    case "user-phone": setUserPhone(e.target.value);
    break;
    case "comment": setUserMessage(e.target.value);
    break;
    default: 
    break;
  }
}

  return <Container>
    <Title>Contact</Title>
    <ContactForm
            className="contact-form"
            name="form-contacts"
            autoComplete="on"
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <LabelOfItem aria-label="Name">
            <span>First Name</span>
              <br/><InputOfItem
                type="text"
                name="user-firstname"
                required
                placeholder="John"
                value={userFirstName}
                onChange={e => handleChange(e)}
              />
            </LabelOfItem>
            <LabelOfItem  aria-label="LastName">
            <span>Last Name</span>
            <br/>
              <InputOfItem
                type="text"
                name="user-lastname"
                required
                placeholder="Watson"
                value={userLastName}
                onChange={e => handleChange(e)}
              />
            </LabelOfItem>
            <LabelOfItem  aria-label="Email">
            <span>Email</span>
            <br/>
              <InputOfItem
                type="email"
                name="user-email"
                required
                placeholder="bob@gmail.com"
                value={userEmail}
                onChange={e => handleChange(e)}
              />
            </LabelOfItem>
            <LabelOfItem  aria-label="Phone">
            <span>Phone number</span>
            <br/>
              <InputOfItem
                type="tel"
                name="user-phone"
                required
                placeholder="+19739476185"
                value={userPhone}
                onChange={e => handleChange(e)}
              />

            </LabelOfItem>
            <LabelOfItem
              className="comment"
              aria-label="Comment"
              style={{width:"100%"}}
            >
            <span>Message</span>
            <br/>
              <TextareaOfItem
                name="comment"
                placeholder="Write your message"
                value={userMessage}
                onChange={e => handleChange(e)}
              ></TextareaOfItem>
             </LabelOfItem>
             <ButtonContainer>
              <ContainerForInputForFile>  
             <div className="input-file-container">
                <InputForFile 
                  className="input-file" id="my-file" 
                  type="file" accept="image/png, image/jpeg, .pdf, .doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(e)=>{ if(e.target.value === '' || e.target.value === undefined){document.querySelectorAll('.input-file-trigger')[0].innerHTML = 'Add a file...'; 
                  document.querySelectorAll('.file-return')[0].innerHTML = '(Allowed file formats - pdf doc docx odt ods. Maximum file size - 5 mb)'} else {
                    document.querySelectorAll('.input-file-trigger')[0].innerHTML = 'File added'; 
                    document.querySelectorAll('.file-return')[0].innerHTML = e.target.value};
                    setFile(e.target.files[0])}}/>
                <LabelForInputForFile tabIndex="0" htmlFor="my-file" 
                className="input-file-trigger" 
                onClick={(e)=>{document.querySelectorAll( ".input-file" ).focus()}}
                onKeyDown={(e)=>{if ( e.key === 13 || e.key === 32 ) { document.querySelectorAll( ".input-file" ).focus(); }
                }}>Add a file...
                </LabelForInputForFile>
            </div>  
            <Button style={{width:"156px", height:"40px"}}
              type="submit"
            >
              Send message
            </Button>
            </ContainerForInputForFile>  
            <ContainerForInputForFile>  
            <p className="file-return">(Allowed file formats - pdf doc docx odt ods. Maximum file size - 5 mb)</p>
            </ContainerForInputForFile>
            </ButtonContainer>
          </ContactForm>
  </Container>;
};
