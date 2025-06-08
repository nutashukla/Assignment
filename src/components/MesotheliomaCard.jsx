import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';
import { bulletPoints } from '../utils/data';

const cardStyles = {
  borderRadius: 8,
  backgroundColor: '#f5e6d8',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  overflow: 'visible',
};

const titleStyles = {
  color: '#5d4e75',
  fontWeight: 'bold',
  marginBottom: 1,
  lineHeight: 1.2,
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
};

const bodyTextStyles = {
  color: '#666',
  marginBottom: 1,
  lineHeight: 1.6,
  fontSize: '0.8rem'
};

const listItemTextStyles = {
  margin: 0,
  '& .MuiTypography-root': {
    color: '#666',
    fontSize: '0.7rem',
    lineHeight: 1.5
  }
};

export default function MesotheliomaCard() {
  return (
    <Card sx={cardStyles}>
      <CardContent sx={{ padding: 3 }}>
        <Typography variant="h6" component="h1" sx={titleStyles}>
          Have you or a loved one been affected by Mesothelioma?
        </Typography>

        <Typography variant="body2" sx={bodyTextStyles}>
          As a woman, you've carried the weight of care, love, and resilience.
          Now it's time someone stands with you.
        </Typography>

        <List>
          {bulletPoints.map((text, idx) => (
            <ListItem key={idx} sx={{ p: '4px 0', alignItems: 'flex-start' }}>
              <ListItemIcon sx={{ minWidth: 24, mt: '5px' }}>
                <FiberManualRecord sx={{ fontSize: 8, color: '#5d4e75' }} />
              </ListItemIcon>
              <ListItemText primary={text} sx={listItemTextStyles} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
