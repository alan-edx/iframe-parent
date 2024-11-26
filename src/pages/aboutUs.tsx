import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
        Cras venenatis euismod malesuada. Nulla facilisi. Praesent tristique, leo a bibendum blandit, sapien urna 
        laoreet erat, nec interdum justo ex ac ligula.
      </p>
      <p style={styles.paragraph}>
        Integer ac risus nec dui laoreet consectetur a ac urna. Nam convallis, eros nec faucibus tincidunt, 
        velit sapien convallis erat, in facilisis orci erat id ligula. Morbi sit amet nisi nec orci feugiat viverra.
      </p>
      <p style={styles.paragraph}>
        Suspendisse potenti. Proin eget arcu at mauris placerat dictum. Etiam vel lectus non nunc pulvinar 
        euismod sed a urna. Maecenas a tincidunt velit. Nullam porttitor lorem a purus dapibus, ac fringilla 
        nisl eleifend. Sed quis lacus nec nisi malesuada fermentum.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#333',
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  paragraph: {
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
};

export default AboutUs;
