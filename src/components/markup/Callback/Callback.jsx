import contactPoster from '../../../assests/images/home/contact.jpg'
import contactPoster2x from '../../../assests/images/home/contact@2x.jpg'
import contactPosterWebp from '../../../assests/images/home/contact.webp'
import contactPosterWebp2x from '../../../assests/images/home/contact@2x.webp'

import { CallbackSection, CallbackPosterWrapper, CallbackContent, FieldStyled, CustomErrorMessage, FieldStyledV2 } from "./Callback.styled";
import { ButtonCallback, ButtonEl } from "../../Buttons";
import { TitleH2 } from '../../TitleH2';
import ResponsiveImg from '../../ResponsiveImg/ResponsiveImg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from '../../Input';

const img = {
  src: contactPoster,
  alt: "Callback man",
  jpg: {
    x1: contactPoster,
    x2: contactPoster2x,
  },
  webp: {
    x1: contactPosterWebp,
    x2: contactPosterWebp2x,
  },
}

export default function Callback() {
  return (
    <CallbackSection>
      <CallbackPosterWrapper>
        <ResponsiveImg settings={img} />
      </CallbackPosterWrapper>
      <CallbackContent>
        <TitleH2>Request Callback</TitleH2>
        <Formik
          initialValues={{ name: '', email: '' }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'This is a required field';
            }
            if (!values.email) {
              errors.email = 'This is a required field';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="name">
                {({ field, form }) => <Input field={field} form={form} placeholder="Enter your name" type="text" />}
              </Field>
              <Field name="email">
                {({ field, form }) => <Input field={field} form={form} placeholder="Enter email*" type="email" />}
              </Field>

              <ButtonEl type="submit" disabled={isSubmitting}>
                Send
              </ButtonEl>
            </Form>
          )}
        </Formik>

      </CallbackContent>
    </CallbackSection>
  )
}
