
import { useState } from 'react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="max-w-md mx-auto">
          {isSuccess ? (
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-md mb-6 text-center">
              Thank you for your message! I'll get back to you soon.
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-secondary/50 dark:bg-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-secondary/50 dark:bg-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 bg-secondary/50 dark:bg-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
