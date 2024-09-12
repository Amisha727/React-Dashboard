/*import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;*/

import { Box, useTheme } from "@mui/material";
import delhiMap from "../../assets/delhi.jpg";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      {/* Box containing the image */}
      <Box>
        <img 
          src={delhiMap}
          alt="Delhi SLDC Network Map" 
          style={{ maxWidth: '100%', height: 'auto' }} // Makes the image responsive
        />
      </Box>

      {/* Geography Chart Component */}
      <Box mt="20px">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
