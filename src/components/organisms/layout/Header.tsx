import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

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
                <MenuIconButton onClick={onOpen} />
            </Flex>
            <MenuDrawer onClose={onClose} isOpen={isOpen} />
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
});