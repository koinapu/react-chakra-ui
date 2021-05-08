import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const history = useHistory();
    const onClickHome = useCallback(() => history.push("/home"), []);
    const onClickUserManagement = useCallback(() => history.push("/home/user_management"), []);
    const onClickSetting = useCallback(() => history.push("/home/setting"), []);

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
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
                    <Heading as="h1" fontSize={{ base: "md", md: "xl" }} >ユーザ管理アプリ</Heading>
                </Flex>
                <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
                    <Box pr={4}>
                        <Link onClick={onClickUserManagement}>ユーザ一覧</Link>
                    </Box>
                    <Link onClick={onClickSetting}>設定</Link>
                </Flex>
                <MenuIconButton onClick={onOpen} />
            </Flex>
            <MenuDrawer
                onClose={onClose}
                isOpen={isOpen}
                onClickHome={onClickHome}
                onClickUserManagement={onClickUserManagement}
                onClickSetting={onClickSetting}
            />
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