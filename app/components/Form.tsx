'use client';
import { useState } from 'react';

const Form = () => {
  const [beamLength, setBeamLength] = useState(0);
  const [weldLength, setWeldLength] = useState(100);
  const [gapMinimum, setGapMinimum] = useState(0);
  const [gapMaximum, setGapMaximum] = useState(0);
  const [results, setResults] = useState<
    { gap: number; numberOfWelds: number }[]
  >([]);

  console.log(results);

  const calculateWelds = () => {
    setResults([]);
    let numberOfWelds = 2;
    let currentGap = 100000000;
    const results = [];
    while (currentGap > gapMinimum) {
      currentGap =
        (beamLength - weldLength * numberOfWelds) / (numberOfWelds - 1);

      if (currentGap > gapMinimum && currentGap < gapMaximum) {
        console.log(currentGap, numberOfWelds);
        results.push({ gap: currentGap, numberOfWelds });
      }
      numberOfWelds++;
    }
    setResults(results);
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 1rem',
      }}
    >
      <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '1.2rem' }}>Enter weld length: </span>
        <input
          onChange={(e) => setWeldLength(Number(e.target.value))}
          value={weldLength}
          placeholder="length in mm..."
          type="number"
          style={{ fontSize: '1.2rem', padding: '0.2rem 0.5rem' }}
        />
      </div>
      <div
        style={{
          margin: '2rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>Enter beam length: </span>
        <input
          onChange={(e) => setBeamLength(Number(e.target.value))}
          value={beamLength}
          placeholder="length in mm"
          type="number"
          style={{ fontSize: '1.2rem', padding: '0.2rem 0.5rem' }}
        />
      </div>
      <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '1.2rem' }}>Enter gap range: </span>
        <input
          onChange={(e) => setGapMinimum(Number(e.target.value))}
          value={gapMinimum}
          placeholder="minimum..."
          type="number"
          style={{ fontSize: '1.2rem', padding: '0.2rem 0.5rem' }}
        />
        <input
          onChange={(e) => setGapMaximum(Number(e.target.value))}
          value={gapMaximum}
          placeholder="maximum..."
          type="number"
          style={{ fontSize: '1.2rem', padding: '0.2rem 0.5rem' }}
        />
      </div>
      <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
        <button
          onClick={() => calculateWelds()}
          style={{ fontSize: '1.4rem', padding: '0.3rem 0.6rem' }}
        >
          Calculate
        </button>
      </div>
      <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
        {results.map((result, index) => (
          <p key={index}>{`${result.numberOfWelds} welds with ${Math.round(
            result.gap
          )}mm gaps`}</p>
        ))}
      </div>
    </div>
  );
};
export default Form;
