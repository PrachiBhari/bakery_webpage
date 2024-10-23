const ContactForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" required />
        
        <label>Email:</label>
        <input type="email" required />
        
        <label>Message:</label>
        <textarea required></textarea>
        
        <button type="submit">Send</button>
      </form>
    );
  }
  
  export default ContactForm;
  