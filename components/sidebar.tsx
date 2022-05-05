import { Box, List, ListItem, Divider, Center, LinkBox, LinkOverlay, ListIcon } from "@chakra-ui/layout";
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from "react-icons/md"
import NextImage from "next/image";
import NextLink from "next/link";


const navMenu = [
    {
        name: "Home",
        icon: MdHome,
        route: '/'
    },
    {
        name: "Search",
        icon: MdSearch,
        route: '/search'
    },
    {
        name: "Library",
        icon: MdLibraryMusic,
        route: '/library'
    },
]
const musicMenu = [
    {
        name: "Create Play List",
        icon: MdPlaylistAdd,
        route: '/'
    },
    {
        name: "Favorites",
        icon: MdFavorite,
        route: '/favorites'
    }
]


const playLists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

const Sidebar = () => {

    return (
        <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
            <Box paddingY="20px" height="100%">
                <Box width="120px" marginBottom="20px">
                    <NextImage src="/logo.png" width={120} height={60} />
                </Box>
                <Box marginBottom="20px">
                    <List spacing={4}>
                        {navMenu.map((item, index) => {
                            return (
                                <ListItem paddingX="20px" fontSize="1rem" key={index}>
                                    <LinkBox>
                                        <NextLink href={item.route} passHref>
                                            <LinkOverlay>
                                                <ListIcon as={item.icon} color="white" marginRight="20px" />
                                                {item.name}
                                            </LinkOverlay>
                                        </NextLink>
                                    </LinkBox>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
                <Divider color="gray.800" />
                <Box marginTop="20px" >
                    <List spacing={2}>
                        {musicMenu.map((item, index) => {
                            return (
                                <ListItem paddingX="20px" fontSize="1rem" key={index}>
                                    <LinkBox>
                                        <NextLink href={item.route} passHref>
                                            <LinkOverlay>
                                                <ListIcon as={item.icon} color="white" marginRight="20px" />
                                                {item.name}
                                            </LinkOverlay>
                                        </NextLink>
                                    </LinkBox>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
                <Divider color="gray.800" />
                <Box height="66%" overflowY="auto" paddingY="20px">
                    <List spacing={2}>
                        {playLists.map((item, index) => {
                            return (
                                <ListItem paddingX="20px" key={item}>
                                    <LinkBox>
                                        <NextLink href={`/`} passHref>
                                            <LinkOverlay>
                                                {item}
                                            </LinkOverlay>
                                        </NextLink>
                                    </LinkBox>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar;