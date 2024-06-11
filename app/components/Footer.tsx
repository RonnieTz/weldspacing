const Footer = () => {
  return (
    <nav>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgb(20, 20, 20)',
          color: 'white',
          padding: '10px',
          fontSize: '12px',
          fontWeight: 'bold',
          textAlign: 'center',
          fontFamily: 'sans-serif',
          fontStyle: 'italic',
        }}
      >
        Copyright © 2024 by Ronis
      </div>
    </nav>
  );
};
export default Footer;
