import { Image } from "@chakra-ui/image";
import { Wrap, WrapItem } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
    return (
        <Wrap p={{ base: 4, md: 6 }}>
            <WrapItem p={{ base: 4, md: 6 }}>
                <UserCard imageUrl="https://source.unsplash.com/random" userName="こいぬ" fullName="koikoi" />
            </WrapItem>
        </Wrap >
    )
});