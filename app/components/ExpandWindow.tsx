'use client';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';

type Props = { title: string; spaceList: number[] };

const ExpandWindow = ({ title, spaceList }: Props) => {
  const [selected, setSelected] = useState<number>(-1);

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
        <TableContainer>
          <Table>
            <TableBody>
              {spaceList.map((space, index) => (
                <TableRow
                  style={{ backgroundColor: index <= selected ? 'yellow' : '' }}
                  key={space}
                >
                  <TableCell>
                    <Typography variant="h6">{`${index + 1}:`}</Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        if (index === 0) return;
                        index % 2 === 0
                          ? setSelected(index)
                          : setSelected(index + 1);
                      }}
                      style={{
                        backgroundColor: index <= selected ? 'darkblue' : '',
                        color: index <= selected ? 'whitesmoke' : '',
                        width: '100%',
                        fontSize: '1.2rem',
                        fontWeight: 'bolder',
                        letterSpacing: '1.3px',
                      }}
                    >
                      {Math.round(space)} mm
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};
export default ExpandWindow;
