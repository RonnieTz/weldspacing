'use client';
import { useState } from 'react';

const Form = () => {
  const [beamLength, setBeamLength] = useState<string | ''>('');
  const [weldLength, setWeldLength] = useState<string | ''>('100');
  const [gapMinimum, setGapMinimum] = useState<string | ''>('');
  const [gapMaximum, setGapMaximum] = useState<string | ''>('');
  const [results, setResults] = useState<
    { gap: number; numberOfWelds: number }[]
  >([]);

  console.log(results);

  const calculateWelds = () => {
    if (!beamLength || !weldLength || !gapMinimum || !gapMaximum) return;
    setResults([]);
    let numberOfWelds = 2;
    let currentGap = 100000000;
    const results = [];
    while (currentGap > Number(gapMinimum)!) {
      currentGap =
        (Number(beamLength) - Number(weldLength) * numberOfWelds) /
        (numberOfWelds - 1);

      if (currentGap > Number(gapMinimum) && currentGap < Number(gapMaximum)) {
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
          onChange={(e) => {
            if (
              !Number.isNaN(Number(e.target.value)) ||
              e.target.value === ''
            ) {
              setWeldLength(e.target.value);
            }
          }}
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
          onChange={(e) => {
            if (
              !Number.isNaN(Number(e.target.value)) ||
              e.target.value === ''
            ) {
              setBeamLength(e.target.value);
            }
          }}
          value={beamLength}
          placeholder="length in mm"
          type="text"
          style={{ fontSize: '1.2rem', padding: '0.2rem 0.5rem' }}
        />
      </div>
      <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '1.2rem' }}>Enter gap range: </span>
        <input
          onChange={(e) => {
            if (
              !Number.isNaN(Number(e.target.value)) ||
              e.target.value === ''
            ) {
              setGapMinimum(e.target.value);
            }
          }}
          value={gapMinimum}
          placeholder="minimum..."
          type="number"
          style={{ fontSize: '1.2rem', padding: '0.2rem 0.5rem' }}
        />
        <input
          onChange={(e) => {
            if (
              !Number.isNaN(Number(e.target.value)) ||
              e.target.value === ''
            ) {
              setGapMaximum(e.target.value);
            }
          }}
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
