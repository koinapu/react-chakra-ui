import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerContent } from "@chakra-ui/modal";
import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Flex
                as="nav"
                bg="teal.500"
                color="gray.50"
                align="center"
                justify="space-between"
                padding={{ base: 3, md: 5 }}
            >
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
                    <Heading as="h1" fontSize={{ base: "md", md: "xl" }}>ユーザ管理アプリ</Heading>
                </Flex>
                <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
                    <Box pr={4}>
                        <Link>ユーザ一覧</Link>
                    </Box>
                    <Link>設定</Link>
                </Flex>
                <IconButton
                    aria-label="メニューボタン"
                    icon={<HamburgerIcon />}
                    size="sm"
                    variant="unstyled"
                    display={{ base: " block", md: "none" }}
                    onClick={onOpen}
                />
            </Flex>
            <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button w="100%">TOP</Button>
                        <Button w="100%">ユーザ一覧</Button>
                        <Button w="100%">設定</Button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Flex
                as="nav"
                bg="teal.200"
                color="gray.50"
                align="center"
                justify="space-between"
                padding={{ base: 1, md: 2 }}
            >
                <Heading as="h2" fontSize={{ base: "xs", md: "sm" }}>サブヘッダ</Heading>
            </Flex>
        </>
    )
    //return <div style={{ height: "50px", backgroundColor: "teal" }}></div>
});