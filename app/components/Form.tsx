'use client';
import { useState } from 'react';
import ExpandWindow from './ExpandWindow';

const Form = () => {
  const [beamLength, setBeamLength] = useState<string | ''>('');
  const [weldLength, setWeldLength] = useState<string | ''>('100');
  const [gapMinimum, setGapMinimum] = useState<string | ''>('100');
  const [gapMaximum, setGapMaximum] = useState<string | ''>('300');
  const [results, setResults] = useState<
    { gap: number; numberOfWelds: number; spaceList: number[] }[]
  >([]);

  const calculateWelds = () => {
    if (!beamLength || !weldLength || !gapMinimum || !gapMaximum) return;
    setResults([]);
    let numberOfWelds = 2;
    let currentGap = 100000000;
    const results: {
      gap: number;
      numberOfWelds: number;
      spaceList: number[];
    }[] = [];
    while (currentGap > Number(gapMinimum)) {
      currentGap =
        (Number(beamLength) - Number(weldLength) * numberOfWelds) /
        (numberOfWelds - 1);

      if (currentGap > Number(gapMinimum) && currentGap < Number(gapMaximum)) {
        const spaceList = [];
        for (let i = 0; i < numberOfWelds; i++) {
          spaceList.push(i * (Number(weldLength) + currentGap) - currentGap);
          spaceList.push(i * (Number(weldLength) + currentGap));
        }
        spaceList.shift();
        spaceList.shift();

        results.push({ gap: currentGap, numberOfWelds, spaceList });
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
      <div
        style={{
          margin: '2rem',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {results.map((result, index) => (
          <ExpandWindow
            key={index}
            title={`${result.numberOfWelds} welds with ${Math.round(
              result.gap
            )}mm gaps`}
            spaceList={result.spaceList}
          />
        ))}
      </div>
    </div>
  );
};
export default Form;
