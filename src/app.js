// Entrypoint for the application/widget
class ChatBot {
  constructor({ position = 'bottom-right' } = {}) {
    console.log('Chatbot created');
    this.position = this.getPosition(position);
    this.open = false;
    this.initialise();
  }

  /**
   * Get the component's position on page.
   */
  getPosition(position) {
    const [vertical, horizontal] = position.split('-');
    // i.e. return:
    // { bottom: 30px, right: 30px } by default
    return {
      [vertical]: '30px',
      [horizontal]: '30px',
    }
  }

  /**
   * Create all of the elements on the page.
   */
  initialise() {
    const container = document.createElement('div');
    // No matter where you are on page, ensure the bot is always on bottom-right by default
    container.style.position = 'fixed';
    // Set the 
    Object.keys(this.position).forEach(k => {
      // Set bottom/top and left/right to be the px value provided
      container.style[k] = this.position[k]
    });
    container.style.backgroundColor = 'red';
    container.style.width = '100px';
    container.style.height = '100px';
    document.body.appendChild(container);
  }
}

const c = new ChatBot();