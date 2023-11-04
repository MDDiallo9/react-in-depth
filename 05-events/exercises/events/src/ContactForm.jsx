const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value,e.target[1].value,e.target[2].value)
        /* Other method using the formData API */
        const fd = new FormData(e.target)
        console.table(Object.fromEntries(fd))
    }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="firstName" id="" placeholder="First Name"/>
        <input type="text" name="lastName" id="" placeholder="Last Name"/>
        <input type="text" name="age" id="" placeholder="Age"/>
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default ContactForm;
