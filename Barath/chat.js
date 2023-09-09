  
    const form = document.querySelector('form');
    const chatbox = document.querySelector('#chatbox');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    
      const messageInput = document.querySelector('#message');
      const messageText = messageInput.value.trim();
    
      if (messageText !== '') {
        // Add the user's message to the chatbox
        const sentMessage = document.createElement('div');
        sentMessage.classList.add('message', 'sent');
        sentMessage.textContent = messageText;
        chatbox.appendChild(sentMessage);
    
        // Generate and add the auto reply to the chatbox
        const receivedMessage = document.createElement('div');
        receivedMessage.classList.add('message', 'received');
        receivedMessage.textContent = generateAutoReply(messageText);
        chatbox.appendChild(receivedMessage);
    
        // Clear the input field
        messageInput.value = '';
      }
    });
    
    function generateAutoReply(message) {
      // Write your auto reply logic here
      // You can use if/else statements or switch/case statements to handle different messages
      // For example:
     /* if (message.toLowerCase().includes('Hi')) {
        return 'Hi there!';
      } 
      else if (message.toLowerCase().includes('how are you')) {
        return 'I am doing well, thank you. How about you?';
      } 
        else if (message.toLowerCase().includes('how are you?')) {
        return 'I am doing well, thank you. How about you?';
      } 
      else {
        return 'I am sorry, I did not understand your message.';
      }
    }*/
     if (message.includes('Hi')) {
        return '☑ Hi there! How are you ?';
      } 
      else if (message.includes('How are you')) {
        return '☑ I am doing well, thank you. How about you?';
      }
      
      else if (message.includes('How are you?')) {
        return '☑ I am doing well, thank you. How about you?';
      }
    
    
       else if (message.toLowerCase().includes('Hello')) {
        return '☑ how are you';
      }
    
      else if (message.includes('hello')) {
        return '☑ how are you';
      }
    
       else if (message.toLowerCase().includes('Ok')) {
        return '☑ Bye Bye';
      }
      else if (message.includes('Ok')) {
        return '☑ Bye Bye';
      }
      
      else if (message.toLowerCase().includes('i am fine how are you ?')) {
        return '☑ how are you';
      }
    
      else if (message.includes('I am fine How are you ?')) {
        return '☑ how are you';
      }
      else if (message.toLowerCase().includes('hi')) {
        return '☑ how are you';
      }
    
      
      else {
        return ' ☑ OOps! This page web developing Soon 🛠 ';
      }
    }
    
    