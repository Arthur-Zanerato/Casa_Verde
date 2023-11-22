import React, { useState, useEffect, useRef } from "react";
import plantImage from "./images/home_plant.svg";
import {
  Description,
  Error,
  InputContainer,
  SectionNewsletter,
  Subscribe,
  Subtitle,
  TextP,
  Title,
} from "./styles";
import Modal from "../Modal";
import emailjs from "@emailjs/browser";

function useFormik({ initialValues, validate }) {
  const [touched, setTouchedFields] = useState({ userEmail: true });
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function handleChange(e) {
    const fieldName = e.target.getAttribute("name");
    const { value } = e.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function handleBlur(e) {
    const fieldName = e.target.getAttribute("name");
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    });
  }

  function validateValues(values) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
}

const NewsLetter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c12taov",
        "template_ge527rk",
        form.current,
        "iFZm1oYjAa1R8k9HU"
      )
  };

  const formik = useFormik({
    initialValues: {
      userEmail: "exemplo@email.com",
    },
    validate: function validate(values) {
      const errors = {};
      if (!values.userEmail.includes("@")) {
        errors.userEmail = "Insira um email válido!";
      }

      return errors;
    },
  });

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <SectionNewsletter>
        <Subscribe>
          <Description>
            <Subtitle>Sua casa com as</Subtitle>
            <Title>melhores plantas</Title>
          </Description>
          <TextP>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </TextP>
          <form ref={form} onSubmit={sendEmail}>
            <Modal
              isOpen={openModal}
              setModalOpen={() => setOpenModal(!openModal)}
            >
              {"Obrigado pela sua assinatura, você receberá nossas novidades no e-mail:  " +
                formik.values.userEmail}
            </Modal>

            <InputContainer>
              <input
                required
                type="email"
                placeholder="Insira seu e-mail"
                name="userEmail"
                id="userEmail"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.userEmail}
              ></input>
              <button onClick={() => setOpenModal(true)}>
                Assinar newsletter
              </button>
            </InputContainer>
            {formik.touched.userEmail && formik.errors.userEmail && (
              <Error>{formik.errors.userEmail}</Error>
            )}
          </form>
        </Subscribe>
        <img
          src={plantImage}
          alt="Imagem de uma planta em um vaso com várias folhas"
        />
      </SectionNewsletter>
    </>
  );
};

export default NewsLetter;
