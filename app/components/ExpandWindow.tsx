'use client';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = { title: string; spaceList: number[] };

const ExpandWindow = ({ title, spaceList }: Props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>
        {spaceList.map((space, index) => (
          <div key={space}>{`${index + 1}: ${Math.round(space)} mm`}</div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
export default ExpandWindow;
