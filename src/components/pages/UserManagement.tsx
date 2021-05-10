import { useDisclosure } from "@chakra-ui/hooks";
import { Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
    const { getUsers, loading, users } = useAllUsers();

    const { isOpen, onOpen, onClose } = useDisclosure();

    // 初回のみユーザ取得
    useEffect(() => getUsers(), [getUsers]);

    const onClickUser = useCallback(() => onOpen(), []);

    return (
        <>
            {loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }} justify="center">
                    {users.map((res) => (
                        <WrapItem key={res.id} mx="auto">
                            <UserCard
                                imageUrl="https://source.unsplash.com/random"
                                userName={res.username}
                                fullName={res.name}
                                onClick={onClickUser}
                            />
                        </WrapItem>
                    ))}
                </Wrap >
            )}
            <UserDetailModal isOpen={isOpen} onClose={onClose} />
        </>
    )
});