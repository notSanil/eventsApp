import { Button } from "@mui/material";

interface NavItemProps {
  children: string;
}

export default function NavItem({ children }: NavItemProps) {
  return (
    <Button
      variant="text"
      sx={{
        textTransform: "capitalize",
        marginX: 0.5,
        color: "black",
        flexShrink: 0,
      }}
    >
      {children}
    </Button>
  );
}
