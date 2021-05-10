import { memo, ReactNode, VFC } from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

type Props = {
    imageUrl: string;
    userName: string;
    fullName: string;
    onClick: () => void;
};

export const UserCard: VFC<Props> = memo((props) => {
    const { imageUrl, userName, fullName, onClick } = props;
    return (
        <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8 }} onClick={onClick}>
            <Stack textAlign="center">
                <Image alt={userName} m="auto" boxSize="160px" borderRadius="full" src={imageUrl} />
                <Text fontSize="lg" fontWeight="bold">{userName}</Text>
                <Text fontSize="sm" fontWeight="gray">{fullName}</Text>
            </Stack>
        </Box>
    )
});