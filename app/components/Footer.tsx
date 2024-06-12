import { cookies } from 'next/headers';
import { connectToDatabase } from '../utils/connectToDatabase';
import { Visit } from '../utils/mongooseSchemas';

const Footer = async () => {
  await connectToDatabase();
  const _cookies = cookies();
  const res = await Visit.find();
  await Visit.findOneAndReplace(
    { value: res[0].value },
    { value: res[0].value + 1 }
  );
  console.log(res);
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
        <p>Copyright © 2024 by Ronis</p>
        <p style={{ marginLeft: '10px', position: 'absolute', right: '10px' }}>
          {`visits: ${res[0].value}`}
        </p>
      </div>
    </nav>
  );
};
export default Footer;
