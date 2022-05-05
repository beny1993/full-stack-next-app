import { Box } from "@chakra-ui/layout"
import Sidebar from "./sidebar";


const PlayerLayout = ({ children }) => {
    return (
        <Box
            as="main"
            height="100vh"
            width="100vw"
        >
            <Box position="absolute" top="0" width="250px" left="0">
                <Sidebar />
            </Box>
            <Box marginLeft="250px" marginBottom="100px">
                {children}
            </Box>
            <Box position="absolute" left="0" bottom="0" > player</Box>
        </Box>
    )
}

export default PlayerLayout;