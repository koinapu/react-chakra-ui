import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
    const { login, loading } = useAuth();
    const [userId, setUserId] = useState('');
    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
    const onClickLogin = () => login(userId)
    return (
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
                <Heading as="h1" size="lg" textAlign="center">ユーザ管理アプリ</Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px="18">
                    <Input placeholder="ユーザID" value={userId} onChange={onChangeUserId} />
                    <PrimaryButton onClick={onClickLogin} loading={loading} disabled={userId === ""}>ログイン</PrimaryButton>
                </Stack>
            </Box>
        </Flex >
    )
});