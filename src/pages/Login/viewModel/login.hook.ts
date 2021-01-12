import { useState } from 'react'

const useLoginHook = () => {
  const [loading, setLoading] = useState(false);
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return {
    loading,
    setLoading,
    emailField,
    setEmailField,
    passwordField,
    setPasswordField,
    errorMessage,
    setErrorMessage,
  }
}

export default useLoginHook