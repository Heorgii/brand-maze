import { ContactForm, LabelOfItem, InputOfItem, TextareaOfItem} from './Contact.styled';
import { Container, Title } from 'components/baseStyles/CommonStyle.styled';
export const Contact = () => {
  return <Container>
    <Title>Contact</Title>
    <ContactForm
            className="contact-form"
            name="form-contacts"
            autoComplete="on"
            onSubmit={e => {
              e.preventDefault();
              // handleSubmit();
            }}
          >
            <LabelOfItem aria-label="Name">
            <span className="{css.form__label}">First Name</span>
              <br/><InputOfItem
                type="text"
                name="user-name"
                required
                placeholder="John"
                // value={name}
                // onChange={e => handleChange(e)}
              />
            </LabelOfItem>
            <LabelOfItem  aria-label="LastName">
            <span className="{css.form__label}">Last Name</span>
            <br/>
              <InputOfItem
                type="text"
                name="user-lastname"
                required
                placeholder="Watson"
                // value={lastName}
                // onChange={e => handleChange(e)}
              />
            </LabelOfItem>
            <LabelOfItem  aria-label="Email">
            <span className="{css.form__label}">Email</span>
            <br/>
              <InputOfItem
                type="email"
                name="user-email"
                required
                placeholder="bob@gmail.com"
                // value={email}
                // onChange={e => handleChange(e)}
              />
            </LabelOfItem>
            <LabelOfItem  aria-label="Phone">
            <span className="{css.form__label}">Phone number</span>
            <br/>
              <InputOfItem
                type="tel"
                name="user-phone"
                required
                placeholder="+19739476185"
                // value={phone}
                // onChange={e => handleChange(e)}
              />

            </LabelOfItem>
            <LabelOfItem
              className="comment"
              aria-label="Comment"
              style={{width:"100%"}}
            >
            <span className="{css.form__label}">Message</span>
            <br/>
              <TextareaOfItem
                name="comment"
                placeholder="Write your message"
                // value={message}
                // onChange={e => handleChange(e)}
              ></TextareaOfItem>
 
            </LabelOfItem>
            <button
              type="submit"
            >
              send
            </button>
          </ContactForm>
  </Container>;
};
