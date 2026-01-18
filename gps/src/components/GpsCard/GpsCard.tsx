import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GpsRecord } from "@/types/gps";

interface GpsCardProps {
  point: GpsRecord;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const GpsCard = ({ point, onEdit, onDelete }: GpsCardProps) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{point.label}</Typography>
        <Typography color="text.secondary">
          Latitude : {point.latitude}
        </Typography>
        <Typography color="text.secondary">
          Longitude : {point.longitude}
        </Typography>
      </CardContent>
      {(onEdit || onDelete) && (
        <CardActions>
          {onEdit && (
            <Button size="small" onClick={onEdit}>
              Modifier
            </Button>
          )}
          {onDelete && (
            <Button size="small" color="error" onClick={onDelete}>
              Supprimer
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
};
