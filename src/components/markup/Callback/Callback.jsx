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
            if (!values.email) {
              errors.email = 'Required';
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
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <FieldStyled type="text" name="name" placeholder="Enter your name" />
              {errors.name && touched.name ? (<CustomErrorMessage>{errors.name}</CustomErrorMessage>) : null}
              {/* <ErrorMessage name="name" component="div" /> */}
              {/* <FieldStyled type="email" name="email" placeholder="Enter email*" />
              {errors.email && touched.email ? (<CustomErrorMessage>{errors.email}</CustomErrorMessage>) : null} */}
              {/* <ErrorMessage name="email" component="div" /> */}

              <Field
                name="email"
                render={Input}
              />

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
